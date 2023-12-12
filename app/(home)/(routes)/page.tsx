import Image from "next/image";
import Cursor from "@/app/(home)/_components/cursor/cursor";
import Navbar from "@/app/(home)/_components/navigation_bar/navigation_bar";

export default function Home() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> */}
    </div>
  );
}
