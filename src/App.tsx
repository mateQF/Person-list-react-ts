import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Person } from "./types";
import { getAllPersons } from "./services/getAllPersons";

interface AppState {
  persons: Array<Person>;
  personsNumber: number;
}

function App() {
  const [persons, setPersons] = useState<AppState["persons"]>([]);
  const [newPerson, setNewPerson] = useState<AppState["personsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAllPersons().then(setPersons);
  }, []);

  const handleNewPerson = (newPerson: Person): void => {
    setPersons((persons) => [...persons, newPerson]);
    setNewPerson((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <List persons={persons} />
      Persons: {newPerson}
      <Form onNewPerson={handleNewPerson} />
    </div>
  );
}

export default App;
