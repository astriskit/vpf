import { useContext } from "react";
import { AppContext } from "../../../App.context";
import { BodySmallCaption } from "../../Text/Text";
import { Toggle } from "../../ToggleGroup/Toggle/Toggle";
import { TradeSelect } from "../../../AppState.type";
import styles from "./HistorySelect.module.css";

export const HistorySelect = () => {
  const { state, setState } = useContext(AppContext);

  const selected = state?.tradingHistory?.selected;

  const isOn = (key: TradeSelect) => selected === key;
  const toggleHistory = (key: TradeSelect) => () => {
    if (state?.tradingHistory) {
      if (!selected || (selected && selected !== key)) {
        setState({
          ...state,
          tradingHistory: { ...state.tradingHistory, selected: key },
        });
      } else if (selected === key) {
        setState({
          ...state,
          tradingHistory: { ...state.tradingHistory, selected: "" },
        });
      }
    }
  };

  return (
    <div className={`flex ${styles.historySelect}`}>
      <BodySmallCaption>Last</BodySmallCaption>
      <div className="flex">
        <Toggle
          className={`type-body-caption ${styles.toggle} ${
            isOn("day") ? styles.toggleOn : ""
          }`}
          isOn={isOn("day")}
          onToggle={toggleHistory("day")}
        >
          day
        </Toggle>
        <Toggle
          className={`type-body-caption ${styles.toggle} ${
            isOn("week") ? styles.toggleOn : ""
          }`}
          isOn={isOn("week")}
          onToggle={toggleHistory("week")}
        >
          week
        </Toggle>
        <Toggle
          className={`type-body-caption ${styles.toggle} ${
            isOn("month") ? styles.toggleOn : ""
          }`}
          isOn={isOn("month")}
          onToggle={toggleHistory("month")}
        >
          month
        </Toggle>
        <Toggle
          className={`type-body-caption ${styles.toggle} ${
            isOn("all") ? styles.toggleOn : ""
          }`}
          isOn={isOn("all")}
          onToggle={toggleHistory("all")}
        >
          all
        </Toggle>
      </div>
    </div>
  );
};
