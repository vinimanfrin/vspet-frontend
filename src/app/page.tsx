import Template from "@/components/Template";
import Link from "next/link";
import agendamentosIcone from "../../public/imagens/icones/calendariofull-icone.png";
import meusdadosIcone from "../../public/imagens/icones/meusdados-icone.png";

export default function Home() {
  return (
    <Template>
      <main className="flex ml-navbar h-screen justify-center items-center">
        <div className="flex flex-col text-white font-medium text-xl gap-16">
          <Link href={"/agendamentos/hoje"}>
            <div className="flex items-center gap-4 w-[350px] border-2 border-white p-4 hover:bg-sky-900">
              <img src={agendamentosIcone.src} alt="ícone consultar agendamentos hoje"/>
              <h1>Verifique os agendamentos de hoje!</h1>
            </div>
          </Link>

          <Link href={"/meusdados"}>
            <div className="flex items-center gap-4 w-[350px] border-2 border-white p-4 hover:bg-sky-900">
              <img src={meusdadosIcone.src} alt="ícone consultar os meus dados"/>
              <h1>Consultar meus dados</h1>
            </div>
          </Link>
        </div>
      </main>
    </Template>
  );
}
