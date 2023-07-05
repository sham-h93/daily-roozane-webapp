import classes from "./Home.module.css";
import Side from "../src/components/side/side";
import Notes from "../src/components/notes/notes";

const Home = () => {
  return (
    <div className={classes.container}>
      <Side />
      <Notes />
    </div>
  );
};

export default Home;
