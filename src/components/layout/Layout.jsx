import Header from "../header/header";
import classes from "./Layout.module.css";

import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Modal from "../modal/modal";

const Layout = (props) => {
  const { isLoading } = useContext(AppContext);
  return (
    <div className={classes.container}>
      {isLoading && (
        <Modal modal={{ isLoadingModal: true, title: "لطفا صبر کنید" }} />
      )}
      <Header classes={classes.header} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
