import { BaseFormatter } from './BaseFormatter';

export interface IUserModel {
  _id?: string;
  id?: string;
  email: string;
  name: string;
  mobile?: string;
  skypeId?: string;
}

export class UserFormatter extends BaseFormatter implements IUserModel {
  public email: string = undefined;
  public name: string = undefined;
  public mobile: string = undefined;
  public skypeId: string = undefined; 

  constructor(args: any) {
    super();
    this.format(args);
  }
}
