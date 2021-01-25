import {Injectable} from '@angular/core';
import {Product} from './product';
import {Purchase} from './purchase';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private products = [
    {
      id: 1,
      img: '../../assets/socks_1.png',
      name: 'Носки. Устрицы',
      price: 299
    },
    {
      id: 2,
      img: '../../assets/socks_2.png',
      name: 'Носки. Мартин',
      price: 299
    },
    {
      id: 3,
      img: '../../assets/socks_3.png',
      name: 'Носки. Кальмары',
      price: 299
    },
    {
      id: 4,
      img: '../../assets/socks_4.png',
      name: 'Носки. Голуби',
      price: 299
    },
    {
      id: 5,
      img: '../../assets/socks_5.png',
      name: 'Носки. Геометрия',
      price: 299
    },
    {
      id: 6,
      img: '../../assets/socks_6.png',
      name: 'Носки. Суши',
      price: 299
    },
    {
      id: 7,
      img: '../../assets/socks_7.png',
      name: 'Носки. Моллюски',
      price: 299
    },
    {
      id: 8,
      img: '../../assets/socks_8.png',
      name: 'Носки. Зебра',
      price: 299
    }
  ];

  private purchase = new Map<string, Purchase>();

  constructor() {
    this.loadPurchase();
  }

  loadProducts(): Product[] {
    return this.products;
  }

  addPurchase(product: Product, socksSize: string): void {
    const purchaseId = product.id.toString() + '_' + socksSize;
    if (this.purchase.has(purchaseId)) {
      const purchaseRow = this.purchase.get(purchaseId);
      purchaseRow.count += 1;
    } else {
      const newPurchase = new Purchase(product.id, product.img, product.name, product.price, socksSize, 1);
      this.purchase.set(purchaseId, newPurchase);
    }
    this.savePurchase();
  }

  deleteBasketRow(purchaseId: string): void {
    this.purchase.delete(purchaseId);
    this.savePurchase();
  }

  public loadPurchase(): Purchase[] {
    if (localStorage.getItem('basket') == null) {
      const map = new Map();
      localStorage.setItem('basket', JSON.stringify(Array.from(map.entries())));
    }
    const basketJson = localStorage.getItem('basket') as string;
    this.purchase = new Map(JSON.parse(basketJson));
    return Array.from(this.purchase.values());
  }

  private savePurchase(): void {
    localStorage.setItem('basket', JSON.stringify(Array.from(this.purchase.entries())));
  }

  updatePurchase(purchase: Purchase): void {
    const purchaseId = purchase.id.toString() + '_' + purchase.socksSize;
    this.purchase.set(purchaseId, purchase);
    this.savePurchase();
  }

  getCount(): number {
    let count = 0;
    this.purchase.forEach((v) => {
      count += v.count;
    });
    return count;
  }
}
