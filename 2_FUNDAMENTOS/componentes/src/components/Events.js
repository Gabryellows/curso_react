const Events = () => {

    const handleOnClick = (e) => {
        console.log("Clicou no botão");
        console.log(e);
    }

    const handleRender = (x) => {
        if(x) {
            return (
                <div>
                    <h1>Renderizou o componente</h1>
                </div>
                )
        } else {
            return (
                <div>
                    <h1>Renderizou outra coisa</h1>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleOnClick}>Clique aqui</button>
            </div>
            <div>
                <button 
                onClick={() => console.log("Função dentro do evento")}
                > Clique aqui também</button>
            </div>
            {handleRender(true)}
            {handleRender(false)}
        </div>
    )
}

export default Events;