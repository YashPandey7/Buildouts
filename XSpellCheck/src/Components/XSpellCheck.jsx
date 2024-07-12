import React, { useState } from 'react';

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

function XSpellCheck() {
    const [inputText, setInputText] = useState("");
    const [suggestedText, setSuggestedText] = useState("");

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        const words = text.split(" ");
        const correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
        });

        const correctedText = correctedWords.join(" ");

        const firstCorrection = correctedWords.find((item, index) => 
            item !== words[index]
        );

        setSuggestedText(firstCorrection || "");
    }

  return (
    <>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea placeholder="Enter text..." rows={5} cols={40} value = {inputText} onChange={handleInputChange}/>
        {suggestedText && (
            <p>Did you mean: <strong>{suggestedText}</strong>?</p>
        )}
    </>
  )
}

export default XSpellCheck;