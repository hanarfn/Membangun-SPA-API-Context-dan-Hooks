import React, { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import ItemList from "../components/ItemList";
import AddNote from "../components/AddNote";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);
  React.useEffect(() => {
    async function fetchNotesData() {
      const { error, data } = await getActiveNotes();
      !error && setNotes(data);
    }
    fetchNotesData();
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
          <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
          <Search keyword={keyword} keywordChange={onKeywordChangedHandler} />
        </section>
        <Suspense fallback={<div>Loading</div>}>
          <ItemList notes={filteredNotes} />
        </Suspense>
      </section>
      <section className="homepage__action">
        <AddNote />
      </section>
    </>
  );
};
export default Home;