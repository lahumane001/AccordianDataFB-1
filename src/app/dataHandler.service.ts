import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject, map } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class DataHanlerService {

    constructor(private http: HttpClient) { }

    url = "https://company-task-87f7b-default-rtdb.asia-southeast1.firebasedatabase.app/accordianData.json";

    updLists: BehaviorSubject<any> = new BehaviorSubject('a')
    postData(res: any) {
        return this.http.post(this.url, res)         

    }

    getData() {
        return this.http.get(this.url).pipe(map((jsonData : any) =>{
            let arr = [];
            for(let data in jsonData ){
                arr.push({...jsonData[data], id : data})
            }
            this.updLists.next(arr)
            return arr;
        }));
    }

}