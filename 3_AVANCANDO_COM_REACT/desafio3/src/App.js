import './App.css';

import City from './assets/city.jpeg'
import TesteHookUseState from './components/TesteHookUseState';
import TesteRenderizacaoDeLista from './components/TesteRenderizacaoDeLista';

function App() {
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
    </div>
  );
}

export default App;
