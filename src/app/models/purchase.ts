import {Product} from './product';

export class Purchase extends Product {
  constructor(public id: number, public img: string, public name: string,
              public price: number, public socksSize: string, public count: number) {
    super(id, img, name, price);
  }
  public purchaseId(): string {
    return this.id.toString() + '_' + this.socksSize;
  }
}
