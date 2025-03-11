import React, { FC } from "react";
import css from "./index.module.css";
import CommandDefaultIcon from "@/src/assets/CommandDefaultIcon";
import StatusTag, { MatchStatus } from "./components/StatusTag/StatusTag";

type Props = {
  score: string;
  status: MatchStatus;
};

const MatchItem: FC<Props> = ({ score, status }) => {
  return (
    <div className={css.container}>
      <div className={css.commandInfoContainer}>
        <CommandDefaultIcon />
        <span className={css.commandName}>Command №1</span>
      </div>
      <div className={css.results}>
        <span className={css.matchScore}>{score}</span>
        <StatusTag status={status} />
      </div>
      <div className={css.commandInfoContainer}>
        <span className={css.commandName}>Command №2</span>
        <CommandDefaultIcon />
      </div>
    </div>
  );
};

export default MatchItem;
