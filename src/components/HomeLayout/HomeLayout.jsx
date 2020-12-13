import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";
import styles from "./HomeLayout.module.css";

export const HomeLayout = ({ children, contentCls = "" }) => (
  <div className={`${styles.homeLayout} flex-column`}>
    <Header />
    <div className="flex">
      <SideBar />
      <main className={`${styles.main} ${contentCls}`}>{children}</main>
    </div>
  </div>
);
