import { Quicksand } from "next/font/google";
const quickSandFont = Quicksand({
    subsets: ["latin"],
    weight: ["400", "700"]
  });
const Hero: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-40 md:py-80 text-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/images/hero.jpg')] bg-cover bg-center">
            <div className="mx-auto w-3/4">
            <h1 className={`text-hero-md md:text-hero ${quickSandFont.className}`}> We&apos;re passionate about the product delivery</h1>
            </div>
            <p className={`animate-bounce text-hero-md ${quickSandFont.className}`}>30 years in the fashion industry</p>
        </section>
    )
}
export default Hero;