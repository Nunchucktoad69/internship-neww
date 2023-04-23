import Footer from "src/components/footer";
import Header from "src/components/header";

export default function AppLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
