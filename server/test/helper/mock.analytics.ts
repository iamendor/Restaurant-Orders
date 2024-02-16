export const mockIncome = [1, 2, 3].map((id) => ({
  total: id * 1000,
}));

export const mockPopularFood = [1, 2, 3, 4, 5].map((id) => ({
  victualId: id,
  _count: id * 2,
}));

export const mockWaiterOfTheDay = [{ waiterId: 1 }];

// If you incerease it make an odd number length
export const mockAnalytics = [1, 2, 3, 4, 5, 6, 7].map((id) => {
  const createdAt = new Date();
  createdAt.setDate(new Date().getDate() - id);
  return {
    createdAt,
    id,
    popularProduct: {
      createdAt,
      id,
      numberOne: Math.floor(Math.random() * 3) + 1,
      numberTwo: Math.floor(Math.random() * 3) + 1,
      numberThree: Math.floor(Math.random() * 3) + 1,
      analyticsId: id,
    },
    waiterOfTheDay: {
      createdAt,
      id,
      waiterId: Math.floor(Math.random() * 3) + 1,
      analyticsId: id,
    },
    income: {
      createdAt,
      id,
      total: Math.floor(Math.random() * 10_000) + 1,
      analyticsId: id,
    },
  };
});
