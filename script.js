// function skoruArttir(takim){
// const takimSkorId=`skor${takim}`        alterrnatif 1
// const takimSkorId="skor"+takim          alternatif 2
// console.log(takimSkorId)
// }

function askoruArttir(){
    console.log("skorA")
    const takimSkorElement=document.getElementById("skorA")
    let skor=parseInt(takimSkorElement.innerHTML)
    takimSkorElement.innerHTML=++skor;
    // console.log(skor)
    // console.log(typeof skor)
}
function bskoruArttir(){
    const takimSkorElement=document.getElementById("skorB")
    let skor=parseInt(takimSkorElement.innerHTML)
    takimSkorElement.innerHTML=++skor;
    // console.log("skorB")
}

function askoruAzalt(){
    console.log("skorA")
    const takimSkorElement=document.getElementById("skorA")
    let skor=parseInt(takimSkorElement.innerHTML)
    if (skor>0){
        takimSkorElement.innerHTML=--skor;
        }
        else {
            alert("Maç skoru 0'dan küçük olamaz")
            takimSkorElement.innerHTML=0
        }
    // console.log(skor)
    // console.log(typeof skor)
}
function bskoruAzalt(){
    const takimSkorElement=document.getElementById("skorB")
    let skor=parseInt(takimSkorElement.innerHTML)
    if (skor>0){
    takimSkorElement.innerHTML=--skor;
    }
    else {
        alert("Maç skoru 0'dan küçük olamaz")
        takimSkorElement.innerHTML=0
    }
    // console.log("skorB")
}
function askoruSifirla(){
    const takimSkorElement=document.getElementById("skorA")
    takimSkorElement.innerHTML=0
}
function bskoruSifirla(){
    const takimSkorElement=document.getElementById("skorB")
    takimSkorElement.innerHTML=0
}

function aTakimİsmiDeğiştir(){
    const alinantakimIsmi=prompt("1.Takım ismi giriniz!")
    if(alinantakimIsmi.length !== 0){
        const takimİsimElement=document.getElementById("isimA")
        takimİsimElement.innerHTML=alinantakimIsmi
    }else{
        alert("Hiçbir isim girilmedi")
    }   
}

function bTakimİsmiDeğiştir(){
    const alinantakimIsmi=prompt("2.Takım ismi giriniz!")
    if(alinantakimIsmi.length !== 0){
        const takimIsimElement=document.getElementById("isimB")
        takimIsimElement.innerHTML=alinantakimIsmi
    }else{
        alert("Hiçbir isim girilmedi")
    }   
}

function aTakimSkoruDegistir(){
    const alinanTakimSkoru=prompt("1.Takım skoru Giriniz")
    let skor=parseInt(alinanTakimSkoru)
    if (isNaN(skor) || skor < 0){
        alert("Lütfen Geçerli Bir Sayı Giriniz")
    }else {
       
        const takimSkorElement=document.getElementById("skorA")
        takimSkorElement.innerHTML=skor
    }
}
function bTakimSkoruDegistir(){
    const alinanTakimSkoru=prompt("2.Takım skoru Giriniz")
    let skor=parseInt(alinanTakimSkoru)
    if (isNaN(skor) || skor < 0){
        alert("Lütfen Geçerli Bir Sayı Giriniz")
    }else {
       
        const takimSkorElement=document.getElementById("skorB")
        takimSkorElement.innerHTML=skor
    }
}