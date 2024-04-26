import { useState } from "react";
import searchImages from "./api";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState([])
  
  const handleSubmit = async (term) => {
    
    const resutl = await searchImages(term)

    console.log('dddd', data)
    setData(resutl)
    return resutl
  }
  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageShow data={data} />
  </div>;
}
export default App;