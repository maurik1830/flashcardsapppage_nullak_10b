const metal = {
    NWOBHM: "A brit heavy-meetál újabb hulláma.",
    Industrial_metal: "Thrash-metálból alakult ki, képviselőik a Rammstein és Marilyn Monroe.",
    Glam_metal: "Másik megnevezése a hair-metal.",
    Thrash_metal: "Hardcore-punk és a Heavy-metal keveréke.",
    Death_metal: "Az agresszívabb thrash metálokból jöttek létre.",
    Gothic_metal: "A doom- és a death-metál ötvözete.",
    Progresszive_metal: "Jazz stílusjegyek is megtalálhatóak benne.",
    Doom_metal: "Lassú tempó, mélyre hangolt gitárok, súlyosabb hangzás.",
    Black_metal: "Jellemzője a szándékosan rossz hangzás.",
    Rap_metal: "A rap és a metál fúziója.",


};

const metal_arr = ["NWOBHM", "Industrial_metal", "Glam_metal", "Thrash_metal", "Death_metal", "Gothic_metal", "Progresszive_metal", "Doom_metal", "Black_metal", "Rap_metal"];
const len = metal_arr.length;
var randsz = Math.floor(Math.random() * len);
document.getElementById("term").innerHTML = metal_arr[randsz];
document.getElementById("def").innerHTML = metal[metal_arr[randsz]];





