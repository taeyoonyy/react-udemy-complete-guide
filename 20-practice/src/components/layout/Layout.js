import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css";
import MainNavation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
