export const getTodosPandingAction: (
  payload: boolean
) => {
  type: GET_TODOS_PANDING;
  payload: boolean;
} = (payload) => ({ type: "GET_TODOS_PANDING", payload });

export const getTodosSuccesAction: (
  payload: TODOS
) => {
  type: GET_TODOS_SUCCES;
  payload: TODOS;
} = (payload) => ({ type: "GET_TODOS_SUCCES", payload });

export const getTodosErrorAction: (
  payload: Error
) => {
  type: GET_TODOS_ERROR;
  payload: Error;
} = (payload) => ({ type: "GET_TODOS_ERROR", payload });

export const getTodosAction: () => {
  type: GET_TODOS;
} = () => ({ type: "GET_TODOS" });

export const updateTodoPandingAction: (
  payload: TODOS
) => {
  type: UPDATE_TODO_PANDING;
  payload: TODOS;
} = (payload) => ({ type: "UPDATE_TODO_PANDING", payload });

export const updateTodoSuccesAction: (
  payload: TODOS
) => {
  type: UPDATE_TODO_SUCCES;
  payload: TODOS;
} = (payload) => ({ type: "UPDATE_TODO_SUCCES", payload });

export const updateTodoErrorAction: (
  payload: Error
) => {
  type: UPDATE_TODO_ERROR;
  payload: Error;
} = (payload) => ({ type: "UPDATE_TODO_ERROR", payload });

export const updateTodoAction: (
  payload: TODO,
  index: number
) => {
  type: UPDATE_TODO;
  index: number;
  payload: TODO;
} = (payload, index) => ({ type: "UPDATE_TODO", payload, index });

export const deleteTodoPandingAction: (
  payload: TODOS
) => {
  type: DELETE_TODO_PANDING;
  payload: TODOS;
} = (payload) => ({ type: "DELETE_TODO_PANDING", payload });

export const deleteTodoSuccesAction: (
  payload: TODOS
) => {
  type: DELETE_TODO_SUCCES;
  payload: TODOS;
} = (payload) => ({ type: "DELETE_TODO_SUCCES", payload });

export const deleteTodoErrorAction: (
  payload: Error
) => {
  type: DELETE_TODO_ERROR;
  payload: Error;
} = (payload) => ({ type: "DELETE_TODO_ERROR", payload });

export const deleteTodoAction: (
  payload: number
) => {
  type: DELETE_TODO;
  payload: number;
} = (payload) => ({ type: "DELETE_TODO", payload });

export const deleteAllTodosPandingAction: (
  payload: TODOS
) => {
  type: DELETE_ALL_TODOS_PANDING;
  payload: TODOS;
} = (payload) => ({ type: "DELETE_ALL_TODOS_PANDING", payload });

export const deleteAllTodosSuccesAction: (
  payload: TODOS
) => {
  type: DELETE_ALL_TODOS_SUCCES;
  payload: TODOS;
} = (payload) => ({ type: "DELETE_ALL_TODOS_SUCCES", payload });

export const deleteAllTodosErrorAction: (
  payload: Error
) => {
  type: DELETE_ALL_TODOS_ERROR;
  payload: Error;
} = (payload) => ({ type: "DELETE_ALL_TODOS_ERROR", payload });

export const deleteAllTodosAction: () => {
  type: DELETE_ALL_TODOS;
} = () => ({ type: "DELETE_ALL_TODOS" });

export type ReduxActionTypes =
  | ReturnType<typeof getTodosPandingAction>
  | ReturnType<typeof getTodosSuccesAction>
  | ReturnType<typeof getTodosErrorAction>
  | ReturnType<typeof updateTodoPandingAction>
  | ReturnType<typeof updateTodoSuccesAction>
  | ReturnType<typeof updateTodoErrorAction>
  | ReturnType<typeof deleteTodoPandingAction>
  | ReturnType<typeof deleteTodoSuccesAction>
  | ReturnType<typeof deleteTodoErrorAction>
  | ReturnType<typeof deleteAllTodosPandingAction>
  | ReturnType<typeof deleteAllTodosSuccesAction>
  | ReturnType<typeof deleteAllTodosErrorAction>;

// export type SagaTypes =
//   | ReturnType<typeof getTodosAction>
//   | ReturnType<typeof updateTodoAction>
//   | ReturnType<typeof deleteTodoAction>
//   | ReturnType<typeof deleteAllTodosAction>;
