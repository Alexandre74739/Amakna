import { useState } from "react";

function Bar({ onSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Bar;
