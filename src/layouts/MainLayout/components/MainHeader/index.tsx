import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { FC, useCallback } from "react";
import { Button } from "~/common/ui/Button";
import { Container } from "~/common/ui/Container";
import { useI18n } from "~/lib/i18n";
import { useAuth } from "~/lib/jwt";

import styles from "./styles.module.scss";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = observer(() => {
  const auth = useAuth();
  const { t } = useI18n();

  const logout = useCallback(() => {
    if (!window.confirm(t("areYouSureWantToExit"))) return;
    auth.logout();
  }, [auth, t]);

  const register = useCallback(() => {
    window.alert("not implemented");
  }, []);

  const login = useCallback(() => {
    window.alert("not implemented");
  }, []);

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">{t("main")}</Link>
        </nav>

        <div className={styles.buttons}>
          {auth.isUser ? (
            <>
              <Button size="sm" onClick={logout} role="button">
                {t("logout")}
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" color="opaque" onClick={register} role="button">
                {t("registration")}
              </Button>
              <Button size="sm" onClick={login} role="button">
                {t("signIn")}
              </Button>
            </>
          )}
        </div>
      </Container>
    </header>
  );
});

export { MainHeader };
