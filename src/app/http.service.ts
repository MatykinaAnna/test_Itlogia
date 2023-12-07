import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  postData(data: { name: string; address: string; phone: string }) {
    const body = {}
    return this.http.post('http://localhost:3000/post', body)
  }
}
