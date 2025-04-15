import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Support from "./components/Support";


export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
     <Hero />
     <Products />
     <Support />
    </main>
  );
}
