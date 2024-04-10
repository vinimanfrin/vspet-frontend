import logoIcone from "../../public/imagens/icones/logo-icone.png";
import agendamentosIcone from "../../public/imagens/icones/calendario-icone.png";
import petsIcone from "../../public/imagens/icones/pets-icone.png";
import funcionariosIcone from "../../public/imagens/icones/funcionario-icone.png";
import servicosIcone from "../../public/imagens/icones/servicos-icone.png";
import novoServicoIcone from "../../public/imagens/icones/novoservico-icone.png";
import sairIcone from "../../public/imagens/icones/sair-icone.png";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <aside className="h-screen fixed bg-navbar w-1/5 text-white flex flex-col items-center text-xl font-medium py-4">
            <Link href={"/"}>
                <img src={logoIcone.src} alt="" />
            </Link>
            
            <div>
                <ul>
                    <Link href={"/agendamentos"}>
                        <div className="flex items-center mx-auto gap-2 py-4">
                            <img src={agendamentosIcone.src} alt="ícone agendamentos" />
                            <li className="list-none">Agendamentos</li>
                        </div>
                    </Link>

                    <Link href={"/pets"}>
                        <div className="flex items-center gap-2 py-4">
                            <img src={petsIcone.src} alt="ícone pets" />
                            <li className="list-none">Pets</li>
                        </div>
                    </Link>
                    
                    <Link href={"/funcionarios"}>
                        <div className="flex items-center gap-2 py-4">
                            <img src={funcionariosIcone.src} alt="ícone funcionários" />
                            <li className="list-none">Funcionários</li>
                        </div>
                    </Link>
                   
                    <Link href={"/servicos"}>
                        <div className="flex items-center gap-2 py-4">
                            <img src={servicosIcone.src} alt="ícone serviços" />
                            <li className="list-none">Serviços</li>
                        </div>
                    </Link>
                    
                    <Link href={"/novoservico"}>
                        <div className="flex items-center gap-2 py-4">
                            <img src={novoServicoIcone.src} alt="ícone novo serviço" />
                            <li className="list-none">Novo Serviço</li>
                        </div>
                    </Link>
                </ul>
            </div>

            <Link href={"/"} className="mt-auto">
                <div className="flex items-center gap-2">
                    <img src={sairIcone.src} alt="ícone sair" />   
                    <p>Sair</p>
                </div>
            </Link>
        </aside>
    )
}

export default NavBar;