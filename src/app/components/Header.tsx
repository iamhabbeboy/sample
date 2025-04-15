import Link from "next/link"
import Image from "next/image"

const Header: React.FC = () => {
    return (
        <section className="flex justify-between items-center p-4">
            <div className="relative w-80 h-30">
                <Image src="/logo.svg" alt="Logo" fill />
            </div>
            <div className="flex gap-4">
                <Link href="/#">Our Products</Link>
                <Link href="/#">Support</Link>
            </div>
        </section>
    )
}
export default Header