import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    );
  }
  
  function NApp() {
    return (
      <div>
        <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      </div>
    );
  }
  
  export default NApp;