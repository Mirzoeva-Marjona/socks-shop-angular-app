import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Purchase} from '../models/purchase';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private purchase: Map<string, Purchase> = new Map<string, Purchase>();

  constructor(private storage: StorageService) {
    this.loadPurchase();
  }

  public addPurchase(product: Product, socksSize: string): void {
    const purchaseId = product.id.toString() + '_' + socksSize;
    if (this.purchase.has(purchaseId)) {
      const purchaseRow = this.purchase.get(purchaseId);
      if (purchaseRow) {
        purchaseRow.count += 1;
      }
    } else {
      const newPurchase = new Purchase(product.id, product.img, product.name, product.price, socksSize, 1);
      this.purchase.set(purchaseId, newPurchase);
    }
    this.savePurchase();
  }

  public loadPurchase(): Purchase[] {
    if (!this.storage.getItem('basket')) {
      const map = new Map<string, Purchase>();
      this.storage.setItem('basket', Array.from(map.entries()));
    }

    this.purchase = new Map<string, Purchase>(this.storage.getItem('basket'));
    console.log(this.purchase);
    return Array.from(this.purchase.values());
  }

  public getCount(): number {
    let count = 0;
    this.purchase.forEach((value) => {
      count += value.count;
    });
    return count;
  }

  public deleteBasketRow(purchaseId: string): void {
    this.purchase.delete(purchaseId);
    this.savePurchase();
  }

  private savePurchase(): void {
    this.storage.setItem('basket', Array.from(this.purchase.entries()));
  }

  public updatePurchase(purchase: Purchase): void {
    const purchaseId = purchase.id.toString() + '_' + purchase.socksSize;
    this.purchase.set(purchaseId, purchase);
    this.savePurchase();
  }
}
