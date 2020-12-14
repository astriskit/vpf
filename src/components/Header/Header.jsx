import React, { useContext } from "react";
import { Logo } from "../Logo";
import { ToggleGroup } from "../ToggleGroup/ToggleGroup";
import { Toggle } from "../ToggleGroup/Toggle/Toggle";
import { IconSearch } from "./IconSearch";
import { IconGrad } from "./IconGrad";
import { IconStar } from "../IconStar";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Header.module.css";
import { AppContext } from "../../App.context";

const initFilter = {
  crypto: true,
  commodities: false,
  stock: true,
  index: false,
  currencies: false,
};
const allTrueFilter = {
  crypto: true,
  commodities: true,
  stock: true,
  index: true,
  currencies: true,
};

const toggle = (key, ob, fn) => () => {
  if (ob[key]) {
    fn({ ...ob, [`${key}`]: false });
  } else {
    fn({ ...ob, [`${key}`]: true });
  }
};

export const Header = () => {
  const { state, setState } = useContext(AppContext);

  const trainingMode = state.trainingMode;
  const filterCats = state.filter;

  const setTrainingMode = (mode) => setState({ ...state, trainingMode: mode });

  const toggleSideBar = () => {
    state.sideBarOpen
      ? setState({ ...state, sideBarOpen: false })
      : setState({ ...state, sideBarOpen: true });
  };

  const setFilterCats = (filter) => setState({ ...state, filter });

  const isShowAll = () =>
    filterCats.crypto &&
    filterCats.commodities &&
    filterCats.stock &&
    filterCats.index &&
    filterCats.currencies;

  const toggleShowAll = () => {
    isShowAll() ? setFilterCats(initFilter) : setFilterCats(allTrueFilter);
  };
  const toggleCrypto = toggle("crypto", filterCats, setFilterCats);
  const toggleCommodities = toggle("commodities", filterCats, setFilterCats);
  const toggleStock = toggle("stock", filterCats, setFilterCats);
  const toggleIndex = toggle("index", filterCats, setFilterCats);
  const toggleCurrencies = toggle("currencies", filterCats, setFilterCats);

  const toggleTrainingMode = () => {
    trainingMode ? setTrainingMode(false) : setTrainingMode(true);
  };

  return (
    <header className={`${styles.header} flex`}>
      <div className="flex">
        <div onClick={toggleSideBar} className="clickable">
          <Logo />
        </div>
        <ToggleGroup
          className={`${styles.mode} type-body-caption`}
          isOn={trainingMode}
          onToggle={toggleTrainingMode}
          onLabel="Training Mode"
          offLabel="Live Mode"
        />
      </div>
      <div className={`flex type-body-caption ${styles.filters}`}>
        <Toggle isOn={isShowAll()} onToggle={toggleShowAll}>
          Show All
        </Toggle>
        <Toggle isOn={filterCats.crypto} onToggle={toggleCrypto}>
          Crypto
        </Toggle>
        <Toggle isOn={filterCats.commodities} onToggle={toggleCommodities}>
          Commodities
        </Toggle>
        <Toggle isOn={filterCats.stock} onToggle={toggleStock}>
          Stock
        </Toggle>
        <Toggle isOn={filterCats.index} onToggle={toggleIndex}>
          Index
        </Toggle>
        <Toggle isOn={filterCats.currencies} onToggle={toggleCurrencies}>
          Currencies
        </Toggle>
      </div>
      <div className={`flex ${styles.icons}`}>
        <div className="clickable">
          <IconSearch />
        </div>
        <div className="clickable">
          <IconStar />
        </div>
        <div className="clickable">
          <IconGrad />
        </div>
        <Avatar
          count={10}
          imgSrc="https://s3-alpha-sig.figma.com/img/c3db/27dc/7179e0c2b721e40eed16c973ccea57af?Expires=1608508800&Signature=HmI2Fsz81lp45juDQu0mT4RNWHTfmywKPqz5qdf17nMKA8LWYn5nc~b3Z0N1v1weuuFEqACQYrk~4A1NXw7FmeCVgANO9UIWwkARExsJlim0pRhAi0hlHvYZStRGd0pkKtYmt2l3-szthuOxNULr2lrJAwmw615Ga3atpZYlbrKMv1Cq4aaNyyK~YeOpB6Tt-BH7YeL6c74MEY8weFbXHik9L~gnbQl1MYunlLDTcrJIARnepyYPSSO3cLf7YmFXM6VSLc8Tzy6ghxXpHPvR7-48sY7ihIVv2bG5qHxWwUTFK9hqLNXKafjuK3KEHbG1MZW16j1vs9eV8Unq93gSyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </div>
    </header>
  );
};
