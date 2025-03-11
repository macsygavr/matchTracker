import React, { FC } from "react";
import css from "./index.module.css";
import cn from "classnames";
import { MatchStatus } from "@/src/api/matchInfoApi";
import { getStatusName } from "./helpers";

type Props = {
  status: MatchStatus;
};

const StatusTag: FC<Props> = ({ status }) => {
  return (
    <div
      className={cn(
        css.container,
        status === MatchStatus.Ongoing && css.green,
        status === MatchStatus.Scheduled && css.orange,
        status === MatchStatus.Finished && css.red
      )}
    >
      {getStatusName(status)}
    </div>
  );
};

export default StatusTag;
