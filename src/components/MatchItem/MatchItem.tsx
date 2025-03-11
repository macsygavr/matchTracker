import React, { FC } from "react";
import css from "./index.module.css";
import CommandDefaultIcon from "@/src/assets/CommandDefaultIcon";
import StatusTag from "./components/StatusTag/StatusTag";
import { MatchItemType } from "@/src/api/matchInfoApi";

type Props = {
  match: MatchItemType;
};

const MatchItem: FC<Props> = ({ match }) => {
  return (
    <div className={css.container}>
      <div className={css.commandInfoContainer}>
        <CommandDefaultIcon />
        <span className={css.commandName}>{match.homeTeam.name}</span>
      </div>
      <div className={css.results}>
        <span
          className={css.matchScore}
        >{`${match.homeScore} : ${match.awayScore}`}</span>
        <StatusTag status={match.status} />
      </div>
      <div className={css.commandInfoContainer}>
        <span className={css.commandName}>{match.awayTeam.name}</span>
        <CommandDefaultIcon />
      </div>
    </div>
  );
};

export default MatchItem;
