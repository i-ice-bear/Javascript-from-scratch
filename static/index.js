console.log("Execute on the main host")

function alertWindow() {
    alert("You are using alert on webpage")
}
function promptValue(){
    const a = prompt("Enter you want to feed init : ")
    const displayerHandler = document.getElementById("contentManage").innerHTML = a;
    setTimeout(() => {
        const deleteBack = document.getElementById("contentManage").innerHTML = ""
        console.table(deleteBack, displayerHandler, "Back to normal")
    }, 9000);
}
function confirmationFunction(){
    const confirmation = confirm("Do you want to go outside : ");
    if (confirmation == true){
        const wherePrompt = prompt("Where you want to go : ")
        window.open(`https://${wherePrompt}.com`)   
    }
    else if(confirmation == false){
        alert("You are not going anywhere")
    }else{
        alert("none")
    }
}