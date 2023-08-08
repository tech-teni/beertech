import Footer from "@/parts/noAuth/footer";
import Navbar from "@/parts/noAuth/navbar"

const Wrapper = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper