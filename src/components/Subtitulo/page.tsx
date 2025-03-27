import React from "react";

type SubtituloProps = {
    texto ? : string;
};

const Subtitulo : React.FC<SubtituloProps>= ({
    texto = 'Clique aqui',
}) => {   
    return (
        <h2 className="Titulo font-titulo transition duration-500 hover:scale-110" style={{
            color: 'white',
            fontSize: '14px'
        }}>{ texto }</h2>
    );
}

export default Subtitulo;