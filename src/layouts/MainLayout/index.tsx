import React, { FC, PropsWithChildren } from "react";
import { Modal, ModalProvider } from "~/common/modal/ModalProvider";
import { LoginForm } from "~/modules/auth/containers/LoginForm";
import { RegistrationForm } from "~/modules/auth/containers/RegistrationForm";
import { MainHeader } from "./components/MainHeader";

interface MainLayoutProps extends PropsWithChildren {}

const components: Record<Modal, FC> = {
  [Modal.Login]: () => <LoginForm />,
  [Modal.Register]: () => <RegistrationForm />,
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <ModalProvider components={components}>
      <MainHeader />
      <main>{children}</main>
    </ModalProvider>
  );
};

export { MainLayout };
