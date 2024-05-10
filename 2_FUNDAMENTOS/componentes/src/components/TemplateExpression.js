const TemplateExpression = () => {

    const EXAMPLE = "Template Expression";

    const userInfo = {
        name: "Gabriel",
        age: 26,
    }

    return (
        <div>
            <h2> isso é um exemplo de utilização de {EXAMPLE}</h2>
            <p>Nome: {userInfo.name}</p>
            <p>Idade: {userInfo.age}</p>
            <p>{2 + 2}</p>
            <p>{console.log(42)}</p>
        </div>
    );
}

export default TemplateExpression;