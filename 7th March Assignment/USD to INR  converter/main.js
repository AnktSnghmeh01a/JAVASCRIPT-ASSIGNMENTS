function convert(){
    let usd = document.getElementById("usd-input").value;
    let inr = usd*82.02;
    document.getElementById("inr-amount").innerHTML = inr.toFixed(2);
}