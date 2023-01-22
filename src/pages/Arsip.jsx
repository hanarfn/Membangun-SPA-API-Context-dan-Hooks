import React, { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import Search from "../components/Search";
import ItemList from "../components/ItemList";

const Arsip = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    async function fetchNotesDataArchived() {
      const { error, data } = await getArchivedNotes();
      !error && setNotes(data);
    }
    fetchNotesDataArchived();
    return() => {
      setNotes([])
    }
  }, []);
  function onKeywordChangedHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <>
      <section className="homepage">
        <section className="search-bar">
          <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
          <Search keyword={keyword} keywordChange={onKeywordChangedHandler} />
        </section>
        <Suspense fallback={<div>Loading</div>}>
          <ItemList notes={filteredNotes} />
        </Suspense>
      </section>
    </>
  );
};
export default Arsip;