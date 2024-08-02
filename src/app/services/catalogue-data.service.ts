import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueDataService {
apiUrl="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

httpClient = inject (HttpClient)
  constructor() { }

getCatalogueData():Observable<any>{
   
 //console.log(this.apiUrl)
  return this.httpClient.get(this.apiUrl)
  

}



// getUsersProfile(query: string): Observable<any> {
//   return this.http.get(`https://api.github.com/search/users?q=${query}`)
//     .map(res => res.json());
//     /*.subscribe(x=> console.log(x))*/
// }
}
