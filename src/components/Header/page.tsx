import Nav from "@/components/Nav/page";
import Titulo from "@/components/Titulo/page"
import Subtitulo from "@/components/Subtitulo/page";


export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-7 ml-10">
            <div className ="flex flex-col items-center">
                <Titulo texto="Rafael Nonato"/>
                <Subtitulo texto="Desenvolvedor Full Stack"/>
            </div>
            <Nav />
        </header>
    )
}