"use server"

import { redirect } from "next/navigation"

export async function update(formData: FormData, id:number){
    await new Promise( r => setTimeout(r, 1000))

    const data = {
        nome:formData.get("nome"),
        nomeResponsavel:formData.get("nomeResponsavel"),
        cpfResponsavel:formData.get("cpfResponsavel"),
        telefone:formData.get("telefone"),
        raca:formData.get("raca"),
        observacoes:formData.get("observacoes")
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    
    const resp = await fetch(`http://localhost:8080/pets/${id}`, options)
    
    if (resp.ok){
        console.log("Atualzado com sucesso!")
        redirect("/pets")
    }

    if(resp.status == 400){
        console.log("erro na validação!")
        return {
            message: "erro de validação"
        }
    }
    
}