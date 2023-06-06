const it_sec ={
    Backdoor: "Olyan számítógépes program ami összeköti a támadót a támadottal.",
    Phishing: "Az adathalászat angol megfelelője.",
    Spoofing: "Email-...",
    DevOps: "Olyan gyakorlatok, eszközök összessége, ahol a szoftverfejlesztés, üzemeltetés automatizálva van.",
    DevSecOps: "A DevOps másik változata",
    Operációs_rendszer: "A számítógép alaprpogramja, amely közvetlenül kezeli hardvert."
}
const it_sec_arr = ["Backdoor", "Phishing", "Spoofing", "DevOps","DevSecOps", "Operációs_rendszer" ]
const len = it_sec_arr.length
var randsz = Math.floor(Math.random() * len)
document.getElementById("term").innerHTML = it_sec_arr[randsz]
document.getElementById("def").innerHTML = it_sec[it_sec_arr[randsz]]






