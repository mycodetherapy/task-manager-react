let date = new Date();
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export const updateDate = () => {
  const lastDate = date.setDate(date.getDate() + 7);
  date = new Date(lastDate);
  return date.toISOString().split('T')[0];
  //return date.toLocaleString("ru", options);
}

export const arrTasks = [
  { _id: 1, text: "Потискать котюню", date: updateDate() },
  { _id: 2, text: "Покормить котюню", date: updateDate() },
  { _id: 3, text: "Погладить котюню", date: updateDate() },
];

//export default arrTasks;
