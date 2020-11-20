let buttonUdang = document.getElementById("button-udang")
buttonUdang.addEventListener("click", udangButton)

function udangButton() {
    let show = document.getElementsByClassName("show")
    let data = document.getElementsByClassName("data-udang")
    
    for (let i = 0; i < show.length; i++) {
        show[i].style.display = "none";
    }

    data[0].style.display = "block";
    data[0].setAttribute("class", "huruf");
}

let buttonLobster = document.getElementById("button-lobster")
buttonLobster.addEventListener("click", lobsterButton)

function lobsterButton() {
    let show = document.getElementsByClassName("show")
    let data = document.getElementsByClassName("data-lobster")

    for (let i = 0; i < show.length; i++) {
        show[i].style.display = "none";
    }

    data[0].style.display = "block";
    data[0].setAttribute("class", "huruf");
}

let buttonKakap = document.getElementById("button-kakap")
buttonKakap.addEventListener("click", kakapButton)

function kakapButton() {
    let show = document.getElementsByClassName("show")
    let data = document.getElementsByClassName("data-kakap")

    for (let i = 0; i < show.length; i++) {
        show[i].style.display = "none";
    }

    data[0].style.display = "block";
    data[0].setAttribute("class", "huruf");
}


// let getBackButton = document.getElementsByClassName("get-back")
//     for (let i = 0; i < getBackButton.length; i++) {
//         getBackButton[i].addEventListener("click", getBack)
//     }

let getBackButton = document.getElementsByClassName("get-back")
getBackButton[0].addEventListener("click", getBack)

function getBack() {
    let prediksi = document.getElementsByClassName("prediksi");
    let hidden = document.getElementsByClassName("hidden");
    let huruf = document.getElementsByClassName("huruf");
    
    for (let i = 0; i < prediksi.length; i++) {
        prediksi[i].style.display = "inline-block";
    }

    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.display = "none";
        if (huruf[i]) {
            huruf[i].style.display = "none"
        }
    }
}