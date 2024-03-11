import { useState } from "react";
import Modal from "./modal";
function Temp() {
    const [modalOpen,setModalOpen]=useState(false)
    return ( <>
         <div className="App">
         <h1>Hey, click on the button to open the modal.</h1>
         <a
         className="openModalBtn"
         onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </a>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
    </> );
}

export default Temp;