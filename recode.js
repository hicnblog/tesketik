function typingPractice(timer = ".time", button = "button", words = ".words", scoreContainer = ".score", fail = ".fail", result = ".result"){
    var tempTime    = document.querySelector(timer),
    buttonTag       = document.querySelector(button),
    wordsContainer  = document.querySelector(words),
    timerDiv        = document.querySelector(timer),
    scoreDiv        = document.querySelector(scoreContainer),
    failDiv         = document.querySelector(fail),
    resultTag       = document.querySelector(result),
    points = 0, spans, typed, seconds = 60, failCount = 0;

    // Default for random words
    const list = [
    "ALMOND",
    "ANGGUR",
    "APEL",
    "APRIKOT",
    "APOKAT",
    "ARA",
    "ASAM",
    "ATAP",
    "ARBEI",
    "AVOKAD",
    "BACANG",
    "BELIMBING",
    "BELIMBING SAYUR",
    "BENGKUANG",
    "BENDA",
    "BERI EMU",
    "BIT",
    "BINJAI",
    "BISBUL",
    "BLACKBERRY",
    "BLACKCURRANT",
    "BLEWAH",
    "BLUEBERRY",
    "BURAHOL",
    "CEMPEDAK",
    "CEPLUKAN",
    "CERMAI",
    "CERI",
    "COKELAT",
    "CRANBERRY",
    "DELIMA",
    "DUKU",
    "DURIAN",
    "DUWET",
    "ENAU",
    "ERBIS",
    "FRAMBOS",
    "FEIJOA",
    "FLAMBOYAN",
    "GOOSEBERRY",
    "HAZELNUT",
    "JAGUNG",
    "JAMBLANG",
    "JAMBU",
    "JAMBU AIR",
    "JAMBU BATU",
    "JAMBU BIJI",
    "JAMBU BOL",
    "JAMBU MAWAR",
    "JAMBU MEDE",
    "JAMBU SEMARANG",
    "JENGKOL",
    "JERUK",
    "JERUK BALI",
    "JERUK JEPARA",
    "JERUK KEPROK",
    "JERUK KINGKIT",
    "JERUK NIPIS",
    "JERUK PURUT",
    "KACANG TANAH",
    "KAPULASAN",
    "KASTANYE",
    "KAWISTA",
    "KECAPI",
    "KEDONDONG",
    "KELAPA",
    "KELENGKENG",
    "KENARI",
    "KETELA",
    "KEMANG",
    "KEPEL",
    "KERSEN",
    "KESEMEK",
    "KIWI",
    "KISMIS",
    "KOKOSAN",
    "KOLANG-KALING",
    "KOPI",
    "KURMA",
    "KATES",
    "KENITU",
    "KWENI",
    "LAI",
    "LANGSAT",
    "LEMON",
    "LENGKENG",
    "LECI",
    "LIMAU",
    "LOBAK",
    "LABU",
    "MAJA",
    "MALAKA",
    "MANGGA",
    "MANGGA LALIJIWA",
    "MANGGA PARI",
    "MANGGIS",
    "MARKISA",
    "MATOA",
    "MELON",
    "MENGKUDU",
    "MENTENG",
    "MENTIMUN",
    "MENTIMUN SURI",
    "NAMNAM",
    "NANAS",
    "NANGKA",
    "NAGA",
    "NEKTARIN",
    "POMELO",
    "PEPAYA",
    "PERSIK",
    "PIR",
    "PISANG",
    "PETAI",
    "PERIA",
    "PLUM",
    "PRUNE",
    "RAMBAI",
    "RASPBERRY",
    "RAMBUTAN",
    "RAMBUSA",
    "RED CURRANT",
    "SALAK",
    "SAWO",
    "SAWO DUREN",
    "SAWO KECIK",
    "SAWO MANILA",
    "SEMANGKA",
    "SIRSAK",
    "SIWALAN",
    "SRIKAYA",
    "STROBERI",
    "SUKUN",
    "TERAP",
    "TERONG",
    "TIMUN",
    "TOMAT",
    "TIN",
    "TALOK",
    "UBI",
    "WALUH",
    "WUNI",
    "ZAITUN",
    "AMONIT",
    "MAMMOTH",
    "TRILOBIT",
    "ARCHEOPTERYX",
    "ANKYLOSAURUS",
    "BRONTOSAURUS",
    "DIPLODOCUS",
    "ICHTYOSAURUS",
    "STEGOSAURUS",
    "DIMETRODON",
    "TYRANNOSAURUS REX",
    "PLESIOSAURUS",
    "PTERANODON",
    "VELOCIRAPTOR",
    "MEGALODON",
    "ULTRASAURUS",
    "QUETZALCOATLUS",
    "TRICERATOPS",
    "COMPSOGNATHUS",
    "GIGANOTOSAURUS",
    "ARCHELON",
    "XIXIANYKUS",
    "XIXIASAURUS"
];

    function countdown(){
        points = 0;
        setTimeout(update,1000);
    }
    
    function update(){
        buttonTag.disabled = true;
        seconds--;
        tempTime.innerHTML = seconds;
        if (seconds === 0) {
            scoreDiv.innerHTML = "0";
            failDiv.innerHTML = "0";
            wordsContainer.innerHTML = "";
            buttonTag.disabled = false;
            seconds = 60;
            timerDiv.innerHTML = "60";
            buttonTag.disabled = false;   
            resultTag.innerHTML =  "Score kamu " + points + " dan jumlah kesalahan ketik "+ failCount;
        } else {
            setTimeout(update,1000);
        }
    }

    function random() {
        wordsContainer.innerHTML = "";
        var random = Math.floor(Math.random() * list.length);
        var wordArray = list[random].split("");
        for (var i = 0, len = wordArray.length; i < len; i++) { 
            var span = document.createElement("span");
            span.classList.add("span");
            span.innerHTML = wordArray[i];
            wordsContainer.appendChild(span);
        }
        spans = document.querySelectorAll(".span");
    }

    function typing(e) {
            typed = String.fromCharCode(e.which);
            for (var i = 0; i < spans.length; i++) {
                if (spans[i].innerHTML === typed) {
                    if (spans[i].classList.contains("bg")) {
                        continue;
                    } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
                        spans[i].classList.add("bg");
                        break;
                    } else if (spans[i].classList.contains("bg") !== false && spans[i-1] !== undefined || spans[i-1].classList.contains("bg") === false){
                        failCount++;
                        break;
                    }
                }
                if(spans[i].innerHTML !== typed){
                    if(spans[i].classList.contains("bg") === false && spans[i-1] === undefined){
                        failCount++;
                        break;
                    }
                    continue;
                }
            }
            failDiv.innerHTML = failCount;
            var checker = 0;
            for (var j = 0; j < spans.length; j++) { 
                if (spans[j].className === "span bg") {
                    checker++;
                }
                if (checker === spans.length) { 
                    wordsContainer.classList.add("animated");
                    wordsContainer.classList.add("fadeOut");
                    points++;
                    scoreDiv.innerHTML = points; 
                    document.removeEventListener("keydown", typing, false);
                    setTimeout(function(){
                        wordsContainer.className = "words";
                        random();
                        document.addEventListener("keydown", typing, false);
                    }, 400);
                }
            }
    }

    this.init = function(){
        buttonTag.addEventListener("click", function(e){
            countdown();
            random();
            buttonTag.disabled = true; 
            resultTag.innerHTML = "";
            document.addEventListener("keydown", typing, false);
        });
    }
}