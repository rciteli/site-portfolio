import IconBox from "@/components/iconBox/page";

export default function MainContent() {
    return (
        <main className="flex flex-col justify-center h-100 w-120 ml-40 text-4xl font-botao">
            <p>
                Olá,
                <br />
                Eu sou o <span className="text-teal-400">RAFAEL NONATO</span>,
                <br />
                desenvolvedor <span className="text-amber-400">Full Stack</span>.
            </p>
            <IconBox />
        </main>
    );
}