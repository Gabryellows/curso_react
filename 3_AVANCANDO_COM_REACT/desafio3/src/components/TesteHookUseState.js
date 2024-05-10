import {useState} from 'react'

export const TesteHookUseState = () => {

    let algumNumero = 10;

    const [numero, setNumero] = useState(15);

  return (
    <div>
        <div>
            <h2>Teste Hook Sem UseState</h2>
            <p>Numero: {algumNumero}</p>
            <button onClick={() => algumNumero = 20}>Mudar valor do número</button>
        </div>

        <div>
            <h2>Teste Hook Com UseState</h2>
            <p>Numero: {numero}</p>
            <button onClick={() => setNumero(35)}>Mudar valor do número</button>
        </div>
    </div>
  )
}

export default TesteHookUseState;