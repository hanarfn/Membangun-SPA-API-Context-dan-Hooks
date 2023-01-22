import React from "react";
import { FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";

const Delete = ({ onDelete, id }) => {
  return (
    <button
      type="button"
      className="action"
      title="delete"
      onClick={() => {
        onDelete(id);
      }}
    >
      <FiTrash />
    </button>
  );
};
Delete.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Delete;