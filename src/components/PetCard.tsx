import Pet from "@/app/resources/pet/pet.resource"
import Link from "next/link";
import { destroy } from "@/app/actions/pets/pet.delete";

interface PetCardProps {
    pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({pet} : PetCardProps) => {
    return (
        <div className="flex flex-col bg-white text-md font-medium rounded-md max-w-[500px] min-w-[400px] gap-5 p-2">
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
                <Link href={`/pets/atualizar/${pet.id}`}>
                    <div className="text-white bg-slate-500 hover:bg-slate-400 p-1 rounded-md">
                        <p>Atualizar</p>
                    </div>
                </Link>
                <Link href={"/pets/consultar/servicos"}>
                    <div className="text-white bg-slate-500 hover:bg-slate-400 p-1 rounded-md">
                        <p>Serviços</p>
                    </div>
                </Link>
                <button onClick={() => destroy(pet.id)}>
                    <div className="text-white bg-red-500 hover:bg-red-400 p-1 rounded-md">
                        <p>deletar</p>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default PetCard;