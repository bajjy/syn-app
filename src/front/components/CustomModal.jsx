import CustomModalDiv from "../styles/customModalDiv.js";

import React from "react";
import useModals from "../hooks/useModals";
import CustomPopUp from "./CustomPopUp";

function CustomModal() {
  const { modalOpened } = useModals();

  function showHideModal() {
    if (modalOpened) return (
      <CustomModalDiv opened={modalOpened} className={` custom-modal ${modalOpened ? 'opened' : 'idle'} ${modalOpened}`}>
        <CustomPopUp />
      </CustomModalDiv>
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
