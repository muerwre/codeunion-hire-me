import Image from "next/image";
import { FC } from "react";
import { Button } from "~/common/ui/Button";
import { TextInput } from "~/common/ui/TextInput";
import { useI18n } from "~/lib/i18n";
import styles from "./styles.module.scss";

interface SearchPanelProps {}

const SearchPanel: FC<SearchPanelProps> = () => {
  const { t } = useI18n();

  return (
    <section>
      <h1 className={styles.heading}>{t("findBestOffers")}</h1>

      <form className={styles.panel}>
        <TextInput
          placeholder={t("cityAddressStreet")}
          suffix={
            <div className={styles.icon}>
              <Image
                src="/assets/svg/search.svg"
                width={20}
                height={20}
                alt=""
              />
            </div>
          }
        />
        <Button>{t("find")}</Button>
      </form>
    </section>
  );
};

export { SearchPanel };
