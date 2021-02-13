// Dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const feedback = document.querySelector('.feedback');

newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const name = newNameForm.name.value.trim();
    myChatRoom.updateName(name);
    feedback.textContent = `Your Name has been updated to ${name}`;
    setTimeout(x=>{
        feedback.textContent ="";
    },3000);

    newNameForm.reset();
})

newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    myChatRoom.addChat(message)
    .then(()=>newChatForm.reset())
    .catch(err=>console.log(err));
})

// checking local storage.
const username = localStorage.username? localStorage.username : 'Anonymous';

// class instances
const myChatRoom = new Chatroom('gaming',username);
const chatUi = new ChatUi(chatList);
//get chat and render
myChatRoom.getChats(data=>{chatUi.render(data)});

