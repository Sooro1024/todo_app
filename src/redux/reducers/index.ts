const initialState = {
  todos: [],
};

const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
