import Image from "next/image";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { Button } from "~/common/ui/Button";
import { TextInput } from "~/common/ui/TextInput";
import { useI18n } from "~/lib/i18n";
import { useSearch } from "~/modules/search/context/SearchProvider";
import styles from "./styles.module.scss";

interface SearchPanelProps {}

const SearchPanel: FC<SearchPanelProps> = () => {
  const { t } = useI18n();
  const [value, setValue] = useState("");
  const { setSearch } = useSearch();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearch(value);
    },
    [setSearch, value]
  );

  return (
    <section>
      <h1 className={styles.heading}>{t("findBestOffers")}</h1>

      <form className={styles.panel} onSubmit={onSubmit}>
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
          value={value}
          onChange={onChange}
        />

        <Button type="submit">{t("find")}</Button>
      </form>
    </section>
  );
};

export { SearchPanel };
