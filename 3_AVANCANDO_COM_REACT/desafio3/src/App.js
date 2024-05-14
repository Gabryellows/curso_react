import './App.css';

import City from './assets/city.jpeg'
import TesteHookUseState from './components/TesteHookUseState';
import TesteRenderizacaoDeLista from './components/TesteRenderizacaoDeLista';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import ShowNameAndAge from './components/ShowNameAndAge';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Gabriel";

  const [userName] = useState("Maria");

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      <div>
        <img src="/img1.jpeg" alt="Cafeteira passando café" />
      </div>

      <div>
        <img src={City} alt="Cidade Oriental" />
      </div>

      <TesteHookUseState />
      <TesteRenderizacaoDeLista />
      <CondicionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <ShowNameAndAge name={name} age={25}/>
      <CarDetails marca={"chevrolet"} kilometragem={165000} cor={"preto"} novo={false}/>
      {/* reaproveitando */}
      <CarDetails marca={"Fiat"} kilometragem={1000} cor={"vermelho"} novo={true}/>
      <CarDetails marca={"VW"} kilometragem={16500} cor={"prata"} novo={false}/>
    </div>
  );
}

export default App;
