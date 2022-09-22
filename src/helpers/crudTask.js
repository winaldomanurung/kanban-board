export function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    return [
      // {
      //   id: 1,
      //   name: "makan",
      //   stage: 0,
      // },
      // {
      //   id: 2,
      //   name: "minum",
      //   stage: 1,
      // },
      // {
      //   id: 3,
      //   name: "tidur",
      //   stage: 2,
      // },
      // {
      //   id: 4,
      //   name: "tidur",
      //   stage: 2,
      // },
      // {
      //   id: 5,
      //   name: "tidur sdasd asdasd asdasdasdasd asd asdasd as dasd",
      //   stage: 2,
      // },
    ];
  }

  return JSON.parse(json);
}

export function insertItem(taskName) {
  const data = read();
  const item = {
    id: Math.floor(Math.random() * 100000),
    name: taskName,
    stage: 0,
  };

  data.push(item);
  save(data);

  return item;
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}

export function deleteItem(itemId) {
  const data = read();

  const item = data.find((item) => item.id == itemId);

  if (item) {
    data.splice(data.indexOf(item), 1);
  }

  save(data);
}

export function editItemStage(itemId, direction) {
  const data = read();

  const item = data.find((item) => item.id == itemId);

  if (item) {
    direction == "next" ? item.stage++ : item.stage--;
  }
  save(data);
}
