import React from "react";

type Props = {
  handleClick: () => void;
};

const DeleteAll: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn-floating btn-large waves-effect waves-light red delete_botton"
    >
      <i className="material-icons">delete</i>
    </button>
  );
};

export default React.memo(DeleteAll);
