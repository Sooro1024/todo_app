import { Reducer } from "redux";
import { ReduxActionTypes } from "../actions";

type initialState = {
  todos: TODOS;
  panding: boolean;
  error: null | Error;
};

const initialState: initialState = {
  todos: [],
  panding: false,
  error: null,
};

const reducer: Reducer<initialState, ReduxActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_TODOS_SUCCES":
      return { ...state, todos: action.payload };
    case "GET_TODOS_PANDING":
      return { ...state, panding: action.payload };
    case "GET_TODOS_ERROR":
      return { ...state, error: action.payload };
    case "DELETE_TODO_ERROR":
      return { ...state, error: action.payload };
    case "UPDATE_TODO_ERROR":
      return { ...state, error: action.payload };
    case "DELETE_ALL_TODOS_ERROR":
      return { ...state, error: action.payload };
    case "DELETE_ALL_TODOS_PANDING":
      return { ...state, todos: action.payload };
    case "DELETE_ALL_TODOS_SUCCES":
      return { ...state, todos: action.payload };
    case "DELETE_TODO_PANDING":
      return { ...state, todos: action.payload };
    case "DELETE_TODO_SUCCES":
      return { ...state, todos: action.payload };
    case "UPDATE_TODO_PANDING":
      return { ...state, todos: action.payload };
    case "UPDATE_TODO_SUCCES":
      return { ...state, todos: action.payload };
    case "ADD_TODO_ERROR":
      return { ...state, error: action.payload };
    case "ADD_TODO_PANDING":
      return { ...state, panding: action.payload };
    case "ADD_TODO_SUCCES":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default reducer;
