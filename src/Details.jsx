import { rangeRight } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Details = ({ setList, id, contact, contactList }) => {
  const del = (arr, idx) => {
    arr.splice(idx, 1);
    setList([...arr]);
  };
  const [updatedName, UpdateNameData] = useState(contact.name);
  const [updatedNumber, UpdateNumData] = useState(contact.Number);
  const [flag, setFlag] = useState(false);
  // basically this useEffet is just for  check would be later attach to a function link to save
  const handleUpdate = (idx) => {
    const obj = {
      name: updatedName,
      Number: updatedNumber,
    };
    contactList[idx] = obj;
    setList([...contactList]);
  };

  return (
    <div className="details">
      {flag ? (
        <div className="edit-container">
          <div
            className="edit-div"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <input
              name="name"
              value={updatedName}
              onChange={(e) => UpdateNameData(e.target.value)}
            ></input>
            <input
              name="number"
              value={updatedNumber}
              onChange={(e) => UpdateNumData(e.target.value)}
            ></input>
          </div>
          <div className="btn-div">
            <button onClick={() => (setFlag(false), handleUpdate(id))}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-container">
          <div>
            <div>{contact.name}</div>
            <div>{contact.Number}</div>
          </div>

          <div className="grp-btn">
            <Link to="/">
              <button
                onClick={() => {
                  del(contactList, id);
                  //   like here it  js thing, so don't use interpolation
                }}
              >
                delete
              </button>
            </Link>
            <button onClick={() => setFlag(true)}>Edit</button>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
// kya gaana ha wahhh
// pata <Ni></Ni>ha
// ahahahaahahahahah
// album baj raha teko awaaz kaise aa rha?
