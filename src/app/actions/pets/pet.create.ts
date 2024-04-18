"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise( r => setTimeout(r, 1000))

    const data = {
        id_petshop:1,
        nome:formData.get("nome"),
        nomeResponsavel:formData.get("nomeResponsavel"),
        cpfResponsavel:formData.get("cpfResponsavel"),
        telefone:formData.get("telefone"),
        raca:formData.get("raca"),
        observacoes:formData.get("observacoes")
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    
    const resp = await fetch("http://localhost:8080/pets", options)
    
    if (resp.ok){
        console.log("pet criado com sucesso!")
        redirect("/pets")
    }

    if(resp.status == 400){
        console.log("erro na validação!")
        return {
            message: "erro de validação"
        }
    }
    
}