import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Details } from "./Details";
const RenderContacts = ({
  setList,
  nameRef,
  contactRef,
  contactlist,
  handleChnge,
  add,
}) => {
  return (
    <Router>
      <div className="display-container">
        <div className="add-contact">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <input
              name="name"
              placeholder="Enter Name"
              onChange={handleChnge}
              ref={nameRef}
            />
            <input
              name="Number"
              placeholder="Enter Number"
              onChange={handleChnge}
              ref={contactRef}
            />
          </div>
          <div className="btn-div">
            <button onClick={add}>Add</button>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            {contactlist
              .sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
              )
              .map((contact, idx) => {
                return (
                  <div className="link">
                    <Link className="link-text" to={`/${idx}`}>
                      {contact.name}
                    </Link>
                  </div>
                );
              })}
          </Route>
          {contactlist.map((contact, idx) => {
            return (
              <Route exact path={`/${idx}`}>
                <Details
                  setList={setList}
                  id={idx}
                  contactList={contactlist}
                  contact={contact}
                />
              </Route>
            );
          })}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default RenderContacts;
