import {useState} from 'react'

export const TesteRenderizacaoDeLista = () => {

  const [lista] = useState(["Gabriel", "Jesus", "Maria", "José"])

  const [usersInfo, setUsersInfo] = useState([
    {id: 1, name: "Gabriel", age: 25},
    {id: 2, name: "Jesus", age: 33},
    {id: 3, name: "Maria", age: 20},
    {id: 4, name: "José", age: 40}
  ])

  const deletaRandom = () => {
    const randomId = Math.floor(Math.random() * 5);

    setUsersInfo((prevUsersInfo) => {
      return prevUsersInfo.filter((user) => randomId !== user.id)
    });
  };

  return (
    <div>
      <h2>Teste Renderização de lista</h2>
      <ul>
        {lista.map((nomes, key) => (
          <li key={key}>{nomes}</li>
        ))}
      </ul>
      <ul>
        {usersInfo.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deletaRandom}>Delete random user</button>
    </div>
  )
}

export default TesteRenderizacaoDeLista;