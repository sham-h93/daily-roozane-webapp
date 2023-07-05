import Header from "../header/header";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Header classes={classes.header} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
