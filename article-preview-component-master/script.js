let share       = document.querySelector("#btn_share");
let btn         = document.querySelector("#share");
let hidden      = true;

btn.addEventListener("click", () => {
    if(hidden){
        share.style.display = "flex";
        btn.style.backgroundColor = "#6E8098"
        btn.style.color = "white";
        hidden = false;
    }
    else {
        share.style.display = "none";
        btn.style.backgroundColor = "#ECF2F8"
        btn.style.color = "#6E8098";
        hidden = true;
    }
});