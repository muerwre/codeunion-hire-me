import classNames from "classnames";
import React, { FC } from "react";
import { DivProps } from "~/utils/dom";
import styles from "./styles.module.scss";

interface FormErrorProps extends DivProps {}

const FormError: FC<FormErrorProps> = ({ className, ...rest }) => (
  <div className={classNames(styles.error, className)} {...rest} />
);

export { FormError };
