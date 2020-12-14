import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";
import styles from "./HomeLayout.module.css";

type TypeHomeLayout = {
  children: React.ReactNode;
  contentCls?: string;
};

export const HomeLayout: React.FC<TypeHomeLayout> = ({
  children,
  contentCls = "",
}) => (
  <div className={`${styles.homeLayout} flex-column`}>
    <Header />
    <div className="flex">
      <SideBar />
      <main className={`${styles.main} ${contentCls}`}>{children}</main>
    </div>
  </div>
);
