import Navbar from "@/components/header/navbar";
import Intro from "@/components/Sections/intro";
import Tools from "@/components/Sections/tools";
import AllInOneSection from "@/components/Sections/allinone";
import Student from "@/components/Sections/student";
import Reach from "@/components/Sections/reach";
import Review from "@/components/Sections/reviews";
import Cool from "@/components/Sections/cool";
import Footer from "@/components/footer/footer";
import World from "@/components/Sections/world";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Tools />
      <AllInOneSection />
      <Student />
      <Reach />
      <Review />
      <Cool />
      <World />
      <Footer />
    </>
  );
}