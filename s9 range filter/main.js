const URL = "https://fakestoreapi.com/products";
const div = document.getElementById("info");
const min = document.getElementById("rangeFilterCountMin");
const max = document.getElementById("rangeFilterCountMax");
const filtrar = document.getElementById('rangeFilterCount');
const limpiar = document.getElementById('clearRangeFilter');


function elFetch(funcion){
    fetch(URL)
        .then(response => response.json())
        .then(data => {funcion(data)})
        .catch(error => {alert('Error')})
}

function mostrarFetch(productos){
    htmlContentToAppend = ``;
        for (producto of productos){
            htmlContentToAppend += 
            `<div class="list-group-item">
                <div class="row">${producto.title}</div>
                <div class="row small text-muted"> ${producto.price}</div>
            </div>   `
        }
        div.innerHTML = htmlContentToAppend;

}

function filtrado(productos){
    let contFiltrado = [];
    for(producto of productos){
        if (producto.price >= min.value && producto.price <= max.value){
            contFiltrado.push(producto);
        }
    }
    mostrarFetch(contFiltrado);

}





function limpiarCampo(){
    Fetch(mostrarFetch)
    min.value = "";
    max.valie= "" ;
}

document.addEventListener("DOMContentLoaded", ()=> {
    elFetch(mostrarFetch);
});


filtrar.addEventListener("click",() => {elFetch(filtrado)});


limpiar.addEventListener('click',() =>{
    limpiarCampo();
});
