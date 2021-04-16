import './App.css';
import Title from "./components/Title"
import Upload from "./components/Upload"
import Display from "./components/Display"
import Model from "./components/model"
import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <Title />
      <Upload />
      <Display setSelectedImg={setSelectedImg}/>
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
