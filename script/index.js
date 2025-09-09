function setValue(id,text){
    document.getElementById(id).innerText = text;
}

//heart count
totalHeart =  parseInt(document.getElementById("heartCount").innerText);
const hearts = document.getElementsByClassName("heart");
for(let heart of hearts){
    heart.addEventListener("click", function(){
        if(heart.classList.contains("bi-suit-heart")){
            heart.classList.remove("bi-suit-heart");
            heart.classList.add("bi-suit-heart-fill", "text-[#eb3131]");
            totalHeart +=1;
            setValue("heartCount", totalHeart)
        }
        else{
            heart.classList.remove("bi-suit-heart-fill", "text-[#eb3131]");
            heart.classList.add("bi-suit-heart");
            totalHeart -=1;
            setValue("heartCount", totalHeart)
        }
    });
}

//calling 
totalCoin = parseInt(document.getElementById("coin").innerText);
const calls = document.getElementsByClassName("call");
for(let call of calls){
    call.addEventListener("click", function(){

        if(totalCoin>0){
            totalCoin -= 20;
            setValue("coin", totalCoin);
            callWhere = call.parentNode.parentNode.children[1].children[0].innerText;
            callNo = call.parentNode.parentNode.children[2].children[0].innerText;
            alertMessage = "📞 Calling " + callWhere + " " + callNo + ".....";
            alert(alertMessage);
        }
        else{
            alert("❌ You do not have enough coins. Minimum of 20 coins is required for calling.");
        } 
    });
}