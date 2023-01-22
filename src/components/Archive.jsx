import React from "react";
import { FiArchive } from "react-icons/fi";
import PropTypes from "prop-types";

const Archive = ({ onArchive, id }) => {
  return (
    <button
      type="button"
      className="action"
      title="archive"
      onClick={() => {
        onArchive(id);
      }}
    >
      <FiArchive />
    </button>
  );
};
Archive.propTypes = {
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Archive;