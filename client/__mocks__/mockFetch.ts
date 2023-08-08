const mockResponse = (data: { id: number; diet: string }[]) => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
};

const mockFetch = (url: string) => {
  if (url === "http://localhost:3000/api/diets") {
    return mockResponse([
      { id: 1, diet: "Keto" },
      { id: 2, diet: "Vegetarian" },
    ]);
  }
  // Handle other URLs if needed
};

module.exports = mockFetch;
