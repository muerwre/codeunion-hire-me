import { FC, useCallback } from "react";
import { useModal, Modal } from "~/common/modal/ModalProvider";
import { Button } from "~/common/ui/Button";
import { useI18n } from "~/lib/i18n";
import styles from "./styles.module.scss";

interface RegistrationFormProps {}

const RegistrationForm: FC<RegistrationFormProps> = () => {
  const { t } = useI18n();
  const { open } = useModal();

  const login = useCallback(() => {
    open(Modal.Login);
  }, [open]);

  return (
    <form className={styles.container}>
      <h1>{t("register")}</h1>
      <p className={styles.stub}>{t("registrationNotImplemented")}</p>
      <Button onClick={login}>{t("signIn")}</Button>
    </form>
  );
};

export { RegistrationForm };
