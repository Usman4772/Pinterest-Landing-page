let greetingText=document.querySelector(".greetingText span")
let greeetingMessage=["home decor idea","next look outfit","green thumb idea","weeknight dinner idea"]

let index=0
function changeGreetingText(){
setInterval(()=>{
    if(index!==3){
index++
    }else{
        index=0
    }
greetingText.textContent=greeetingMessage[index]
},1500)
 }
    


// changeGreetingText()