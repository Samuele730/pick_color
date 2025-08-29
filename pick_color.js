const ContenitoreColori = document.getElementById("Contenitore_colori");
const color_picker_div = document.querySelectorAll("#Contenitore_colori div");
const span_elementi = document.querySelectorAll("span");
const forma = document.getElementById("forma");
const pick_color = document.querySelector("input");
let elemento_h3 = document.createElement("h3");
let h3_attuale;
forma.appendChild(elemento_h3);
elemento_h3.textContent = "rgb(255, 255, 255)";
for(let numero = 0; numero<color_picker_div.length; numero++){
    span_elementi[numero].classList.add("colore_backgroud" + numero);
    span_elementi[numero].addEventListener("click" , function (e) {
    h3_attuale = document.querySelector("h3");
    forma.className = e.target.className;
    elemento_h3.textContent = getComputedStyle(span_elementi[numero]).backgroundColor;
    if(h3_attuale){
    forma.removeChild(h3_attuale);
    forma.removeAttribute("style");
    }
    forma.appendChild(elemento_h3);
})
};

pick_color.addEventListener("input" , function () {
    forma.style.backgroundColor = pick_color.value;
    elemento_h3.textContent = getComputedStyle(forma).backgroundColor;
    if(getComputedStyle(forma).backgroundColor >= "rgb(0, 0, 0)" && getComputedStyle(forma).backgroundColor <= "rgb(221, 212, 212)"){
        forma.style.color = "white";

    }
    else{
        forma.style.color = "black";
    }
})


pick_color.addEventListener("change" , function () {
    let elemento_span = document.createElement("span");
    let elemento_div = document.createElement("div");
    h3_attuale = document.querySelector("h3");
    elemento_div.appendChild(elemento_span);
    elemento_span.style.backgroundColor = pick_color.value;
    ContenitoreColori.appendChild(elemento_div);
    elemento_h3.textContent = getComputedStyle(elemento_span).backgroundColor;
    elemento_h3.style.textAlign = "center";
    if(h3_attuale){
        forma.removeChild(h3_attuale);
    }
    forma.appendChild(elemento_h3);
    elemento_span.addEventListener("click", function () {
    forma.style.backgroundColor = elemento_span.style.backgroundColor;
});
})
