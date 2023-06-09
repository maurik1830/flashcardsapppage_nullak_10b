

    function check(anime_arr) {
        let ans = document.forms["myForm"]["fname"].value;
        console.log(ans);
        let i = 0;
        while (anime_arr[i] !== ans){
            i++;
        };
        console.log(anime_arr[i]);
        if (ans === anime_arr[i]) {
            alert("Correct");
        };
        if (ans !== anime_arr[i]) {
            alert("Incorrect");
        };
        if (ans === "") {
            alert("Name must be filled out.");
        }
        
      };
const anime = {
    Kodomo: "Kigyermekek számára készült, anime vagy manga.",
    Sónen: "Elsősorban fiúk számára készült, harci jelenetek gyakoriak banne.",
    Szeinen: "Harci jelenetekkel teli műfaj, kifejezetem felnőttek számára.",
    Sódzsó: "Nőies témákat vet fel, varázserővel bíró karakterek is vannak bennük.",
    Dzsoszei: "Rendkívül ritka műfaj, célközönség általában felnőtt nők.",
    Ecchi: "Könnyű szexuális humort tartalmaz.",
    Hentai: "Erotikus anime. Japánaban, és a világon nagy népszerűségnek örvend.",
    Sónen_ai: "Férfi szereplők közötti románcra utal.",
    Jaoi: "A Sónen-ai durvább változata",
    Sódzsó_ai: "A Sónen-ai-al ellentétben, nő szereplők között létesül románc.",
    Juri: "A Jaoi-hoz hasonlóan, a Sódzsó-ai-nál erotikusabb."
}


const anime_arr = ["Kodomo", "Sónen", "Szeinen", "Sódzsó", "Dzsoszei", "Ecchi", "Hentai", "Shónen-ai", "Jaoi", "Sódzsó-ai", "Juri"]

const len = anime_arr.length
var randsz = Math.floor(Math.random() * len)


document.getElementById("term").innerHTML = anime_arr[randsz]
document.getElementById("def").innerHTML = anime[anime_arr[randsz]]




