import React, { FC, useCallback, useState } from "react";
import { useLoginRequest } from "~/api/rest/auth/useLoginRequest";
import { Modal, useModal } from "~/common/modal/ModalProvider";
import { Button } from "~/common/ui/Button";
import { FormError } from "~/common/ui/FormError";
import { TextInput } from "~/common/ui/TextInput";
import { useI18n } from "~/lib/i18n";
import { useAuth } from "~/lib/jwt";
import { useLoginForm } from "../../hooks/useLoginForm";
import styles from "./styles.module.scss";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const { t } = useI18n();
  const [error, setError] = useState("");
  const { setTokens } = useAuth();
  const request = useLoginRequest();
  const { close, open } = useModal();

  const register = useCallback(() => {
    open(Modal.Register);
  }, [open]);

  const onSubmit = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        setError("");
        const { tokens } = await request(email, password);
        setTokens(tokens.accessToken, tokens.refreshToken);
        close();
      } catch (e) {
        setError(String(e));
      }
    },
    [close, request, setTokens]
  );

  const { handleSubmit, handleChange, values } = useLoginForm(onSubmit);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>{t("signIn")}</h2>

      <TextInput
        placeholder={t("email")}
        onChange={handleChange("email")}
        value={values.email}
      />

      <TextInput
        placeholder={t("password")}
        onChange={handleChange("password")}
        value={values.password}
      />

      {!!error && <FormError>{error}</FormError>}

      <Button type="submit">{t("signIn")}</Button>

      <Button color="opaque" type="button" onClick={register}>
        {t("register")}
      </Button>

      <Button color="underline" size="xs" type="button">
        {t("forgotPassword")}
      </Button>
    </form>
  );
};

export { LoginForm };
