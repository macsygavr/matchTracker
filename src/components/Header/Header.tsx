import React from "react";
import css from "./index.module.css";
import WarningIcon from "@/src/assets/WarningIcon";
import UpdateIcon from "@/src/assets/UpdateIcon";

const Header = () => {
  return (
    <div className={css.container}>
      <span className={css.title}>Match Tracker</span>
      <div className={css.actionsContainer}>
        <div className={css.errorContainer}>
          <WarningIcon />
          <span className={css.errorText}>
            Ошибка: не удалось загрузить информацию
          </span>
        </div>
        <button className={css.updateButton}>
          <span className={css.btnText}>Обновить</span>
          <UpdateIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
