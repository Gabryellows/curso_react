import {useState} from 'react'

const CondicionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("Gabriel");

    const handleNameFromUser = (name) => {
        return name === "Gabriel" ? <p>Olá, Gabriel!</p> : <p>Olá, estranho!</p>
    }

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>X agora é falso.</p>}
        {name === "Gabriel" ? <p>Olá, Gabriel!</p> : <p>Olá, estranho!</p>}
        {handleNameFromUser(name)}
    </div>
  )
}

export default CondicionalRender