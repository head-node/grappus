import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Router } from "react-router";
import { useState } from "react";
import RenderContacts from "./RenderContacts";

function App() {
  const [contact, setContact] = useState([]);
  // const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [searchText, setSearch] = useState(null);
  let [searchedArray, setArray] = useState([]);
  const nameRef = React.useRef(null);
  const contactRef = React.useRef(null)
  const [obj, setObj] = useState({
    name: "",
    Number: "",
  });
  const handleChnge = (e) => {
    const { name, value } = e.target;
    setObj((olditems) => {
      return {
        ...olditems,
        [name]: value,
      };
    });
  
  };
  const add = () => {
    if (obj.name.length > 0 && obj.Number.length > 0) {
      setContact([...contact, obj]);
      nameRef.current.value=""          
      contactRef.current.value=""
      setObj({name:"",Number:""})
    }
  };

 

  useEffect(() => {
    if (searchText != null) {
      let filtered = contact.filter((item) => {
        if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
      });
      setArray([...filtered]);
    }
  }, [searchText]);
  // console.log(searchedArray);
  return (
    <> 
    <div className="search-div">
    <input
        name="search"
        className="search"
        placeholder={`${contact.length}${" "}contacts`}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
      
      {searchText === null ? (
        <>
          <RenderContacts
           nameRef={nameRef}
           contactRef={contactRef}
            add={add}
            handleChnge={handleChnge}
            setList={setContact}
            contactlist={contact}
          />
        </>
      ) : (
        <>
          <RenderContacts  setList={setArray} contactlist={searchedArray} />
        </>
      )}
    </>
  );
}

export default App;
