// Comentarios não são exibidos no navegador, são apenas para o desenvolvedor.

import SegundoComponente from "./SegundoComponente";

const PrimeiroComponente = () => {

    // Essa é uma função que retorna um JSX

    return (
        <div>
            {/* O JSX também permite comentários*/}
            <h2>Meu Primeiro Componente</h2>
            <SegundoComponente />
        </div>
    )

    // O JSX é uma extensão do JavaScript que permite escrever HTML dentro do JavaScript
    // É primordial envolver o JSX dentro de um elemento pai, como uma div, por exemplo.
}

export default PrimeiroComponente;