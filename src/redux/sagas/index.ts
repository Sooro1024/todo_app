import { fork, all, takeEvery, call } from "redux-saga/effects";

import { networkProwider } from "../../configs";

function* getTodos() {
  const b = yield call(networkProwider.post, "/todo/", {
    title: "asd",
    description: "asdsdsa",
    color: "red",
  });
  const a = yield call(networkProwider.get, "/todo");
  console.log(b);
  console.log(a);
}

function* rootSaga() {
  yield takeEvery("sad", getTodos);
}

export default rootSaga;
