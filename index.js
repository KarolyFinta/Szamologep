const szamGombElemek = document.querySelector(".szam");
const muveletGombElemek = document.querySelector(".muvelet");
const torles = document.querySelector("#torles");
const egyenlo = document.querySelector("#egyenlo");

const kiiras = document.querySelector(".eredmeny");

let elsoSzam =""
let masodikSzam = ""

szamGombElemek[0].addEventListener("click", szamKatt);
szamGombElemek[1].addEventListener("click", szamKatt);
szamGombElemek[2].addEventListener("click", szamKatt);
szamGombElemek[3].addEventListener("click", szamKatt);
szamGombElemek[4].addEventListener("click", szamKatt);
szamGombElemek[5].addEventListener("click", szamKatt);
szamGombElemek[6].addEventListener("click", szamKatt);
szamGombElemek[7].addEventListener("click", szamKatt);
szamGombElemek[8].addEventListener("click", szamKatt);

function szamKatt(event) {
    console.log(event.target.id)
    inputElem.value += event.target.id
    kifejezesElem.textContent += event.target.id
}

muveletGombElemek[0].addEventListener("click", muveletKatt);
muveletGombElemek[1].addEventListener("click", muveletKatt);
muveletGombElemek[2].addEventListener("click", muveletKatt);
muveletGombElemek[3].addEventListener("click", muveletKatt);

function muveletKatt(event) {
    console.log(event.target.id)
    inputElem.value = ""
    kifejezesElem.textContent += muvelet
}