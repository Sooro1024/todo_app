import React from "react";

type Props = {
  panding: boolean;
};

const Spinner: React.FC<Props> = ({ panding }) => {
  return panding ? (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  ) : (
    <div className="preloader-wrapper">
      <h4>There is no ToDo</h4>
    </div>
  );
};

export default React.memo(Spinner);
