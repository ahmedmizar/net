import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "apis",
    path: `${APP_PREFIX_PATH}/apis`,
    title: "Apis",
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
