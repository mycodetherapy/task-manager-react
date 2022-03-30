export const updateDate = (summand) => {
  let date = new Date();
  const lastDate = date.setDate(date.getDate() + (!summand ? 7 : summand));
  date = new Date(lastDate);
  return date.toISOString().split("T")[0];
};

export const arrTasks = [
  {
    _id: 1,
    text: "Congratulate a friend on his birthday. Don't forget to buy him that cool mug I saw in the store the other day.",
    date: updateDate(1),
  },
  {
    _id: 2,
    text: "Buy a house for your favorite cat.",
    date: updateDate(3),
  },
  {
    _id: 3,
    text: "You should read that cool article about code optimization in React. Immediately apply knowledge in your pet project.",
    date: updateDate(5),
  },
];
