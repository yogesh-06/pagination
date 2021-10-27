import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Profileview from "./components/Profileview";
import Sidebar from "./components/Sidebar";
import { Pagination } from "./components/Pagination";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(30);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCards();
    // console.log("onClick", modal);
  }, []);
  // useEffect(() => {
  //   console.log("onClick", modal);
  // }, [modal]);

  const fetchCards = async (value) => {
    const userURL = 
    setLoading(true);
    const res = await fetch("https://randomuser.me/api/?results=501");
    const data = await res.json();
    setCards(data.results);
    console.log(cards);
    setLoading(false);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    fetchCards(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <Navbar
        updateSearch={updateSearch}
        getSearch={getSearch}
        search={search}
      />
      {modal && (
        <Profileview
          selectedUser={selectedUser}
          onClose={() => setModal(false)}
        />
      )}
      <div className="d-flex">
        <div className="row " style={{ flex: 0.8 }}>
          {currentCards.map((card) => (
            <div className="col-md-4 ">
              <Cards
                key={card.picture}
                image={card.picture.large}
                name={card.name}
                age={card.dob.age}
                id={card.id}
                mail={card.email}
                country={card.location}
                loading={loading}
                onClick={() => {
                  setModal(true);
                  setSelectedUser(card);
                }}
              />
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
