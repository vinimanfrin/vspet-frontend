import FormNovoPet from "@/components/FormNovoPet";
import Template from "@/components/Template"

const NovoPet = () => {
    return (
        <Template>
            <div className="flex ml-navbar h-screen justify-center items-center">
                <div>
                    <h1 className="text-white text-xl font-medium">Novo Pet</h1>
                    <FormNovoPet/>
                </div>
            </div>
        </Template>
    )
}

export default NovoPet;