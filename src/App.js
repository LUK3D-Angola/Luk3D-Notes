import { useEffect, useState } from "react";
import './App.css';
// Importing components
import Header from './components/Header';
import Body from './components/Body';
import AddCard from './components/AddCard';
function App() {

  const [todos,setTodos] = useState([{title:"Teste1"}, {title:"teste2"}, {title:"teste3"},{title:"teste4"}]);
  const [dialog, setdialog] = useState(false);
  return (
    <div className="App bg-black-500">
      <Header></Header>
      <Body setdialog={setdialog} todoCards={todos}>
      </Body>
      <AddCard setdialog={setdialog} show={dialog}></AddCard>
    </div>
  );
}

export default App;
