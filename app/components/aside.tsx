"use client"

import Link from "next/link"
import { usePathname, useSearchParams,useRouter } from "next/navigation"


// import { useState } from "react"
// import Link from "next/link"
// const menuItems = [
//   { href: "/", label: "Inicio" },
//   { href: "/productos", label: "Productos" },
//   { href: "/reservas", label: "Reservas" },
//   { href: "/perfil", label: "Perfil" },
// ]
// export function Aside() {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       {/* Botón hamburguesa - solo móvil */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white md:hidden w-10"
//         aria-label="Menú"
//       >
//         {isOpen ? "✕" : "☰"}
//       </button>
//       {/* Overlay - solo móvil */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 w-64 bg-card h-screen border-r border-border z-40
//         transition-transform duration-300 ease-in-out
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0 md:static
//       `}>
//         <nav className="p-4 pt-16 md:pt-4">
//           <ul className="space-y-2">
//             {menuItems.map((item) => (
//               <li key={item.href}>
//                 <Link 
//                   href={item.href}
//                   className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//     </>
//   )
// }


const categorias = [
  { id: "todos", nombre: "Todos" },
  { id: "electronica", nombre: "Electrónica" },
  { id: "ropa", nombre: "Ropa" },
]
const ordenes = [
  { id: "precio-asc", nombre: "Más barato a más caro" },
  { id: "precio-desc", nombre: "Más caro a más barato" },
]

export function Aside() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()

    const categoriaActual = searchParams.get("categoria") || "todos"
    const ordenActual = searchParams.get("orden") || ""

    const crearURL = (key:string, value:string):string => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(key, value)
        return `${pathName}?${params.toString()}`
    }

    return (
        <aside className="w-64 p-6 border-r border-border bg-card h-screen sticky top-16">
            <div className="mb-8">
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Categorías</h3>
                <ul className="space-y-1">
                    {categorias.map((cat) => (
                        <li key={cat.id}>
                            <Link
                                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                    categoriaActual === cat.id
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent hover:text-accent-foreground"
                                }`}
                                href={crearURL("categoria", cat.id)}>
                                    {cat.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Ordenar por</h3>
                <ul className="space-y-1">
                    {ordenes.map((orden) => (
                        <li key={orden.id}>
                            <Link
                                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                    categoriaActual === orden.id
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent hover:text-accent-foreground"
                                }`}
                                href={crearURL("orden", orden.id)}>
                                    {orden.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}