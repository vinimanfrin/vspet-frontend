"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    await new Promise( r => setTimeout(r, 1000))
    
    const options = {
        method: "DELETE"
    }
    
    const response = await fetch(`http://localhost:8080/pets/${id}`, options);
    console.log(`Pet com o id:${id} removido com sucesso!`);
    redirect("/pets")


}