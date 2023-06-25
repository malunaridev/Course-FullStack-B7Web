// import { Header } from "./components/Header"
// import { Photo } from "./components/Photo"
// import React from 'react';
const App = () => {
// return React.createElement('div', null, "Meu nome é Malu")
// let name: string = "Malu"


///////////////// Função de somas
  // let n1: number = 10;
  // let n2: number = 3;
  // function somar(n1: number, n2: number): number {
  //   return n1 + n2;
  // }
  // return (
  // <div>Soma: {somar(n1, n2) + n2}</div>
  // );

///////////////// Concatenação de strings
//   let name: string = "Maria Luiza"
//   let lastName: string = "Pinto"
// return (
//   <div>Soma: {`${name.toUpperCase()} ${lastName.toUpperCase()}`}</div>
// )

///////////////// Links dentro de string
// let link: string = "https://www.google.com.br"
// return (
//   <div>
//     Link para o site: <br/>
//     <a href={link}>Clique aqui para acessar</a>
//   </div>
// )

///////////////// Aula de props e children
// return (
//   <div>
//     <Header title="Este é um exemplo" />
//     <Header title="Outro Texto" />
//     Olá, Mundo

//     <Photo legend="Google">
//       <img src="https://www.google.com.br/google.jpg" alt =""/>
//       </Photo>
//   </div>
// )

let numero: number = 0;

const handleButtonClick = () => {
  alert("O botão foi clicado")
}

return (
  <div>
    <button onClick={handleButtonClick}>Clique aqui</button>
  </div>
)
}

export default App;