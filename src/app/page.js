import Footer from "@/components/common/Footer";
import NavBar from "../components/common/NavBar";
import BackToTop from "@/components/common/BackToTop";
import Home from "../pages/Home";
import Squard from "@/components/challenges/Squard";
import Generated from "@/components/players/Generated";
export default function () {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <Generated />
      <BackToTop />
      <Squard />
    </>
  );
}
