import React from "react"
import useModals from "../hooks/useModals";
import CustomPopUp from "./CustomPopUp";

function CustomModal() {
  const { modalOpened } = useModals();

  function showHideModal() {
    if (modalOpened) return (
      <div className={` custom-modal ${modalOpened ? 'opened' : 'idle'} ${modalOpened}`}>
        <CustomPopUp />
      </div>
    );
    return <></>
  };

  return (
    <>
      {showHideModal()}
    </>
  )
}

export default CustomModal
