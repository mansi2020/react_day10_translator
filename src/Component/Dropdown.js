import React from "react";
import Languagelist from "./LanguageList";
import './../App.css'

const Dropdown = (props) => {
  
  // onChangeSelect
  let onChangeSelect = (e)=>{
    let selectedVal = e.target.value;
    props.onChangeLang(selectedVal);
  }

  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <select name="" id="" onChange={onChangeSelect}>
        {Object.entries(Languagelist).map(([languageName, languageCode]) => (
          <option value={languageCode} key={languageCode}>{languageName}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
