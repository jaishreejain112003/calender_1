import React from "react";
import "./App.css";
import "./styles.css";
import Modal from "./Modal.js";
import Calender from "./table1.js";
import "./bootstrap-5.2.2/dist/css/bootstrap.min.css";
// import Head from "./head.js";

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
      <div className ="background">
      <Calender />
      {/* <div className="container text-center">
      <Head /> */}
      <button className="btn-primary" onClick={() => setShow(true)}>
        Modal
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <h1> Hello World! </h1>
      </Modal>
      {/* </div> */}
      </div>
  );
}





