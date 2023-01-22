import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const AddNote = () => {
  const navigate = useNavigate();
  return (
    <button type="button" title="add" className="action" onClick={() => navigate("/add")}>
      <FiPlus />
    </button>
  );
};
export default AddNote;