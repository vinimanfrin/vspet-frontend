import Pet from "@/app/resources/pet/pet.resource"
import Link from "next/link";

interface PetCardProps {
    pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({pet} : PetCardProps) => {
    return (
        <div className="flex flex-col bg-white text-md font-medium rounded-md max-w-[500px] min-w-[300px] gap-5 p-2">
            <div className="text-slate-700">
                <p>Matrícula: {pet.id}</p>
                <p>Nome: {pet.nome}</p>
                <p>Nome responsável: {pet.nomeResponsavel}</p>
                <p>CPF responsável: {pet.cpfResponsavel}</p>
                <p>Telefone: {pet.telefone}</p>
                <p>Raça: {pet.raca}</p>
                <p>Observações: {pet.observacoes}</p>
            </div>
            <div className="flex place-content-between">
                <Link href={"/pets/atualizar"}>
                    <div className="text-white bg-slate-500 hover:bg-slate-400 p-1 rounded-md">
                        <p>Atualizar dados</p>
                    </div>
                </Link>
                <Link href={"/pets/consultar/servicos"}>
                    <div className="text-white bg-slate-500 hover:bg-slate-400 p-1 rounded-md">
                        <p>Serviços Realizados</p>
                    </div>
                </Link>
            </div>
            
            
        </div>
    )
}

export default PetCard;