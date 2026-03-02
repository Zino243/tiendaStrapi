import { type Product as StrapiProduct } from "@/app/types/strapi"
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

interface ProductList {
    data:StrapiProduct
}

export function Product(data:ProductList) {
    const productData = data.data
    console.log("[data]", productData)
    console.log("[image]",STRAPI_URL + productData.image)
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <img 
                src={STRAPI_URL + productData.image?.url} 
                alt={data.name}
                className="w-full h-48 object-cover rounded"/>

            <h3 className="font-semibold mt-2">{productData.name}</h3>
            <p className="text-lg font-bold">${productData.price}</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded mt-2 w-full">
            Comprar
            </button>
        </div>
    )
}