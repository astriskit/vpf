import React, { useContext } from "react";
import { TradesInProgress } from "./TradesInProgress";
import { Collapse } from "../Collapse/Collapse";
import { AppContext, TypeAppContext } from "../../App.context";
import { IconTrending } from "./IconTrending";
import { IconBeats } from "./IconBeats";
import { IconWallet } from "./IconWallet";
import { ClosestOutcome } from "./ClosestOutcome";
import PHGraph from "../PHGraph.svg";
import { TotalTrades } from "./TotalTrades";
import { Profit } from "./Profit";
import { HistorySelect } from "./HistorySelect/HistorySelect";
import { Trading } from "./Trading";
import { Holding } from "./Holding";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  const { state } = useContext<TypeAppContext>(AppContext);

  const open = state?.sideBarOpen;

  return open ? (
    <aside className={styles.sideBar}>
      <Collapse
        label="Open Trades"
        icon={<IconBeats />}
        contentCls={"flex " + styles.flexRow}
        defaultOpen={false}
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
        <div className={"flex " + styles.flexRow}>
          <TotalTrades />
          <Profit />
        </div>
        <img src={PHGraph} alt="placeholder-graph" />
      </Collapse>
      <Collapse
        label="Training Wallet"
        icon={<IconWallet />}
        contentCls={"flex-column " + styles.trainingWallet}
      >
        <Trading />
        <Holding />
      </Collapse>
    </aside>
  ) : null;
};
