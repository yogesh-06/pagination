import React from "react";

const Cards = ({ loading, image, name, mail, age, id, onClick }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="cards " onClick={onClick}>
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-bottom mt-1 ms-1 "
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body pt-1">
                <h5 className="card-title" style={{ color: "#084298" }}>
                  {name.title.slice(0, 2)} {name.first} {name.last.slice(0, 5)}
                </h5>
                <p className="card-text">
                  <small style={{ fontFamily: "arial" }}>
                    Age:
                    {age} <br />
                    id: {id.value} <br />
                    E-mail: {mail.slice(0, 14)}... <br />
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
