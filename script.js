


const anime = {
    Kodomo:"Kigyermekek számára készült, anime vagy manga.",
    Sónen:"Elsősorban fiúk számára készült, harci jelenetek gyakoriak banne.",
    Szeinen:"Harci jelenetekkel teli műfaj, kifejezetem felnőttek számára.",
    Sódzsó: "Nőies témákat vet fel, varázserővel bíró karakterek is vannak bennük.",
    Dzsoszei: "Rendkívül ritka műfaj, célközönség általában felnőtt nők.",
    Ecchi: "Könnyű szexuális humort tartalmaz.",
    Hentai: "Erotikus anime. Japánaban, és a világon nagy népszerűségnek örvend.",
    Sónen_ai: "Férfi szereplők közötti románcra utal.",
    Jaoi: "A Sónen-ai durvább változata",
    Sódzsó_ai: "A Sónen-ai-al ellentétben, nő szereplők között létesül románc.",
    Juri: "A Jaoi-hoz hasonlóan, a Sódzsó-ai-nál erotikusabb."
}
it_security =  {
    Backdoor: " Olyan program, ami illetéktelen személyek számára teszi lehetővé a géphez való hozzáférést."

}
metal = {

}




const anime_arr = ["Kodomo", "Sónen", "Szeinen", "Sódzsó", "Dzsoszei", "Ecchi", "Hentai", "Shónen-ai", "Jaoi", "Sódzsó-ai", "Juri"]




var ani_len = anime_arr.length
var randsz = Math.floor(Math.random() * anime_arr.length)







document.getElementById("term").innerHTML = anime_arr[randsz]
document.getElementById("def").innerHTML = anime[anime_arr[randsz]]


