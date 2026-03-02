import { Product, StrapiResponse } from "../types/strapi"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const TOKEN = process.env.NEXT_PUBLIC_BACKEND_TOKEN || ""


export async function getProducts(): Promise<Product[]> {
    const url = STRAPI_URL + "/api/products?populate=*"

    if (TOKEN === ""){
        throw new Error("TOKEN UNDEFINED")
    }

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
    const data = await res.json() as StrapiResponse<Product>
    console.log(data.data)
    return data.data
}