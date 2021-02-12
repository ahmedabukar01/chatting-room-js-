class Chatroom{
    constructor(room,name){
        this.room = room;
        this.name = name;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        const now = new Date();
        const chat = {
            message,
            name:this.name,
            room:this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        // saving data
        const res = await this.chats.add(chat).then(()=>{
            console.log('chat added');
        }).catch(err => console.log(err));
    }

    getChats(callback){
       this.chats.where('room', '==', this.room).orderBy('created_at')
            .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            })
        })
    }

    updateName(name){
        this.name = name;
    }
    updateRoom(room){
        this.room = room;
        console.log("room updated");
        if(this.unsub){
            this.unsub();
        }
    }
}

