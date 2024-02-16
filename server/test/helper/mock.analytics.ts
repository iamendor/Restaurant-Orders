export const mockIncome = [1, 2, 3].map((id) => ({
  total: id * 1000,
}));

export const mockPopularFood = [1, 2, 3, 4, 5].map((id) => ({
  victualId: id,
  _count: id * 2,
}));

export const mockWaiterOfTheDay = [{ waiterId: 1 }];

export const mockAnalytics = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => ({
  createdAt: new Date(`2023-10-0${id}`),
  id,
  popularProduct: {
    createdAt: new Date(`2023-10-0${id}`),
    id,
    numberOne: Math.floor(Math.random() * 3) + 1,
    numberTwo: Math.floor(Math.random() * 3) + 1,
    numberThree: Math.floor(Math.random() * 3) + 1,
  },
  waiterOfTheDay: {
    id,
    waiterId: Math.floor(Math.random() * 3) + 1,
  },
  income: {
    id,
    total: Math.floor(Math.random() * 10_000) + 1,
  },
}));
