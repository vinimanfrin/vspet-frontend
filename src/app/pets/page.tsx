
import LinkPersonalizado from "@/components/LinkPersonalizado";
import Template from "@/components/Template";

const HomePets = () => {
    return (
        <Template>
            <div className="flex ml-navbar h-screen justify-center items-center">
                <div className="flex flex-col font-medium text-xl gap-16">
                    <h1 className="text-white">Pets</h1>

                    <LinkPersonalizado corDeFundo="navbar" corFonte="white" href="/pets/consultar" texto="Consultar"/>
                    <LinkPersonalizado corDeFundo="navbar" corFonte="white" href="/pets/cadastrar" texto="Cadastrar"/>
                    
                </div>
            </div>
        </Template>
    )
}

export default HomePets;