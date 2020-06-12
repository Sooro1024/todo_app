import React, { useState, useCallback, useMemo, useEffect } from "react";
import Progress from "./Progress";
import SaveOrEdit from "./SaveOrEdit";
import DeleteButton from "./DeleteButton";
import { whitchColorName } from "../configs";

type TodoProps = {
  index: number;
  todo: TODO;
  updateTodo: (index: number, todo: TODO) => void;
  deleteTodo: (index: number) => void;
};

const Todo: React.FC<TodoProps> = ({ index, todo, updateTodo, deleteTodo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(todo.title);
  const [text, setText] = useState<string>(todo.description);
  const [color, setColor] = useState<Colors>(todo.color);

  const colorClass = useMemo(() => whitchColorName(color), [color]);

  const handeleEdit = useCallback((state: boolean) => {
    setEdit(state);
  }, []);

  const handeleColorChange = useCallback((_edit: boolean, _color: Colors) => {
    setEdit(_edit);
    setColor(_color);
  }, []);

  useEffect(() => {
    handeleEdit(false);
  }, [handeleEdit, todo]);

  return (
    <div className="col s12 m12 l6 xl4">
      <div className="card card__block blue-grey">
        <Progress open={todo.panding} />
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            if (edit) {
              updateTodo(index, {
                ...todo,
                description: text,
                title: name,
                color,
              });
            } else {
              handeleEdit(true);
            }
          }}
        >
          <div className="card-content white-text">
            {!edit ? (
              <>
                <span className="card-title">{name}</span>
                <p>{text}</p>
              </>
            ) : (
              <>
                <input
                  required
                  className="card-title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="card-action card__action_wraper">
            <div className="action__block">
              <SaveOrEdit edit={edit} />
              <DeleteButton handleDelete={() => deleteTodo(index)} />
            </div>
            <div className={`color__block ${colorClass}`}>
              <div
                onClick={() => handeleColorChange(true, "#e91e63")}
                className="pink circle"
              />
              <div
                onClick={() => handeleColorChange(true, "#9c27b0")}
                className="purple circle"
              />
              <div
                onClick={() => handeleColorChange(true, "#4caf50")}
                className="green circle"
              />
              <div
                onClick={() => handeleColorChange(true, "#ffc107")}
                className="yellow circle"
              />
              <div
                onClick={() => handeleColorChange(true, "#2196f3")}
                className="sea-blue circle"
              />
              <div
                onClick={() => handeleColorChange(true, "#3f51b5")}
                className="blue circle"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
