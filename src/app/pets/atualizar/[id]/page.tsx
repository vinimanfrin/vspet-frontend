import FormAtualizarPet from "@/components/FormAtualizarPet";
import Template from "@/components/Template"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


const AtualizarPet = ({params}: Params) => {
    const {id} = params;
    return (
        <Template>
            <div className="flex ml-navbar h-screen justify-center items-center">
                <div>
                    <h1 className="text-white text-xl font-medium">Atualizar informações do Pet</h1>
                    <FormAtualizarPet id={id}/>
                </div>
            </div>
        </Template>
    )
}

export default AtualizarPet;