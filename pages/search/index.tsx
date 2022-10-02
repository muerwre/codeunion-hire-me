import Head from "next/head";
import { FC } from "react";
import { Container } from "~/common/ui/Container";
import { useI18n } from "~/lib/i18n";
import { useAuth } from "~/lib/jwt";
import { SearchPanel } from "~/modules/search/containers/SearchPanel";
import { SearchResults } from "~/modules/search/containers/SearchResults";
import { SearchProvider } from "~/modules/search/context/SearchProvider";
import styles from "./styles.module.scss";

const SearchPage: FC = () => {
  const { t } = useI18n();
  const { isUser } = useAuth();

  return (
    <SearchProvider>
      <Head>
        <title>{t("codeUnionTestTask")}</title>
        <meta name="description" content={t("thingsIDOToGetAJob")} />
      </Head>

      <div className={styles.panel}>
        <Container>
          <SearchPanel />
        </Container>
      </div>

      <div className={styles.results}>
        <Container>
          {isUser ? (
            <SearchResults />
          ) : (
            <section className={styles.authorization_prompt}>
              <p className={styles.authorization_warning}>
                {t("loginToSeeResults")}
              </p>
            </section>
          )}
        </Container>
      </div>
    </SearchProvider>
  );
};

export default SearchPage;
