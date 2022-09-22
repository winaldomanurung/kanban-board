import { useEffect, useState, createContext } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import KanbanBacklog from "./components/KanbanBacklog";
import KanbanDone from "./components/KanbanDone";
import KanbanOngoing from "./components/KanbanOngoing";
import KanbanToDo from "./components/KanbanToDo";
import { read } from "./helpers/crudTask";

export const DataContext = createContext();

function App() {
  let [data, setData] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    const fetchData = read();
    setData(fetchData);
  }, [dataChange]);

  return (
    <DataContext.Provider value={{ dataChange, setDataChange }}>
      <div className="container">
        <h1 className="title">KANBAN BOARD</h1>
        <div className="kanban">
          <KanbanBacklog data={data} />
          <KanbanToDo data={data} />
          <KanbanOngoing data={data} />
          <KanbanDone data={data} />
          <AddForm />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
