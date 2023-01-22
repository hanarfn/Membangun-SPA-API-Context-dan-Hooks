import React from "react";
import { FiBookOpen } from "react-icons/fi";
import PropTypes from "prop-types";

const Unarchive = ({ onUnarchive, id }) => {
  return (
    <button
      type="button"
      className="action"
      title="unarchive"
      onClick={() => {
        onUnarchive(id);
      }}
    >
      <FiBookOpen />
    </button>
  );
};
Unarchive.propTypes = {
  onUnarchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Unarchive;