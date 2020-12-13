import React, { useContext } from "react";
import { Collapse } from "../Collapse/Collapse";
import { AppContext } from "../../App.context";
import { IconTrending } from "../IconTrending";
import styles from "./SideBar.module.css";
import { IconBeats } from "../IconBeats";
import { IconWallet } from "../IconWallet";

export const SideBar = () => {
  const {
    state: { sideBarOpen: open },
  } = useContext(AppContext);

  return open ? (
    <aside className={styles.sideBar}>
      <Collapse label="Open Trades" icon={<IconBeats />}>
        Hello World
      </Collapse>
      <Collapse label="Trading History" icon={<IconTrending />}>
        Hello World
      </Collapse>
      <Collapse label="Wallets" icon={<IconWallet />}>
        Hello World
      </Collapse>
    </aside>
  ) : null;
};
