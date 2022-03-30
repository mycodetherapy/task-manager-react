export const updateDate = (summand) => {
  let date = new Date();
  const lastDate = date.setDate(date.getDate() + (!summand? 7 : summand ));
  date = new Date(lastDate);
  return date.toISOString().split("T")[0];
};

export const idRandom = () => {
  return Math.random().toString(16).slice(2);
};

export const arrTasks = [
  {
    _id: idRandom(),
    text: "Congratulate a friend on his birthday. Don't forget to buy him that cool mug I saw in the store the other day.",
    date: updateDate(1),
  },
  {
    _id: idRandom(),
    text: "Buy a house for your favorite cat.",
    date: updateDate(3),
  },
  {
    _id: idRandom(),
    text: "You should read that cool article about code optimization in React. Immediately apply knowledge in your pet project.",
    date: updateDate(5),
  },
];
