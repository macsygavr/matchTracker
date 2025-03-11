import Header from "@/src/components/Header/Header";
import React from "react";
import css from "./index.module.css";
import MatchItem from "@/src/components/MatchItem/MatchItem";
import { MatchStatus } from "@/src/components/MatchItem/components/StatusTag/StatusTag";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className={css.listContainer}>
        <MatchItem score={"2 : 1"} status={MatchStatus.LIVE} />
        <MatchItem score={"3 : 2"} status={MatchStatus.FINISHED} />
      </div>
    </div>
  );
};

export default MainPage;
