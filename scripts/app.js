// Dom queries
const chatList = document.querySelector('.chat-list');

// class instances
const myChatRoom = new Chatroom('General','xusni');
const chatUi = new ChatUi(chatList);
//get chat and render
myChatRoom.getChats(data=>{chatUi.render(data)});

const hey = new Chatroom('Ahmed','asha');
hey.getChats(data=>{chatUi.render(data)})