import React, { useState } from 'react';

function XSpellCheck() {
    const [inputText, setInputText] = useState("");
    const [suggestedText, setSuggestedText] = useState("");

    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      };

    const SpellCheckApp = (e) => {
        
    }

  return (
    <>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea placeholder="Enter text..." rows={5} cols={40} value = {inputText} onChange={SpellCheckApp}/>
    </>
  )
}

export default XSpellCheck;