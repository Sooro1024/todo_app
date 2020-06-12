import React, { useState, useCallback } from "react";
import Progress from "./Progress";
import SaveOrEdit from "./SaveOrEdit";
import DeleteButton from "./DeleteButton";

const Todo = ({ value = "text" }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>("asdsad");
  const [text, setText] = useState<
    string
  >(`I am a very simple card. I am good at containing small bits of
  information. I am convenient because I require little markup to
  use effectively.`);

  const handeleEdit = useCallback(() => {
    setEdit((state) => !state);
  }, []);
  const handeleSave = useCallback(() => {
    setEdit((state) => !state);
  }, []);

  return (
    <div className="col s12 m12 l6 xl4">
      <div className="card card__block blue-grey">
        <Progress open />
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            if (edit) {
              handeleSave();
            } else {
              handeleEdit();
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
              <DeleteButton handleDelete={console.log} />
            </div>
            <div className="color__block">
              <div className="pink circle" />
              <div className="purple circle" />
              <div className="green circle" />
              <div className="yellow circle" />
              <div className="sea-blue circle" />
              <div className="blue circle" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
