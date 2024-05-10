const Challenge = () => {

    const handleSumOnClick = (FirtAlgarism, SecondAlgarism) => {
        console.log(FirtAlgarism + SecondAlgarism)
    }

    let FirstAlgarism = 2;
    let SecondAlgarism = 3;

    return (
        <div>
            <h2>Desafio</h2>
            <p>Numero: {FirstAlgarism}</p>
            <p>Numero: {SecondAlgarism}</p>
            <div>
                <button onClick={() => handleSumOnClick(FirstAlgarism, SecondAlgarism)}>Clique aqui para somar</button>
            </div>
        </div>
    )

}

export default Challenge;