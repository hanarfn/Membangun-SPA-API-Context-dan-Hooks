import React from "react";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

const DetailNote = ({ title, createdAt, body }) => {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
    </>
  );
};
DetailNote.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default DetailNote;