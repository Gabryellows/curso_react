import PrimeiroComponente from './components/PrimeiroComponente';
import TemplateExpression from './components/TemplateExpression';
import SegundoComponente from './components/SegundoComponente';
import Events from './components/Events';
import Challenge from './components/Challenge';


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <PrimeiroComponente />
      <TemplateExpression />
      <SegundoComponente  />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
