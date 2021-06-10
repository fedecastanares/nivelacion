import Header from "./Header";
import { Paper } from "@material-ui/core";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Paper style={{minHeight: 'calc( 100vh - 4.8rem )', maxWidth: '100vw'}}> {children} </Paper>{" "}
    </>
  );
}

export default Layout;
