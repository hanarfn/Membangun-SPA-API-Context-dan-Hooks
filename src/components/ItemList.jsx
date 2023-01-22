import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import Item from "./Item";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

const ItemList = ({ notes }) => {
  const { locale } = React.useContext(LocaleContext);
  let emptyNotes = true;
  if (notes.length) {
    emptyNotes = false;
  }
  if (emptyNotes) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
      </section>
    );
  } else {
    return (
      <section className="notes-list">
        {notes.map((note) => {
          return <Item key={note.id} id={note.id} title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} />;
        })}
      </section>
    );
  }
};
ItemList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};
export default ItemList;