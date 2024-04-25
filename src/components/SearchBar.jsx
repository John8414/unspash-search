import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTerm(event.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleChange} />
    </form>
  )
}

export default SearchBar