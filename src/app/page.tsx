import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import MyProducts from "@/components/MyProducts";
import OurProduct from "@/components/OurProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Logos/>
      <MyProducts/>
      <Categories/>
      <Explore/>
      <OurProduct/>
    </main>
  );
}
