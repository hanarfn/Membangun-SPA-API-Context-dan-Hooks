import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import Input from "../components/Input";

const Add = () => {
  const navigate = useNavigate();
  const addNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };
  return (
    <section className="add-new-page">
      <Input addNote={addNoteHandler} />
    </section>
  );
};
export default Add;