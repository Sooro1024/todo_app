import React from "react";

type Props = {
  handleDelete: () => void;
};

const DeleteButton: React.FC<Props> = ({ handleDelete }) => {
  return (
    <button
      onClick={handleDelete}
      className="btn waves-effect waves-light red darken-2"
    >
      <i className="material-icons">delete</i>
    </button>
  );
};

export default React.memo(DeleteButton);
