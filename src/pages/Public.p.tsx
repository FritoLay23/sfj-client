import Navbar from "../components/Navbar.c";
import Footer from "../components/Footer.c";

const Public = ({ Comp }: any) => {
  return (
    <>
      <Navbar />
      <main>
        <>{Comp ? <Comp /> : <h1>Public</h1>}</>
      </main>
      <Footer />
    </>
  );
};
export default Public;
