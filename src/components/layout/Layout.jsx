import Header from "../header/header";
import classes from "./Layout.module.css";

import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Modal from "../modal/modal";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  const { isLoading } = useContext(AppContext);
  return (
    <div className={classes.container}>
      {isLoading && (
        <Modal modal={{ isLoadingModal: true, title: "لطفا صبر کنید" }} />
      )}
      <Header classes={classes.header} />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.element,
};

export default Layout;
