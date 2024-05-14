import React from 'react'

const ShowNameAndAge = ({name, age}) => {
  return (
    <div>
        <h2>Informações do usuário</h2>
         <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
         </ul>
    </div>
  )
}

export default ShowNameAndAge