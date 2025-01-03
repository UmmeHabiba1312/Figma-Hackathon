// import { CartProvider } from "@/components/CartContext";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import MyProducts from "@/components/MyProducts";
import OurProduct from "@/components/OurProduct";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Hero />
        <Logos />
        <MyProducts />
        <Categories />
        <Explore />
        <OurProduct />
      </div>
    </main>
  );
}
