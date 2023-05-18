let preco = 40.9;

if (preco > 45) {
  console.log("A carne está cara.");
} else {
  console.log("A carne está barata.");
}

/////////////////////
// Calcule a porcentagem entre 2 números.
function calPct(x, y) {
  const result = (y / x) * 100;
  return result;
}

let x = 40;
let y = 10;
let pct = calPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

/////////////////////
// Calcule o preço do imóvel
// m2 = 3.000
// Se tiver 1 quarto, o m2 é 1x.
// Se tiver 2 quartos, o m2 é 1.2x.
// Se tiver 3 quartos, o m2 é 1.5x.

let metragem = 123;
let quartos = 1;
let valor = calcularImovel(metragem, quartos);

function calcularImovel(metragem, quartos) {
  let m2 = 3000;
  if (quartos == 1) {
    return (tamanho = m2 * metragem);
  } else if (quartos == 2) {
    return (tamanho = m2 * metragem * 1.2);
  } else quartos == 3;
  return (tamanho = m2 * metragem * 1.5);
}

console.log(`A casa custa R$${valor}`);

/////////////////////
// Validar usuário e senha
// Usuário correto: malu
// Senha correta: 123

let usuario = "Malunari";
let senha = "1234";

function validacao(usuario, senha) {
  if (usuario == "malu" && senha == "123") {
    console.log("Acesso permitido");
  } else {
    console.log("Acesso negado!");
  }
}
validacao(usuario, senha);
