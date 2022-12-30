const add_todo = () => {

    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    let todos = [];
    
    let localTodos = localStorage.getItem("todos"); //string value

    if (localTodos != null) {
        todos = JSON.parse(localTodos); //string value to object
    }

    let todoObject = {
        title: title,
        desc: desc,
        id: Math.trunc(Math.random() * 1000) // generate random value of 3 decimal
    }

    todos.push(todoObject);

    localStorage.setItem("todos", JSON.stringify(todos));

    // show_todo();


}
// show the data
const show_todo = () => {
    let todoString = localStorage.getItem("todos");
    let content = "";

    if (todoString == null) {
        content += "<h3 class='text-white'>NO TODO TO SHOW</h3>";
    } else {
        let todos = JSON.parse(todoString);
        for (let todo of todos.reverse()) {
            content += `
              
              
              <div class='card mt-2'>
                <div class='card-body'>
                <h3>${todo.title}</h3>
                <p>${todo.desc}</p> 
                <div class="container text-center" id="delete">
                <button onclick="todoDelete()" class="btn btn-sm btn-danger">Delete</button>
            </div>
                </div>    
              </div>
              
              
              `;
        }
    }

    document.getElementById("main-content").innerHTML = content;
};

const todoDelete= () => {
    console.log("deleted");
    

}
 
show_todo();


