
const addNewWEField = () => {
    console.log("Adding new filed");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

const addNewAQField = () => {
    console.log("Adding new filed");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-1")
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")
    let nameT2 = document.getElementById("nameT2")
    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    document.getElementById('contactT').innerHTML =
        document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML =
        document.getElementById('addressField').value;

    document.getElementById('fbT').innerHTML =
        document.getElementById('fbField').value;


    document.getElementById('instaT').innerHTML =
        document.getElementById('instaField').value;

    document.getElementById('linkedT').innerHTML =
        document.getElementById('linkedField').value;

    document.getElementById('objectiveT').innerHTML =
        document.getElementById('ObjectiveField').value;

    //setting work exp     
    let wes = document.getElementsByClassName('weField')

    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('workT').innerHTML = str;

    let aqs = document.getElementsByClassName('eqField')

    let str1 = "";
    for (let e of aqs) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    //code for setting image
    let file = document.getElementById('imgField').files[0]

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    };

    document.getElementById('main').style.display = "none";
    document.getElementById('cv-templet').style.display = "block";

}
//print cv
function printCV() {
    window.print();
}