import logo from "../components/svg/logo.svg"
import shop from "../components/svg/shop.svg"

export function Header() {
    return (
        <div className="flex flex-row items-center justify-around py-4 bg-primary">
            <div className=" w-12 h-12 bg-secondary rounded-sm flex flex-col p-2">
                <img src={logo.src} alt="logo" />
            </div>

            <div>
                <button
                className="font-semibold"
                type="button">Inicio</button>
            </div>

            <div className="items-center flex flex-col w-auto">
                <img src={shop.src} alt="cesta" className="w-10"/>
            </div>
        </div>
    )
}