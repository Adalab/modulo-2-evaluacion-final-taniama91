'use strict'

//CONSTANTES 
//TRAER ELEMENTOS DEL HTML (FORM/SECTION)

const inputSearch = document.querySelector('.js-input-search'); //casilla buscar
const btnSearch = document.querySelector('.js-btn-search'); // boton buscar
const listFav = document.querySelector('.js-list-fav'); //lista favoritas
const listSearch =document.querySelector('.js-list-search'); //lista con la busqueda



//ARRAYS VACIOS
let seriesSearch = []; 
let seriesFav = [];


function getApiInfo () {
    const valueInput = inputSearch.value;    
        //URL
    const url =`//api.tvmaze.com/search/shows?q=${valueInput}`
    fetch(url)
    .then((response) => response.json())
    .then(dataApi => {       
        console.log(dataApi);
        //pintar un listado
        seriesSearch = dataApi;   
        renderSeriesList (seriesSearch);
    });
}

//PINTA ESTRUCTURA SERIE
function renderSeries(oneSerie){
    let html="";
    html+=`<h3>${oneSerie.show.name}</h3>`;
    html+=`<ul class="serie">`;
    html+=`<img src`
    html+=`</ul>`
    return html;
}

//PINTAR LISTADO CON BUCLES
function renderSeriesList (listSeries){
    console.log(listSeries);
    for (const oneSerie of listSeries) {
        listSearch.innerHTML+= renderSeries(oneSerie)
    }
}



function handleClickSearch(event) {
    event.preventDefault();
    //llamar info de API 
    getApiInfo ();
};


//eventos

btnSearch.addEventListener('click', handleClickSearch);