// variáveis
// condicionais

// condicionais ternários
let isMember = true;
let shipping = isMember ? 2 : 10;
// deu certo: 2
// deu errado: 10
console.log(isMember ? "Você é membro." : "Você não é membro.");

let age = 14;
let isAdult = age >= 18 && age < 60 ? "Sim" : "Não";
console.log(isAdult);

// switch
let profession = "padeiro";
switch (profession) {
  case "fiscal":
    console.log("Sua camisa será verde.");
    break; // cancela os próximos
  case "bombeiro":
    console.log("Sua camisa será vermelha.");
    break;
  case "policial":
    console.log("Sua camisa será azul.");
    break;

  default:
    console.log("Sua camisa será de qualquer outra cor.");
    break;
}
