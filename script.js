const signs = document.querySelectorAll("img");
const divs = document.querySelectorAll(".placeholder");

function allowDrop(){
    divs.forEach( div => {
        div.addEventListener("dragover", (ev) => {
            ev.preventDefault();
        });
    });
}
allowDrop();

function drag(){
    signs.forEach( sign => {
        sign.addEventListener("dragstart", (ev) => {
            ev.dataTransfer.setData("id", ev.target.id);
        });
    });
}
drag();

function drop(){
    divs.forEach( div => {
        div.addEventListener("drop", (ev) => {
            ev.preventDefault();
            let id = ev.dataTransfer.getData("id");
            let dragedImg = document.getElementById(id);
            
            //don't drop the dragedImg if the div is empty
            if(div.children[0]){
                //check in terms of the game rules
                if(div.children[0].id === "rock" && dragedImg.id === "paper"
                || div.children[0].id === "paper" && dragedImg.id === "scissor"
                || div.children[0].id === "scissor" && dragedImg.id === "rock"){

                    if(div.children[0]){
                        div.removeChild(div.children[0]);
                    }
                    div.appendChild(dragedImg);
                }

            }else {
                console.log("can't do that!");
            }       
        });
    });
}
drop();

