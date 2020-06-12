import React from "react";
import styles from "../index.module.scss";

type Props = {
  edit?: boolean;
};

const SaveOrEdit: React.FC<Props> = ({ edit = false }) => {
  return (
    <button
      type="submit"
      className={`btn waves-effect waves-light ${styles.submit__btn}`}
    >
      <div className={!edit ? styles.edit : ""}>
        <div>
          Save
          <i className="material-icons right">save</i>
        </div>
        <div>
          Edit
          <i className="material-icons right">edit</i>
        </div>
      </div>
    </button>
  );
};

export default React.memo(SaveOrEdit);
