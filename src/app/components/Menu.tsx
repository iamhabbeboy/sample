import Image from "next/image"
import Link from "next/link"
interface Props {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu: React.FC<Props> = ({setMenu}) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen z-10  bg-[rgba(0,0,0,0.9)] z-1 transate-x-0">
                <div className="flex justify-end p-4">
                    <Image src="/close-menu.svg" alt="Close" width={50} height={50} className="cursor-pointer" onClick={() => setMenu(false)} />
                </div>
                <div className="text-white flex flex-col items-center justify-center h-full text-hero-md">
                        <Link href="/#products" className="my-10 border-b hover:border-transparent">Products</Link>
                        <Link href="/#catalog" className="my-10 border-b hover:border-transparent">Catalog</Link>
                    </div>
            </div>
    )
}
export default Menu