// 4 Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTMLAllCollection
// 3. Changing CSS
// 4. Event Listener

// const a = document.querySelector("h1");
// console.log(a);

// const a = document.querySelector("h1").innerHTML = "Mt Padho";


// const a = document.querySelector('h1').style.color = "blue";


// const a =  document.querySelector("h1");


// a.addEventListener("click",function(){
//     a.innerHTML = "Hello World";
//     a.style.color = "blue";
//     a.style.backgroundColor = "cadetblue";
// } )


const blb = document.querySelector("#bulb");
const btn = document.querySelector("button");
var gg = 0;


btn.addEventListener("click",function(){
    if(gg == 0){
        bulb.style.backgroundColor = "yellow";
        gg = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        gg = 0;
    }
})


