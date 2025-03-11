import React from "react";
import css from "./index.module.css";
import WarningIcon from "@/src/assets/WarningIcon";
import UpdateIcon from "@/src/assets/UpdateIcon";
import { useQuery } from "@tanstack/react-query";
import { getMatchList } from "@/src/api/matchInfoApi";
import cn from "classnames";

const Header = () => {
  const { error, isFetching, refetch } = useQuery({
    queryKey: ["matchList"],
    queryFn: getMatchList,
  });

  return (
    <div className={css.container}>
      <span className={css.title}>Match Tracker</span>
      <div className={css.actionsContainer}>
        {!!error && (
          <div className={css.errorContainer}>
            <WarningIcon />
            <span className={css.errorText}>
              Ошибка: не удалось загрузить информацию
            </span>
          </div>
        )}
        <button
          className={cn(css.updateButton, isFetching && css.rotate)}
          onClick={() => refetch()}
        >
          <span className={css.btnText}>Обновить</span>
          {isFetching && <UpdateIcon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
