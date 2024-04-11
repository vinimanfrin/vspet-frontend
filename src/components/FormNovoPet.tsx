'use client'

import { useState } from "react";
import InputPersonalizado from "./InputPersonalizado";

const FormNovoPet: React.FC = () => {
    
    const [nomePet, setNomePet] = useState("");
    const [nomeResponsavel, setNomeResponsavel] = useState("");
    const [cpfResponsavel, setCpfResponsavel] = useState("");
    const [telefone, setTelefone] = useState("");
    const [raca, setRaca] = useState("");
    const [observacoes, setObservacoes] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("valor do cadastro do pet",nomePet, nomeResponsavel,cpfResponsavel,telefone,raca,observacoes)
        setNomePet("");
        setNomeResponsavel("");
        setCpfResponsavel("");
        setTelefone("")
        setRaca("");
        setObservacoes("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
            <InputPersonalizado label="Nome pet" onChange={setNomePet} value={nomePet}/>
            <InputPersonalizado label="Nome responsável" onChange={setNomeResponsavel} value={nomeResponsavel}/>
            <InputPersonalizado label="CPF responsável" onChange={setCpfResponsavel} value={cpfResponsavel}/>
            <InputPersonalizado label="Telefone" onChange={setTelefone} value={telefone}/>
            <InputPersonalizado label="Raça" onChange={setRaca} value={raca}/>
            <InputPersonalizado label="Observações" onChange={setObservacoes} value={observacoes}/>

            <button className="my-10 text-white bg-navbar p-4 rounded-md" type="submit">Enviar</button>
        </form>
        
    )
}

export default FormNovoPet;