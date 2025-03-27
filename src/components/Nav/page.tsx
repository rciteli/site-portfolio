import NavItem from "@/components/navItem/page"
import Link from "next/link"

export default function Nav() {
    return (
            <nav>
                <ul className="flex flex-row justify-around items-center font-bold p-5 gap-20 font-botao">
                    <Link href="/"><NavItem texto="Home" /></Link>
                    <Link href="/"><NavItem texto="Projetos" /></Link>
                    <Link href="/"><NavItem texto="Sobre" /></Link>
                    <Link href="/"><NavItem texto="Contato" /></Link>
                </ul>
            </nav>
    )
}