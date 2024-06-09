import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello Everyone My Name BOXING CAMBODIA</h1>
      <Footer />
    </div>
  );
}
