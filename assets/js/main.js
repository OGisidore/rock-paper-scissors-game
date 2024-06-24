export const gameResult = (userOption , machineOption)=>{
   return userOption.name.trim() === "scissors" && machineOption.name.trim() === "paper" ?  "you win" :  userOption.name.trim() === "paper" && machineOption.name.trim() === "rock" ?  "you win" :userOption.name.trim() === "rock" && machineOption.name.trim() === "scissors" ?  "you win" : "you lose" ;
}