import React from "react";

type Props = { open?: boolean };

const Progress: React.FC<Props> = ({ open = false }) => {
  return open ? (
    <div className="progress progress__card_header">
      <div className="indeterminate" />
    </div>
  ) : null;
};

export default React.memo(Progress);
