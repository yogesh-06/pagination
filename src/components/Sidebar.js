import React from "react";

const Sidebar = () => {
  return (
    <div style={{ width: "", flex: 0.2 }} className="">
      <div
        className="card ms-3 "
        style={{
          position: "sticky",
          top: "56px",
          // right: 0,
        }}
      >
        <div className="card" style={{ width: "" }}>
          <img
            style={{ width: "" }}
            className="card-img-top hover-zoom"
            src="https://images.unsplash.com/photo-1496841733162-a88a250a275c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlnJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
