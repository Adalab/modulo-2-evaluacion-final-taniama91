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
        //console.log(dataApi);
        //pintar un listado
        seriesSearch = dataApi;   
        renderSeriesList (seriesSearch);
    });
}

//PINTA ESTRUCTURA SERIE
function renderSeries(serie){
    let html="";
    
    html+=`<ul class="serie">`;
    
    //CONDICIONAL QUE ME DEVUELVE LA FOTO Y SI NO TIENE ME PONE UNA IMAGEN DE RELLENO
    if (serie.show.image !== null){
        html+=`<li>
        <h3>${serie.show.name}</h3>
        <img src="${serie.show.image.medium}" alt="${serie.show.name}"/>
        </li>`
      }else{
        html+= `<li>
        <h3>${serie.show.name}</h3>
        <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${serie.show.name}"/>
        </li>`;
      }
    html+=`</ul>`
    return html;
}

//PINTAR LISTADO CON BUCLES
function renderSeriesList (listSeries){
    console.log(listSeries);
    for (const serie of listSeries) {
        listSearch.innerHTML+= renderSeries(serie)
    }
}

function handleClickSearch(event) {
    event.preventDefault();
    //devuelveme la info de API 
    getApiInfo ();
};


//EVENTO SOBRE BOTÓN DE BUSCAR
btnSearch.addEventListener('click', handleClickSearch);