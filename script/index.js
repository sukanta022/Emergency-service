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