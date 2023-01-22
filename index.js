// DOM (Document Object Model) 
let buttonAdd = document.getElementById("buttonPlus");
let cardsList = document.getElementById("cardsList");
let newCard= document.getElementById("newCard");
let newTitle = document.getElementById("newTitle");
let newImage = document.getElementById("newImage");
//Variables
const cards = [];
let isEditMode = false;
let indexToEdit= null;


//LOGICA

// funcion flecha, crea una funcion.
//funcion de agregar tarjeta
const addCard = () => {
    const card = {
        title: newTitle.value,
        image: newImage.value
    };
    if (!isEditMode) cards.push(card);
    if (isEditMode) cards[indexToEdit] = card;
    toAddMode();
    newTitle.value = "";
    newImage.value = "";
    render();
};

//funcion de eliminar tarjetas
function deleteByIndex (index) {
    cards.splice (index, 1);
    render();
};

//funcion editar
const editByIndex =  (index) => {
    newTitle.value = cards[index].title; 
    newImage.value = cards[index].image; 
    isEditMode = true;
    indexToEdit = index;
    buttonPlus.innerText = "";
    console.log(indexToEdit);

};

const toAddMode = () => {
    isEditMode = false;
    //buttonAdd.innerText = "Add";
    indexToEdit = null;
}

//FUNCION RENDER
const render = () => {
    let template = "";
    cards.forEach((card, index) => {
            template += 
                `<li class="card">
                    <img class="image" src="${card.image}" alt="">
                    <h2>${card.title}</h2>
                    <button onclick="deleteByIndex(${index})">Delete</button>
                    <button onclick="editByIndex(${index})">Edit</button>
                </li>`});
    cardsList.innerHTML = template;
};


render();

console.log(cards);