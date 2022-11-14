// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

const listaSpesa = ["acqua","pane","latte","carne","uova","vino"];


// for (i = 0; i < listaSpesa.length; i++){
//     // let lista = document.getElementById("lista-spesa")
//     let oggetto = document.createElement("li");
//     document.getElementById("lista-spesa").appendChild(oggetto);
//     oggetto.innerText = (listaSpesa[i]);
    
// }


let i = 0;
while (i < listaSpesa.length){
    i++;
    let oggetto = document.createElement("li");
    document.getElementById("lista-spesa").appendChild(oggetto);
    oggetto.innerText = (listaSpesa[i]);
}
