import { makeAutoObservable } from "mobx";
import { AuthStore } from "./auth/AuthStore";

export class Store {
  public auth = new AuthStore();

  constructor() {
    makeAutoObservable(this);
  }
}
