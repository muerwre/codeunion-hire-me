import type { NextPage } from "next";
import Head from "next/head";
import { FC } from "react";
import { Container } from "~/common/components/ui/Container";
import { useI18n } from "~/lib/i18n";
import { SearchPanel } from "~/modules/search/containers/SearchPanel";
import { SearchResults } from "~/modules/search/containers/SearchResults";
import styles from "./styles.module.scss";

const SearchPage: FC = () => {
  const { t } = useI18n();

  return (
    <div>
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
          <SearchResults />
        </Container>
      </div>
    </div>
  );
};

export default SearchPage;
