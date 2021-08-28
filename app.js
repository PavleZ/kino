const allNumbers=[];
window.onload=()=>{
    generateAllNumbers();
    generateRandomTwenty();
}

function generateAllNumbers(){
    for(let i=1;i<=80;i++){
        allNumbers.push(i)

    }

}
function generateRandomTwenty(){
    const randomArray=[];
    for(let i=0;i<20;i++){
        let number=allNumbers[Math.floor( Math.random()*allNumbers.length)];
        let index=allNumbers.indexOf(number);
        allNumbers.splice(index,1);
        console.log(number);
        randomArray.push(number);
    }
    outputArray(randomArray);
}


function outputArray(randomArray){
    const div=document.querySelector("#numbs");
    let html="";
    randomArray.forEach(element => {
        html+=`<button>${element}</button>`
    });
    div.innerHTML=html;
}
