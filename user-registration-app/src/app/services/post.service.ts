import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private getUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get(this.getUrl);
  }
}
