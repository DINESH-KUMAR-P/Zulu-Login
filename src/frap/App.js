

import React, { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const onNameChange = e => setName(e.target.value);
  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body ,name };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };

  return (
      <div className="App">
        <form>
          <input placeholder="Username" value={name}
           onChange={onNameChange} required />
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <input placeholder="Body" value={body}
            onChange={onBodyChange} required />

          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
      </div>
  );
}

export default App;