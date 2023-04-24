import Footer from "src/components/footer";
import Header from "src/components/header";
import PropTypes from "prop-types";

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default function AppLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
