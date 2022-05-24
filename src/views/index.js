import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { APP_PREFIX_PATH } from "configs/AppConfig";
import AppLayout from "layouts/app-layout";
import AppLocale from "lang";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";
import React from "react";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import useBodyClass from "hooks/useBodyClass";

// import AuthLayout from 'layouts/auth-layout';

export const Views = (props) => {
  const { locale, location, direction } = props;
  const currentAppLocale = AppLocale[locale];
  useBodyClass(`dir-${direction}`);
  return (
    <>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ConfigProvider locale={currentAppLocale.antd} direction={direction}>
          <Switch>
            <Route exact path="/">
              <Redirect to={APP_PREFIX_PATH} />
            </Route>
            {/* <Route path={AUTH_PREFIX_PATH}>
            <AuthLayout direction={direction} />
          </Route> */}
            <Route path={APP_PREFIX_PATH}>
              <AppLayout direction={direction} location={location} />
            </Route>
          </Switch>
        </ConfigProvider>
      </IntlProvider>
      <ToastContainer autoClose={60000} />
    </>
  );
};

const mapStateToProps = ({ theme, auth }) => {
  const { locale, direction } = theme;
  const { token } = auth;
  return { locale, token, direction };
};

export default withRouter(connect(mapStateToProps)(Views));
