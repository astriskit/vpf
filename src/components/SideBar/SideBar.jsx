import React, { useContext } from "react";
import { TradesInProgress } from "./TradesInProgress";
import { Collapse } from "../Collapse/Collapse";
import { AppContext } from "../../App.context";
import { IconTrending } from "../IconTrending";
import styles from "./SideBar.module.css";
import { IconBeats } from "../IconBeats";
import { IconWallet } from "../IconWallet";
import { ClosestOutcome } from "./ClosestOutcome";
import { PHGraph } from "../PHGraph";
import { TotalTrades } from "./TotalTrades";
import { Profit } from "./Profit";
import { HistorySelect } from "./HistorySelect/HistorySelect";

export const SideBar = () => {
  const {
    state: { sideBarOpen: open },
  } = useContext(AppContext);

  return open ? (
    <aside className={styles.sideBar}>
      <Collapse
        label="Open Trades"
        icon={<IconBeats />}
        contentCls={"flex " + styles.flexRow}
      >
        <TradesInProgress />
        <ClosestOutcome />
      </Collapse>
      <Collapse
        label="Trading History"
        icon={<IconTrending />}
        contentCls={"flex-column " + styles.tradingHistory}
      >
        <HistorySelect />
        <div
          className={"flex " + styles.flexRow}
          style={{ marginBottom: "22px" }}
        >
          <TotalTrades />
          <Profit />
        </div>
        <PHGraph />
      </Collapse>
      <Collapse label="Wallets" icon={<IconWallet />}>
        Hello World
      </Collapse>
    </aside>
  ) : null;
};
