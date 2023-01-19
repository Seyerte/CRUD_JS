// DOM (Document Object Model) 
let buttonAdd = document.getElementById("buttonPlus");
let cardsList = document.getElementById("cardsList");
let newCard= document.getElementById("newCard");
//Variables
const cards = [];
let isEditMode = false;
let indexToEdit; null;




//LOGICA

// funcion flecha, crea una funcion.
//funcion de agregar tarjeta
const addCard = () => {
    if (isEditMode) cards.push(newCard.value);
    if (isEditMode) cards(indexToEdit) = newCard.value;
    newCard.value = "";
    render();
};

//funcion de eliminar tarjetas
function deleteByIndex (index) {
    cards.splice (index, 1);
    render();
}

const editByIndex = (index) => {
    newCard.value = cardsList(index);
    isEditMode; true;
    indexToEdit = index;
    buttonPlus.innerText = "update";
    console.log(indexToEdit);
    render();
}



//FUNCION RENDER
const render = () => {
    let template = "";
    cards.forEach(
        (card, index) => 
            (template += 
                `<li>${card}>
                    <button onclick="deleteByIndex(${index})">Delete</button>
                    <button onclick=editByIndex(${index})">Edit</button>
                </li>`));
    cardsList.innerHTML = template;
}

render();

console.log(cards);