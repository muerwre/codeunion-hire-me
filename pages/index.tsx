import type { NextPage } from "next";
import Head from "next/head";
import { useI18n } from "~/lib/i18n";

const Home: NextPage = () => {
  const { t } = useI18n();

  return (
    <div>
      <Head>
        <title>{t("codeUnionTestTask")}</title>
        <meta name="description" content={t("thingsIDOToGetAJob")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
