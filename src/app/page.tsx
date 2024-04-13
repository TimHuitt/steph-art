import Image from "next/image";
import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="relative flex min-h-[5000px] w-full flex-col items-center">
      <Announcements />      
      <Menu />
      <Header />
    </main>
  );
}
