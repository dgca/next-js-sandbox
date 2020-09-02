import Head from "next/head";
import PropTypes from "prop-types";
import styles from "./layout.module.scss";

export default function Layout({ children, title = "Sandbox" }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.children}>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
