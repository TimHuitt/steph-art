import Image from "next/image";
import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
import Images from "./components/Images";

export default function Home() {
  return (
    <main className="relative flex min-h-[5000px] w-full flex-col items-center">
      <Announcements />      
      <Menu />
      <Header />
      <Body />
    </main>
  );
}
