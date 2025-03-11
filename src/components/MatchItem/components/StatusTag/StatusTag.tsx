import React, { FC } from "react";
import css from "./index.module.css";
import cn from "classnames";

export enum MatchStatus {
  LIVE = "Live",
  FINISHED = "Finished",
}

type Props = {
  status: MatchStatus;
};

const StatusTag: FC<Props> = ({ status }) => {
  return (
    <div
      className={cn(
        css.container,
        status === MatchStatus.LIVE && css.green,
        status === MatchStatus.FINISHED && css.red
      )}
    >
      {status}
    </div>
  );
};

export default StatusTag;
