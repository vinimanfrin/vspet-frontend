'use server'

import Pet from "@/app/resources/pet/pet.resource"

export async function getByCpf(cpf: string): Promise<Pet[]> {
    console.log(`Buscando pets com o dono de cpf:${cpf}`)
    const resp = await fetch(`http://localhost:8080/pets/cpf/${cpf}`)
    return await resp.json()
}