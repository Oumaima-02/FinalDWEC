import React, { useState } from "react";
function AlertCompleted() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //modal que se muestra cuando se ha completado el objetivo
  return (
    <div>
      <div className="modal">
        <button className="close-modal" onClick={toggleModal}>
          CLOSE
        </button>
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h1>Congratulation !!! You have completed the Objective 100%</h1>
        </div>
      </div>
    </div>
  );
}
export default AlertCompleted;
