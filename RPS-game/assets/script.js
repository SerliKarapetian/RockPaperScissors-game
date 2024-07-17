//get to DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

//loop through each option element
optionImages.forEach((image,index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "./assets/images/rock.png"
        result.textContent = "wait..."
        //loop through each option image again
        optionImages.forEach((image2,index2) =>{
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //set a timeout to delay the result calculation
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");
        //get the source of the image to the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        //set the user image to the clicked image
        userResult.src = imageSrc;

        //generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
        //create an array of cpu image options
        let cpuImages = ["./assets/images/rock.png" , "./assets/images/paper.png" , "./assets/images/scissors.png"]
        //set cpu image to a random option of the array
        cpuResult.src = cpuImages[randomNumber];
        // assign a letter value to the cpu option(R rock, P paper, S scissors)
        let cpuValue = ["R", "P", "S"][randomNumber];
        //assign a letter value to the clicked option
        let userValue = ["R", "P", "S"][index];
        
        //create an onject with all possible outcomes
        let outComes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };

        //look up the outcome value based on user and cpu options
        let outComesValue = outComes[userValue + cpuValue];

        //display the result 
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComesValue} won!`
        },2500)
    });
});