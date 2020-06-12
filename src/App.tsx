import React, { useEffect, useCallback } from "react";
import { Todo, Spinner } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { Modal, DeleteAll } from "./components";
import {
  getTodosAction,
  updateTodoAction,
  deleteTodoAction,
  deleteAllTodosAction,
} from "./redux/actions";
import { RootState } from "./redux/store";
import "./card.scss";

const App: React.FC = () => {
  const { panding, todos } = useSelector((state: RootState) => ({
    panding: state.panding,
    todos: state.todos,
  }));

  const dispatch = useDispatch();

  const updateTodo = useCallback(
    (index: number, todo: TODO) => {
      dispatch(updateTodoAction(todo, index));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      dispatch(deleteTodoAction(index));
    },
    [dispatch]
  );

  const deleteAllTodos = useCallback(() => {
    dispatch(deleteAllTodosAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <DeleteAll handleClick={deleteAllTodos} />
      <Spinner panding={panding} />
      <div className="container">
        <div className="row">
          {todos.map((el, index) => (
            <Todo
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              key={el._id}
              index={index}
              todo={el}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

// const mapStateToProps = (state: RootState) => ({});

// const mapDispatchToProps = {
//   getTodos: getTodosAction,
// };
// const connector = connect(mapStateToProps, mapDispatchToProps);

// export default connector(App);
