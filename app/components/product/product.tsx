import { type Product as StrapiProduct } from "@/app/types/strapi"
import { BuyButton } from "./buyButton"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

interface ProductProps {
    data: StrapiProduct
}

export function Product({ data }: ProductProps) {
    const imageUrl = data.image?.formats?.small?.url 
        ? `${STRAPI_URL}${data.image.formats.small.url}`
        : data.image?.url
            ? `${STRAPI_URL}${data.image.url}`
            : "/placeholder.png"

    return (
        <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="aspect-square relative overflow-hidden bg-muted">
                <img 
                    src={imageUrl} 
                    alt={data.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    ${data.price}
                </div>
            </div>
            <div className="p-4 flex flex-col h-40">
                <h3 className="font-semibold text-foreground truncate">{data.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1 mb-3">
                    {data.description}
                </p>
                <div className="mt-auto">
                    <BuyButton product={data}/>
                </div>
            </div>
        </div>
    )
}