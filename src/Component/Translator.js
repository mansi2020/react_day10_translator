import { useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
// import languages from './LanguageList';

const Translator = () => {
  // usestate for text Input
  let [textInput, setTextInput] = useState("");
  let [sourceLang, setSourceLang] = useState("");
  let [targetLang, setTargetLang] = useState("");
  let [translateText, setTranslateText] = useState("");

  // handle translate
  const handleTranslate = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apikey = "4986fb1656msh3ef2babc5c69ce5p1f9345jsn4373e881a9bb";

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    };

    const data = {
      source_language: sourceLang,
      target_language: targetLang,
      text: textInput,
    };

    try {
      const response = await axios.post(url, data, { headers });
      const result = response.data;

      if (result.status === "success") {
        const translateTextFromApi = result.data.translatedText;
        setTranslateText(translateTextFromApi);
      } else {
        setTranslateText("Translation Failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // set languages fo source and target
  function setDataForSource(value) {
    setSourceLang(value);
  }

  function setDataForTarget(value) {
    setTargetLang(value);
  }

  return (
    <div className="translator-main">
        <header><h1>Translator App</h1></header>
      <hr />
      <div className="translator-container">
        {/* user text input area */}
        <label className="translator-label">User Text : </label><br />
        <textarea
          cols="30"
          rows="6"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="translator-source-text"
          placeholder="Write Text here..."
        ></textarea>
        <br />
        <br />

        

        {/* translated text */}
        <label className="translator-label">Translated Text : </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          value={translateText}
          onChange={(e) => setTranslateText(e.target.value)}
          className="translator-target-text"
          placeholder="Your Traslated Text..."
        ></textarea>
        <br />
        <br />
        <br />


        {/* dropdown menu for source language*/}
        <Dropdown
          label="Source Language"
          onChangeLang={setDataForSource}
        ></Dropdown>
        <br />
        <br />

        {/* dropdown menu for target language */}
        <Dropdown
          label="Target Language"
          onChangeLang={setDataForTarget}
        ></Dropdown>
        <br />
        <br />

        {/* button to trnaslate the text */}
        <button onClick={handleTranslate} className="translator-button">Translate</button>
      </div>
    </div>
  );
};

export default Translator;
