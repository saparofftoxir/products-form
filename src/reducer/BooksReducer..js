export const InitialState = {
  books: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return (state = {
        ...state,
        books: [...state.books, action.payload],
      });
    case "DELETE_ITEM":
      const filtered = state.books.filter((item) => item.id !== action.payload);
      return (state = {
        ...state,
        books: filtered,
      });

    case "LIKE_ITEM": {
      const likedBook = state.books.map((item) => {
        return item.id === action.payload
          ? {
              ...item,
              like: item.like + 1,
            }
          : item;
      });
      return (state = {
        books: likedBook,
      });
    }
  }
};
export default { InitialState, reducer };
