import Header from "@/src/components/Header/Header";
import React from "react";
import css from "./index.module.css";
import MatchItem from "@/src/components/MatchItem/MatchItem";
import { useQuery } from "@tanstack/react-query";
import { getMatchList } from "@/src/api/matchInfoApi";

const MainPage = () => {
  const { data } = useQuery({
    queryKey: ["matchList"],
    queryFn: getMatchList,
  });

  return (
    <div>
      <Header />
      <div className={css.listContainer}>
        {data?.data?.matches?.map((item) => (
          <MatchItem key={item.title} match={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
