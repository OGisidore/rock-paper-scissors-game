import { options } from "./data.js";
import { gameResult } from "./main.js";

const close = (document.querySelector(".close").onclick = () => {
  document.querySelector(".modal").classList.toggle("active");
});
const rules = (document.querySelector(".rules").onclick = () => {
  document.querySelector(".modal").classList.toggle("active");
});
let bonus = false;
const steps = document.querySelector(".steps");

let score = 0
const scoreDiv = document.querySelector(".score .point")
const displayscore = (score = score)=>{
  scoreDiv.textContent = score

}
displayscore(score)

const displayStep2 = (opt) => {

    document.querySelector(".step1").classList.toggle("active")

    const step2 = document.createElement("div")

    step2.className = "step2 active"

    steps.appendChild(step2)
    
    step2.innerHTML = `

    <div class="userPicker">
      <p> You Picked</p>
      <div class=${opt.name}>
        <img src=${opt.imgUrl} alt="">
      </div>
    </div>
    <div class="result">
      <h2>  </h2>
      <div class="Cta">
        Play again
      </div>
    </div>
    <div class="homePicker">
      <p>Home picked</p>
      <div class="homeloaded">
        <img src="" alt="">
      </div>
    </div>

    `
     
    const home = Math.floor(Math.random()* (bonus ?  7 : 3 ) ) 

    console.log(home); 

    const machine = options.find((opti)=> opti._id === home) 

    console.log(machine); 

    const box = document.querySelector(".homeloaded") 

    const Boximg = document.querySelector(".homeloaded img") 

    box.className = machine.name 

    Boximg.src = machine.imgUrl 

    if (machine === opt) {
     const h2 = document.querySelector(".result h2").textContent ="No winners"
     console.log(h2);

    } else{
      const result = gameResult(opt, machine)
      const h2 = document.querySelector(".result h2").textContent = result
      console.log(result.trim() === "you win");
      result.trim() === "you win"? score ++ : null
      console.log(score);
      displayscore(score)
    }

   const callToAction = document.querySelector(".Cta")
   console.log(callToAction);
   callToAction.onclick = displayStep1
   
}

const displayStep1 = () => {
  steps.innerHTML = ""

  const step1 = document.createElement("div");

  step1.className = "step1 active";

  steps.appendChild(step1)

        options.map((opt) => {

            step1.innerHTML +=
          `<div data-id="${opt._id}" class=${opt.name} >
         <img src=${opt.imgUrl} alt=${opt.name} data-id="${opt._id}">
    </div>`;

        })
       const optionsBox = document.querySelectorAll(".step1 div").forEach((option)=>{

        option.onclick = (e)=>{

            const id = e.target.dataset.id

            const value = options.filter((opti)=> opti._id === parseInt(id))[0] 

            displayStep2(value)

        }

       })
  
};

displayStep1();
