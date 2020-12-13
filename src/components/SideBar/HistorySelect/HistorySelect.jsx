import { useContext } from "react";
import { AppContext } from "../../../App.context";
import { Text } from "../../Text/Text";
import { Toggle } from "../../ToggleGroup/Toggle/Toggle";
import styles from "./HistorySelect.module.css";

export const HistorySelect = () => {
  const { state, setState } = useContext(AppContext);

  const {
    tradingHistory: { selected },
  } = state;

  const isOn = (key) => selected === key;
  const toggleHistory = (key) => () => {
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
  };

  return (
    <div className={`flex ${styles.historySelect}`}>
      <Text.BodySmallCaption>Last</Text.BodySmallCaption>
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
