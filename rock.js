const gamebox = document.querySelector('.container');
const userturn = document.querySelector(".user_result img");
const computerturn = document.querySelector(".computer_result img");
const result = document.querySelector(".result");
const option = document.querySelectorAll(".option_image");

option.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        userturn.src= computerturn.src ="rock.png";
        result.textContent ="Wait....";

        option.forEach((image2,index2)=>{
            if(index!==index2)
              image2.classList.remove("active");
        });
        gamebox.classList.add("start");

        let time = setTimeout(() => {
            gamebox.classList.remove("start");
            let img = [
                "rock.png",
                "paper.png",
                "scissors.png",
            ];
    
            userturn.src= img[index];
            let randomnumber = Math.floor(Math.random()*3);
            let computerImages = [
                "rock.png",
                "paper.png",
                "scissors.png",
            ];
            computerturn.src= computerImages[randomnumber];
            let computerValue = ["R", "P", "S"][randomnumber];
            let userValue = ["R", "P", "S"][index];
            let value = {
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Computer",
                SS: "Draw",
                SR: "Computer",
                SP: "User",
            };
            let win = value[userValue+computerValue];
            result.textContent = 
              userValue === computerValue
              ?"Match Drow"
              :`${win} Won!`
        }, 2500);
    });
});