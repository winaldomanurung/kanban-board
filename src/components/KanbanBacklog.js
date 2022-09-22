import React from "react";
import "./styles.css";
import KanbanItem from "./KanbanItem";

function KanbanBacklog({ data }) {
  return (
    <div className="category-column">
      <h1 className="category-column__title">Backlog</h1>
      <ul>
        {data.map((item) => {
          if (item.stage == 0) {
            return (
              <KanbanItem
                key={item.id}
                id={item.id}
                name={item.name}
                backlog={true}
              ></KanbanItem>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default KanbanBacklog;
