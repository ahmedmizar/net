import { onMobileNavToggle, toggleCollapsedNav } from "redux/actions/Theme";

import { Layout } from "antd";
import Logo from "./Logo";
import { NAV_TYPE_TOP } from "constants/ThemeConstant";
import React from "react";
import { connect } from "react-redux";
import utils from "utils";

// import NavPanel from './NavPanel';

const { Header } = Layout;

export const HeaderNav = (props) => {
  const { navType, headerNavColor, currentTheme } = props;

  const isNavTop = navType === NAV_TYPE_TOP ? true : false;
  const mode = () => {
    if (!headerNavColor) {
      return utils.getColorContrast(
        currentTheme === "dark" ? "#00000" : "#ffffff"
      );
    }
    return utils.getColorContrast(headerNavColor);
  };
  const navMode = mode();

  return (
    <Header
      className={`app-header ${navMode}`}
      style={{ backgroundColor: headerNavColor }}
    >
      <div className={`app-header-wrapper ${isNavTop ? "layout-top-nav" : ""}`}>
        <Logo logoType={navMode} />
      </div>
    </Header>
  );
};

const mapStateToProps = ({ theme }) => {
  const {
    navCollapsed,
    navType,
    headerNavColor,
    mobileNav,
    currentTheme,
    direction,
  } = theme;
  return {
    navCollapsed,
    navType,
    headerNavColor,
    mobileNav,
    currentTheme,
    direction,
  };
};

export default connect(mapStateToProps, {
  toggleCollapsedNav,
  onMobileNavToggle,
})(HeaderNav);
