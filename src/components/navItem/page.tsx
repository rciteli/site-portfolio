import React from "react";

type NavItemProps = {
    texto: string,
}

const NavItem : React.FC<NavItemProps>= ({
    texto = 'Clique aqui',
}) => {
    return (
        <button className="hover:text-amber-400 hover:underline transition duration-250 hover:scale-125">
            { texto }
        </button>
    );
}

export default NavItem