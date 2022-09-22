import React from "react";
import { read } from "../helpers/crudTask";
import KanbanItem from "./KanbanItem";

function KanbanDone({ data }) {
  return (
    <div className="category-column">
      <h1 className="category-column__title">Done</h1>
      <ul>
        {data.map((item) => {
          if (item.stage == 3) {
            return (
              <KanbanItem
                key={item.id}
                id={item.id}
                name={item.name}
                done={true}
              ></KanbanItem>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default KanbanDone;
