import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Catalog from "./components/Catalog";


export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
     <Hero />
     <Products />
     <Catalog />
     <Footer />
    </main>
  );
}
