import {Injectable} from "@angular/core";


@Injectable()
export class LocalStorageService{
  constructor(){}

  public setData(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  public readData<T>(key: string): T {
    let value: string = localStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return <T>JSON.parse(value);
    }

    return null;
  }
}

