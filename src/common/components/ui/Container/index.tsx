import classNames from "classnames";
import React, { FC } from "react";
import { DivProps } from "~/utils/dom";

import styles from "./styles.module.scss";

interface ContainerProps extends DivProps {}

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => (
  <div className={classNames(styles.container, className)} {...rest}>
    {children}
  </div>
);

export { Container };
