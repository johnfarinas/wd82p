import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [results, setResults] = useState(persons);

  // PURELY ASYNC AWAIT METHOD
  // const fetchPersons = async () => {
  //   const response = await fetch("http://localhost:3001/persons");
  //   const data = await response.json();

  //   setPersons(data);
  //   setResults(data);
  // };

  // AWAIT ASYNC WITH AXIOS METHOD
  // const fetchPersons = async () => {
  //   const response = await axios.get("http://localhost:3001/persons");

  //   setPersons(data);
  //   setResults(data);
  // };

  // useEffect does not need to assign this to a variable
  // Param1 = callback function
  // Param2 = dependency array (so that the effect will only run once and not infinitely)
  // useEffect(param1, param2)
  // AXIOS METHOD
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook App</h1>
      <Search persons={persons} setResults={setResults} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setResults={setResults}
      />
      <h2>Numbers</h2>
      <ul>
        {results.map((person, index) => (
          <Person key={index} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
}

export default App;
