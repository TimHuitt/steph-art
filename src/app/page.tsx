import Image from "next/image";
import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
import Portfolio from "./components/Portfolio";
import Divider from "./components/Divider";
import Shop from "./components/Shop";
import Custom from "./components/Custom";
import Images from "./components/Images";

export default function Home() {
  return (
    <main className="relative flex min-h-[5000px] pb-40 w-full flex-col items-center">
      <Announcements />      
      <Menu />
      <Header />
      <Body />
      <Divider />
      <Portfolio />
      <Divider />
      <Shop />
      <Divider />
      <Custom />
    </main>
  );
}
