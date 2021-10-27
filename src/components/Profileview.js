import React from "react";
import Programmer from "./Programmer.jpg";

const Profileview = ({ selectedUser, onClose }) => {
  console.log("selectedUser", { selectedUser });
  return (
    <>
      <div
        className="modal show fade pt-5"
        tabIndex="-1"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        style={{
          display: "block",
          backgroundColor: " rgba(0, 0, 0, 0.6)",
          width: "100%",
        }}
      >
        <div className="modal-dialog w-25 ">
          <div className="modal-content">
            <div className="modal-header py-1">
              <h5 className="modal-title " id="exampleModalLabel">
                <b> Country:</b> {selectedUser.location.country}
              </h5>
              <button className="btn pe-0 " onClick={onClose}>
                <b>X</b>
              </button>
            </div>
            <div className="modal-body pt-1">
              <div className="card w-100 mb-3" style={{ width: "18rem" }}>
                <img src={Programmer} className="card-img-top " alt="..." />
                <div className=" position-absolute start-0 mt-5 ms-1 pt-5 d-flex  ">
                  <img
                    src={selectedUser.picture.large}
                    className="w-25"
                    alt=""
                  />
                  <h5
                    className="card-title mt-3 ms-2 pt-0"
                    style={{
                      color: "black",
                      textShadow:
                        "0px -1px 0 #fff, 1px -1px 0 #fff, -1px 0.5px 0 #fff, 1px 1px 0 #fff",
                    }}
                  >
                    {selectedUser.name.title.slice(0, 2)}{" "}
                    {selectedUser.name.first}{" "}
                    {selectedUser.name.last.slice(0, 5)}
                  </h5>
                </div>
                <button className="btn-primary block"></button>
                <div
                  className="card-body pt-0 pb-0"
                  style={{ marginLeft: "4rem" }}
                >
                  <small style={{ fontFamily: "courier" }}>
                    <b>ID:</b>
                    {selectedUser.id.name.slice(0, 3)}-
                    {selectedUser.id.value
                      ? selectedUser.id.value.slice(0, 12)
                      : null}
                    <br />
                  </small>
                  <small>
                    <b>Age:</b> {selectedUser.dob.age}, {"\u00A0"}{" "}
                    <b> Gender:</b> {selectedUser.gender}
                  </small>
                </div>
              </div>
              <b>E-mail: </b>
              {selectedUser.email}
              <hr className="mt-1" />
              <b>Phone No.:</b> {selectedUser.cell.slice(0, 6)},{" "}
              {selectedUser.phone}
              <hr className="mt-1" />
              <b>Text Me: </b>Inbox{" "}
              <small style={{ fontSize: "12px" }}>
                (for working purpose only!)
                <hr className="mt-1 mb-0" />
              </small>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profileview;
