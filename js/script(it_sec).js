

function check(it_sec_arr) {
    let ans = document.forms["myForm"]["fname"].value;
    console.log(ans);
    let i = 0;
    while (it_sec_arr[i] !== ans){
        i++;
    };
    console.log(anime_arr[i]);
   switch (ans) {
       case ans === "":
           alert("Name must be filled out");
                break;
        case it_sec_arr[i] === ans:
            // document.getElementById("flip-card-inner_1").classList.add("flip-card-inner_2");
            alert("Correct!");
                break;
        case ans !== it_sec_arr[i]:
            
            break;
    };
    
  };


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






