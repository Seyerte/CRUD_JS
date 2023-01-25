// DOM (Document Object Model) 
// se asignan variables a los elementos del html con id 
let buttonAdd = document.getElementById("buttonPlus");
let cardsList = document.getElementById("cardsList");
let newCard= document.getElementById("newCard");
let newTitle = document.getElementById("newTitle");
let newImage = document.getElementById("newImage");
//Variable para almacenar los objetos de las tarjetas
const cards = [];
// variables para controlar el modo edicion e indice a editar
let isEditMode = false;
let indexToEdit= null;

// Funciones  // funcion flecha, crea una funcion.
//funcion de agregar tarjeta
const addCard = () => {
    const card = { //Objeto card con valores de titulo e imagen
        title: newTitle.value,
        image: newImage.value
    };
    if (!isEditMode) cards.push(card); // si no esta en modo EDICION se añade la tarjeta al array "cards"
    if (isEditMode) cards[indexToEdit] = card; // si esta en modo edición se reemplaza la tarjeta correspondiente
    newTitle.value = ""; // se vacia el input 
    newImage.value = ""; // se vacia el input 
    render(); // llamamos a la funcion render para actualizar el HTML
};

//funcion de eliminar tarjetas
function deleteByIndex (index) {
    cards.splice (index, 1); // se elimina la tarjeta correspondiente del array cards
    render(); // llamamos a la funcion render de nuevo para actualizar HTML
};

//funcion editar segun su indice
const editByIndex =  (index) => {
    // se asigna los valores del titulo y la imagen 
    newTitle.value = cards[index].title; 
    newImage.value = cards[index].image; 
    isEditMode = true; // se activa el modo edicion
    indexToEdit = index; 
    buttonPlus.innerText = "";

};

// Función para volver al modo agregar tarjetas
const toAddMode = () => {
    isEditMode = false; //se desactiva el modo edición
    //buttonAdd.innerText = "Add"; // Esta funcion cambia el contenido en el input 
    indexToEdit = null;
}

//FUNCION RENDER
// Funcion que se encarga de renderizas o mostrar en pantalla las tarjetas que se han creado
const render = () => {
    let template = ""; //variable template que se va concatenando con una plantilla de cada tarjeta
    // la funcion forEach recorre el arreglo "cards" y en cada iteracón se agrega una nueva tarjeta con los datos correspondientes
    // y la variable "index" se utiliza para asignar el indice de cada tarjeta
    cards.forEach((card, index) => { 
            template +=  //funcion de concatenar
                `<li class="card">
                    <img class="image" src="${card.image}" alt="">
                    <h2>${card.title}</h2>
                    <button class="button" onclick="deleteByIndex(${index})">Delete</button>
                    <button class="button" onclick="editByIndex(${index})">Edit</button>
                </li>`});
    cardsList.innerHTML = template; // innerHTML del elemento "cardsList" se le asigna el template para mostrarlo
};

render();

console.log(cards); // imprime en la consola del navegador para verificar que este funcionando 