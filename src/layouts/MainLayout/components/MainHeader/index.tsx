import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { FC } from "react";
import { Container } from "~/common/ui/Container";
import { useI18n } from "~/lib/i18n";
import { useAuth } from "~/lib/jwt";

import styles from "./styles.module.scss";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = observer(() => {
  const auth = useAuth();
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">{t("main")}</Link>
        </nav>

        <div className={styles.buttons}>{auth.isUser ? <></> : <></>}</div>
      </Container>
    </header>
  );
});

export { MainHeader };
