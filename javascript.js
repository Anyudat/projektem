const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");

button1.onclick = csere;
button2.onclick = csere;
button3.onclick = csere;
button4.onclick = csere;
button5.onclick = csere;
button6.onclick = csere;
button7.onclick = csere;
button8.onclick = csere;
button9.onclick = csere;

let korok = 0;
let kor = "X";
let vege = false;
let nyertes = "";

document.getElementById("kor").innerHTML = `"${kor}" következik!`;

function csekk(){
    if (button1.value == kor && button2.value == kor && button3.value == kor || button4.value == kor && button5.value == kor && button6.value == kor || button7.value == kor && button8.value == kor && button9.value == kor || button1.value == kor && button4.value == kor && button7.value == kor || button2.value == kor && button5.value == kor && button8.value == kor || button3.value == kor && button6.value == kor && button9.value == kor || button3.value == kor && button5.value == kor && button7.value == kor || button1.value == kor && button5.value == kor && button9.value == kor) {
        nyertes = kor;
        vege = true;
        document.getElementById("nyertes").innerHTML = `"${nyertes}" nyert!`;
    }
    else if (korok == 9){
        document.getElementById("nyertes").innerHTML = "Döntetlen!";
    }
    
}

function csere(){
    if (vege == false){
        if (this.innerHTML == "" && kor == "O") {
            this.innerHTML = "O";
            this.value = "O";
            korok += 1;
            csekk();
            kor = "X";
            document.getElementById("kor").innerHTML = `"${kor}" következik!`;
        }
        else if (this.innerHTML == "" && kor == "X") {
            this.innerHTML = "X";
            this.value = "X";
            korok += 1;
            csekk();
            kor = "O";
            document.getElementById("kor").innerHTML = `"${kor}" következik!`;
        }
    }
}

document.getElementById("ujra").onclick = function(){
    button1.value = "";
    button2.value = "";
    button3.value = "";
    button4.value = "";
    button5.value = "";
    button6.value = "";
    button7.value = "";
    button8.value = "";
    button9.value = "";
    button1.innerHTML = "";
    button2.innerHTML = "";
    button3.innerHTML = "";
    button4.innerHTML = "";
    button5.innerHTML = "";
    button6.innerHTML = "";
    button7.innerHTML = "";
    button8.innerHTML = "";
    button9.innerHTML = "";
    document.getElementById("nyertes").innerHTML = "";
    korok = 0;
    kor = "X";
    vege = false;
    nyertes = "";
    document.getElementById("kor").innerHTML = `"${kor}" következik!`;
}