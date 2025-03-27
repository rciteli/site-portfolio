import React from "react";

type BotaoProps = {
    cor ? : string;
    texto ? : string;
    onClick ? : () => void

    // prop : tipo -> prop obrigatorio
}

const Botao : React.FC<BotaoProps>= ({
    cor = 'red',
    texto = 'Clique aqui',
    onClick,

}) => {   
    return (
        <>
        <button
            style={{
                backgroundColor : cor,
                color: 'white',
                padding: '10px 20px',
            }}
        >
            { texto }
        </button>
        </>
    );
}