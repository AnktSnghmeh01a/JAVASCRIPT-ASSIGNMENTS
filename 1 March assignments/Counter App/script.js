// Getting the html elements 

const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const displayValue = document.getElementById('displayValue');

// for decrement button click

decrementBtn.addEventListener("click",()=>
{
    const value = Number(displayValue.innerText);
    
        displayValue.innerText= value - 1;
        changeBack()
  
});

// for increment button click
incrementBtn.addEventListener("click",()=>
{
    const value = Number(displayValue.innerText);
    displayValue.innerText = value + 1;
    changeBack()
}
);



// for reset button click ......................
resetBtn.addEventListener("click",()=>
{    
    displayValue.innerText = 0;
    changeBack()
}

);

// background-color change


function changeBack(){

  if(displayValue.innerText>0){
    document.getElementById("container").style.backgroundColor ="blue";

  }  
  else if(displayValue.innerText<0){
    document.getElementById("container").style.backgroundColor ="red";
  }  
  else{
    document.getElementById("container").style.backgroundColor ="white";
  }
}





