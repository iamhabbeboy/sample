import { Quicksand } from "next/font/google";
const bokorFont = Quicksand({
    subsets: ["latin"],
    weight: "400"
  });
const Hero: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-80 text-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/images/hero.jpg')] bg-cover bg-center">
            <h1 className={`font-extrablack ${bokorFont.className}`}> We&apos;re passionate about the product delivery</h1>
        </section>
    )
}
export default Hero;