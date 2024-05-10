import {useState} from 'react'

export const TesteRenderizacaoDeLista = () => {

  const [lista] = useState(["Gabriel", "Jesus", "Maria", "José"])

  const [usersInfo] = useState([
    {id: 1, name: "Gabriel", age: 25},
    {id: 2, name: "Jesus", age: 33},
    {id: 3, name: "Maria", age: 20},
    {id: 4, name: "José", age: 40}
  ])

  return (
    <div>
      <h2>Teste Renderização de lista</h2>
      <ul>
        {lista.map((nomes, key) => (
          <li key={key}>{nomes}</li>
        ))}
      </ul>
        {usersInfo.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
    </div>
  )
}

export default TesteRenderizacaoDeLista;