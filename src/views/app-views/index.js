import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { APP_PREFIX_PATH } from "configs/AppConfig";
import Loading from "components/shared-components/Loading";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/apis`}
          component={lazy(() => import(`./apis`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/apis`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
