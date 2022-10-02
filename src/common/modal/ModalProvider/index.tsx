import { has } from "lodash";
import Image from "next/image";
import {
  createContext,
  createElement,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ReactModal from "react-modal";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useI18n } from "~/lib/i18n";
import styles from "./styles.module.scss";

interface ModalProviderProps extends PropsWithChildren {
  components: Record<string, FC>;
}

export enum Modal {
  Login = "Login",
  Register = "Register",
}

const ModalContext = createContext({
  current: undefined as Modal | undefined,
  open: (val: Modal) => {},
  close: () => {},
});

ReactModal.setAppElement("#__next");

const ModalProvider: FC<ModalProviderProps> = ({ components, children }) => {
  const [ref, setRef] = useState<HTMLDivElement>();
  const [current, setCurrent] = useState<Modal | undefined>();
  const { t } = useI18n();

  const open = useCallback((val: Modal) => setCurrent(val), []);
  const close = useCallback(() => setCurrent(undefined), []);

  useEffect(() => {
    if (!current) {
      enablePageScroll(ref);
      return;
    }

    disablePageScroll(ref);
  }, [current, ref]);

  return (
    <ModalContext.Provider
      value={{
        current,
        open,
        close,
      }}
    >
      {children}

      <ReactModal
        isOpen={!!current}
        onRequestClose={close}
        className={styles.modal}
        contentRef={setRef}
        overlayClassName={styles.overlay}
      >
        <div className={styles.scroll}>
          <div className={styles.content}>
            {current &&
              has(components, current) &&
              createElement(components[current])}

            <button className={styles.close} role="button" onClick={close}>
              <Image
                src="/assets/svg/close.svg"
                width={13.6}
                height={13.6}
                alt="x"
                aria-label={t("close")}
              />
            </button>
          </div>
        </div>
      </ReactModal>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export { ModalProvider };
