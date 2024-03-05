let btn = document.querySelector(".buttom-controlar")

let seconds = 80;

function makeIteration () {
    document.querySelector(".second").innerHTML= ""
    if (seconds > 0) {
        document.querySelector(".second").innerHTML= seconds;
        seconds -= 1;
        setTimeout(makeIteration, 1000);  // 1 second waiting
    } else {
        TimeRemingIsout()
        document.getElementById("faild").play()
    }
};

document.querySelector(".restart").onclick = function (){
    location.reload()
}

btn.addEventListener("click",() =>{
    var yourName = prompt("Enter your name king")
    if(yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML="unKnow"
    }else{
        document.querySelector(".name span").innerHTML= yourName
    }
    
    btn.remove()
    makeIteration();
})

let blocksContainer = document.querySelector(".game-block")

let blocks = Array.from(blocksContainer.children)

let orderRange = [...Array(blocks.length).keys()]
suffle(orderRange)
blocks.forEach((block,index) => {
    
    block.style.order = orderRange[index];
    
    block.addEventListener("click",function (){
        flibBlock(block)
    })
        
})

function stopClicking(){
    blocksContainer.classList.add("no-clicking")
    setTimeout(() => {
        blocksContainer.classList.remove("no-clicking")
    }, 1500);
}

function flibBlock (selectFlipdItem){
    
    selectFlipdItem.classList.add("is-flipd")
    
    let flibBlockcurrunt = blocks.filter(flibBlockcurrunt => flibBlockcurrunt.classList.contains("is-flipd"))
    let theWorkIsDone = blocks.filter(theWorkIsDone=> theWorkIsDone.classList.contains("has-Matched"))
    if(flibBlockcurrunt.length === 2){
        
        stopClicking()
        
        cheakFlipdCard(flibBlockcurrunt[0],flibBlockcurrunt[1])
    }
    if(theWorkIsDone.length === 16){
        // console.log(theWorkIsDone);
        document.getElementById("succesful").play()
        promptSucss(yourName)
            // console.log("done");
        }
        
    }
    
    function cheakFlipdCard(firstElemnt,secondElment){
        let tries = document.querySelector(".wrong-try span")
        if(firstElemnt.dataset.name === secondElment.dataset.name){
            
            firstElemnt.classList.remove("is-flipd")
            secondElment.classList.remove("is-flipd")
            
            firstElemnt.classList.add("has-Matched")
            secondElment.classList.add("has-Matched")   
            
            document.getElementById("success").play()
            
        }else{
            tries.innerHTML =    parseInt(tries.innerHTML)+1 ;
            setTimeout(() => {
                firstElemnt.classList.remove("is-flipd")
                secondElment.classList.remove("is-flipd")
            }, 1500);
            document.getElementById("fail").play()
        }
        
    }
    
    function suffle (array){
        let current = array.length,
        temp,
        random;
        while(current > 0){
            random =Math.floor(Math.random() * current);
            
            current --;
            
            temp = array[current];
            
            array[current]=array[random];
            
            array[random] = temp;
        }
        return array
    }

    function promptSucss(blocks){
        swal("Good job!",blocks +" "+"Yoou Won ", "success")
            
        }

    function  TimeRemingIsout(){
        if(seconds === 0){
        swal({
            title: "Time Remaing is out",
            text: "We will restart this windo",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Reload",
        },
        function(isConfirm){
            if (isConfirm) {
                location.reload()
            } else {
                location.reload()
            }
        });}
    }

    
        

