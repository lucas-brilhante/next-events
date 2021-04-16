import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
