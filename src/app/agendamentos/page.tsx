import Template from "@/components/Template";
import LinkPersonalizado from "@/components/LinkPersonalizado";

const HomeAgendamentos = () => {
    return (
        <Template>
            <div className="flex ml-navbar h-screen justify-center items-center">
                <div className="flex flex-col font-medium text-xl gap-16">
                    <h1 className="text-white">Agendamentos</h1>

                    <LinkPersonalizado corDeFundo="navbar" corFonte="white" href="/agendamentos/consultar" texto="Consultar"/>
                    <LinkPersonalizado corDeFundo="navbar" corFonte="white" href="/agendamentos/novo" texto="Novo Agendamento"/>
                    
                </div>
            </div>
        </Template>
    )
}

export default HomeAgendamentos;