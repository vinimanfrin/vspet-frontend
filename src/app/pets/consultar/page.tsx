'use client'

import InputPersonalizado from "@/components/InputPersonalizado";
import Template from "@/components/Template";
import { useState, useEffect } from "react";
import Pet from "@/app/resources/pet/pet.resource";
import Link from "next/link";
import PetCard from "@/components/PetCard";

const ConsultarPet = () => {

    const [cpfResponsavel, setCpfResponsavel] = useState("");
    const [pets, setPets] = useState<Pet[]>([new Pet(1,"pet exemplo","Responsável exemplo","11111111","40028922","viralata","caramelo")]);

    useEffect(() => {
        console.log(pets);
    }, [pets]);

    async function getPets(){
        await setPets([...pets, new Pet(2,"Lorena","Vinicius","222222","40028922","pug","bafo de onça")]);
        setCpfResponsavel("");
    }

    return (
        <Template>
            <div className="flex ml-navbar h-screen justify-center items-center flex-col">
                <div className="flex flex-col flex flex-col gap-12">
                    <h1 className="text-white text-3xl">Consultar pet</h1>
                    <InputPersonalizado label="CPF Responsável" value={cpfResponsavel} onChange={setCpfResponsavel} />
                    <button className="text-white bg-navbar p-4 rounded-md hover:bg-sky-600" type="submit" onClick={getPets}>Consultar</button>
                </div>
                <div className="flex flex-col flex flex-col gap-4 my-10">
                    {pets.length ? pets.map((pet) => {
                        return(
                            <PetCard pet={pet}/>
                        )
                    }) : <p>Nenhum pet encontrado</p>}
                </div>
            </div>
        </Template>
    )
}

export default ConsultarPet;