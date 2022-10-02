import React, { FC, ReactNode } from "react";
import { InputProps } from "~/utils/dom";
import styles from "./styles.module.scss";

interface TextInputProps extends InputProps {
  suffix?: ReactNode;
}

const TextInput: FC<TextInputProps> = ({
  className,
  style,
  suffix,
  ...rest
}) => (
  <div className={styles.wrapper}>
    <input className={styles.input} size={0} {...rest} />
    {suffix && <div className={styles.suffix}>{suffix}</div>}
  </div>
);

export { TextInput };
