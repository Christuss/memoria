import { KEPEKLISTA } from "./adat.js";
let szamlalo = 0;
const KIVALASZTOTTKEPEK = ["kep1", "kep2"];
const ARTICLE = $("article");

/*
1. html , header, footer, article
2. css, 4 kép/sor
3. függvény osszeallit(lista) return txt
4. txt into article
5. event képekre, kicserélni a háttérképet a képre
6. ha 2 két kép van felfordítva, akkor cseréljük vissza
7. pontok növelése, tűnjön el a kép
*/

$(function () {
    setup();
})

function setup() {
    setTimeout(function () { })
    ARTICLE.html(osszeallit(KEPEKLISTA));
    setTimeout(function () {
        kepcsereHatterre();
    }, 1000)
    const IMG = $("article div img");
    IMG.on("click", kattKepre);
}

function osszeallit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += '<div><img src="' + lista[index] + '" alt="kep' + index + '" id="' + index + '"></div>';
    }
    return txt;
}

function kepcsereHatterre() {
    const IMG = $("article div img");
    IMG.attr("src", "kepek/hatter.jpg");
}
function kattKepre(event) {
    const IMG = $("article div img");
    if (szamlalo <= 1) {
        $(event.target).attr("src", KEPEKLISTA[$(event.target).attr("id")]);
        KIVALASZTOTTKEPEK[szamlalo] = KEPEKLISTA[$(event.target).attr("id")];
        szamlalo++;
    } else {
        IMG.attr("src", "kepek/hatter.jpg");
        KIVALASZTOTTKEPEK[0] = 'kep1';
        KIVALASZTOTTKEPEK[1] = 'kep2';
        szamlalo = 0;
    }
    if (KIVALASZTOTTKEPEK[0] === KIVALASZTOTTKEPEK[1]) {
        //kiszedni a kitalált képeket
        setup();
    }
}