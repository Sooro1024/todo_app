import React from "react";

type Props = {
  panding: boolean;
  count: number;
};

const Spinner: React.FC<Props> = ({ panding, count }) => {
  if (count === 0 && panding) {
    return (
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
    );
  } else if (count === 0 && !panding) {
    return (
      <div className="preloader-wrapper">
        <h4>There is no ToDo</h4>
      </div>
    );
  } else {
    return null;
  }
};

export default React.memo(Spinner);
