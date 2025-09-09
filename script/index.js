function setValue(id,text){
    document.getElementById(id).innerText = text;
}

const historyContainer = document.getElementById("history-container");
function addCallHistory(callNo, time, callWhere){
    const div = document.createElement("div");
            div.innerHTML = `
                <div class="h-auto p-2 flex justify-between items-center mb-3 bg-gray-100 shadow-md">
                    <div class="space-y-1 w-55">
                        <p class="text-[18px] font-semibold">${callWhere}</p>
                        <p class="text-gray-500">${callNo}</p>
                    </div>
                    <p class="text-[17px] text-gray-800 block">${time}</p>
                </div>
            `
    historyContainer.appendChild(div);
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
            time = new Date().toLocaleTimeString();
            addCallHistory(callNo, time, callWhere);
            alert(alertMessage);   
        }
        else{
            alert("❌ You do not have enough coins. Minimum of 20 coins is required for calling.");
        } 
    });
}

//history clear
document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("history-container").innerHTML = "";
});


//copy number
const copyBtns = document.getElementsByClassName("copy-btn");
for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click", function(){
        textCopy = copyBtn.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(textCopy);
        alert("number copied: "+ textCopy);
    });
}

