const CarDetails = ({marca, kilometragem, cor, novo}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Kilometragem: {kilometragem}</li>
            <li>Cor: {cor}</li>
        </ul>
        {novo && <p>Carro novo</p>}
    </div>
  )
}

export default CarDetails