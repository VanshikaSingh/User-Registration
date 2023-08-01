import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  constructor(private http: HttpClient) {}

  sendDataToApi(data: any) {
    const apiUrl = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
    console.log(data, 'from get service');
    return this.http.get(apiUrl, data);
  }
}
