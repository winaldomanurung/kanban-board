import React from "react";
import { read } from "../helpers/crudTask";
import KanbanItem from "./KanbanItem";

function KanbanOngoing({ data }) {
  return (
    <div className="category-column">
      <h1 className="category-column__title">Ongoing</h1>
      <ul>
        {data.map((item) => {
          if (item.stage == 2) {
            return (
              <KanbanItem
                key={item.id}
                id={item.id}
                name={item.name}
              ></KanbanItem>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default KanbanOngoing;
