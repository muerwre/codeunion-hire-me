import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class AuthStore {
  public access = "";
  public refresh = "";

  constructor() {
    makeAutoObservable(this);

    void makePersistable(this, {
      name: `${process.env.NEXT_PUBLIC_STORAGE_PREFIX}auth`,
      properties: ["access", "refresh"],
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    });
  }

  public setTokens = (access: string, refresh: string) => {
    this.access = access;
    this.refresh = refresh;
  };

  public logout = () => {
    this.access = "";
    this.refresh = "";
  };
}
