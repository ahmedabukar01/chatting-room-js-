// Render chat templete to Dom
//Clear the list of chats (when the room changed);
class ChatUi{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),{addSuffix:true});
        const html = `
         <li class="list-group-item">
            <span class="username">${data.name}</span>
            <span class="messagae">${data.message}</span>
            <div class="time">${when}</div>
         </li>
        `;
        this.list.innerHTML += html;
    }
}

