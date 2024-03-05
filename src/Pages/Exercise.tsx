import MyModal from "../components/UPI/modal/MyModal";
import AddExercise from "../components/AddExercise";
import { useState } from "react";

const Exercise = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="add">
        <button onClick={() => setModal(!modal)}>add exercise</button>
        <div className="list">
          breast: 1. 2. 3. back: 1. 2. 3. legs: 1. 2. 3.
        </div>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <AddExercise />
      </MyModal>
    </div>
  );
};

export default Exercise;
