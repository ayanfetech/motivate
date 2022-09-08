 // 1. Fetch quotes
 const quoteEl=document.querySelector('#quote')
 const authorEl=document.querySelector('#author')
 const btn = document.querySelector('#btn')
 const qid=document.querySelector('#qid')
let randomNo = Math.random()*10
let randomNo2 = Math.random()*200
let rand = parseInt(randomNo+randomNo2);
const URL = 'https://type.fit/api/quotes';

let storeData = JSON.parse(localStorage.getItem('quotes'))

async function getQuote(){
    const response = await fetch(URL);
    return response.json();
}

if( localStorage.getItem('quotes') == null ){
    let storeData = [];
    getQuote()
    .then((data) => {
         storeData = data;
        localStorage.setItem('quotes', JSON.stringify(data));
    let text = storeData[rand].text
    let author = storeData[rand].author
     quoteEl.innerHTML = text;
     authorEl.innerHTML =author;
     qid.innerHTML = rand +1;
    })
}else{
    let text = storeData[rand].text
    let author = storeData[rand].author
     quoteEl.innerHTML=text;
     authorEl.innerHTML=author;
     qid.innerHTML = rand +1;
}

// document.querySelector('#quote').appendChild('text');
btn.addEventListener('click',()=>{
        window.location.reload()
     })