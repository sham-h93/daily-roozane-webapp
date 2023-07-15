import classes from "./Home.module.css";
import Side from "../src/components/side/side";
import Notes from "../src/components/notes/notes";
import Registration from "./Signup";
import { useContext, useEffect } from "react";
import { AppContext } from "../src/AppContext";

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  function homeContent() {
    if (loggedIn) {
      return (
        <>
          {/* <Side />
          <Notes /> */}
        </>
      );
    } else {
      return <Registration />;
    }
  }

  return <div className={classes.container}>{homeContent()}</div>;
};

export default Home;
