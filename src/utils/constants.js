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

export const idRandom = () => {
 return Math.random().toString(16).slice(2);
};

export const arrTasks = [
  { _id: idRandom(), text: "Потискать котюню", date: updateDate() },
  { _id: idRandom(), text: "Покормить котюню", date: updateDate() },
  { _id: idRandom(), text: "Погладить котюню", date: updateDate() },
];

//export default arrTasks;
