"use client"

import logo from "../components/svg/logo.svg"
import shop from "../components/svg/shop.svg"
import Link from "next/link"
import { useCartStore } from "./store/cartStore"
import { useEffect } from "react"

const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/reservas", label: "Reservas" },
    { href: "/perfil", label: "Perfil" },
]

export function Header() {

    const { items, getTotal } = useCartStore();

    useEffect(()=>(
        console.log("cambio")
    ),[items])
    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
            <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <img src={logo.src} alt="logo" className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl text-foreground hidden sm:block">Tienda</span>
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link className="relative p-2 rounded-lg hover:bg-accent transition-colors hover:cursor-pointer" href={"/shop"}>
                        <img src={shop.src} alt="cesta" className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                            {getTotal()  || 0}
                        </span>
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}