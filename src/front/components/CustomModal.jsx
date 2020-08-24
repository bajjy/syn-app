import React from "react"
import useModals from "../hooks/useModals";
import CustomPopUp from "./CustomPopUp";

function CustomModal(props) {
  const state = props.state;
  const { incrOpen, modalOpened } = useModals();

  return (
    <>
      <div className={` custom-modal ${modalOpened ? 'opened' : 'idle'} ${modalOpened}`}>
        <CustomPopUp />
      </div>
    </>
  )
}

export default CustomModal
