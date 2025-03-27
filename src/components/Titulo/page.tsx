import React from "react";

type TituloProps = {
    texto ? : string;
};

const Titulo : React.FC<TituloProps>= ({
    texto = 'Clique aqui',
}) => {   
    return (
        <h1 className="Titulo font-titulo transition duration-500 hover:scale-110" style={{
            color: 'white',
            fontSize: '30px'
        }}>{ texto }</h1>
    );
}

export default Titulo;