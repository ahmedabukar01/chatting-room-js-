// Render chat templete to Dom
//Clear the list of chats (when the room changed);
class ChatUi{
    constructor(list){
        this.list = list;
    }
    render(data){
        const html = `
         <li class="list-group-item">
            <span class="username">${data.name}</span>
            <span class="messagae">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
         </li>
        `;
        this.list.innerHTML += html;
        console.log(this.list);
    }
}

