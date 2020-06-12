import { all, takeEvery, call, put, select, retry } from "redux-saga/effects";
import {
  networkProwider,
  GetTodosURL,
  UpdateTodoURL,
  DeleteTodoURL,
} from "../../configs";
import {
  getTodosSuccesAction,
  getTodosPandingAction,
  getTodosErrorAction,
  updateTodoAction,
  updateTodoPandingAction,
  updateTodoErrorAction,
  updateTodoSuccesAction,
  deleteTodoAction,
  deleteTodoPandingAction,
  deleteTodoErrorAction,
  deleteTodoSuccesAction,
  deleteAllTodosAction,
  deleteAllTodosSuccesAction,
  deleteAllTodosErrorAction,
} from "../actions";
import { AxiosResponse } from "axios";
import { RootState } from "../store";

function* getTodosWroker() {
  const check: TODOS = yield select((state: RootState) => state.todos);
  if (check.length === 0) {
    try {
      yield put(getTodosPandingAction(true));
      const { data }: AxiosResponse<SERV_TODOS> = yield call(
        networkProwider.get,
        GetTodosURL
      );
      const todos = data.map<TODO>((el) => ({ ...el, panding: false }));
      yield put(getTodosSuccesAction(todos));
    } catch (error) {
      yield put(getTodosErrorAction(error));
    } finally {
      yield put(getTodosPandingAction(false));
    }
  }
}

function* updateTodoWorker({
  index,
  payload,
}: ReturnType<typeof updateTodoAction>) {
  const storeTodos: TODOS = yield select((state: RootState) => state.todos);
  let curentTodo = { ...storeTodos[index] };
  let newTodosList = [...storeTodos];
  try {
    curentTodo = { ...curentTodo, panding: true };
    newTodosList[index] = curentTodo;
    yield put(updateTodoPandingAction([...newTodosList]));
    const { data }: AxiosResponse<SERV_TODO> = yield call(
      networkProwider.patch,
      UpdateTodoURL(payload._id),
      payload
    );
    curentTodo = { ...curentTodo, ...data };
    newTodosList[index] = curentTodo;
    yield put(updateTodoSuccesAction([...newTodosList]));
  } catch (error) {
    yield put(updateTodoErrorAction(error));
  } finally {
    curentTodo = { ...curentTodo, panding: false };
    newTodosList[index] = curentTodo;
    yield put(updateTodoPandingAction([...newTodosList]));
  }
}

function* deleteTodoWorker({
  payload: index,
}: ReturnType<typeof deleteTodoAction>) {
  const storeTodos: TODOS = yield select((state: RootState) => state.todos);
  let curentTodo = { ...storeTodos[index] };
  let newTodosList = [...storeTodos];
  try {
    curentTodo = { ...curentTodo, panding: true };
    newTodosList[index] = curentTodo;
    yield put(deleteTodoPandingAction([...newTodosList]));
    yield call(networkProwider.delete, DeleteTodoURL(curentTodo._id));
    yield put(
      deleteTodoSuccesAction(
        newTodosList.filter((el) => el._id !== curentTodo._id)
      )
    );
  } catch (error) {
    yield put(deleteTodoErrorAction(error));
  }
}

function* deleteAllTodosWorker() {
  try {
    const storeTodos: TODOS = yield select((state: RootState) => state.todos);

    for (const item of storeTodos) {
      yield retry(2, 150, networkProwider.delete, DeleteTodoURL(item._id));
    }
    yield put(deleteAllTodosSuccesAction([]));
  } catch (error) {
    yield put(deleteAllTodosErrorAction(error));
  }
}

function* rootSaga() {
  yield all([
    takeEvery("GET_TODOS", getTodosWroker),
    takeEvery("UPDATE_TODO", updateTodoWorker),
    takeEvery("DELETE_TODO", deleteTodoWorker),
    takeEvery("DELETE_ALL_TODOS", deleteAllTodosWorker),
  ]);
}

export default rootSaga;
