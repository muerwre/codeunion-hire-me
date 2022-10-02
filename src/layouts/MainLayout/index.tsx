import React, { FC, PropsWithChildren } from "react";
import { MainHeader } from "./components/MainHeader";

import styles from "./styles.module.scss";

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div>
    <MainHeader />
    <main>{children}</main>
  </div>
);

export { MainLayout };
