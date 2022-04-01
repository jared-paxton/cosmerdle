import React, { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export const ErrorToast = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.errorMsg ? setShow(true) : setShow(false);
  }, [props.errorMsg]);

  return (
    <ToastContainer className="p-3" position={"bottom-center"}>
      <Toast show={show} onClose={() => setShow(false)} delay={5000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Error</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>{props.errorMsg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
