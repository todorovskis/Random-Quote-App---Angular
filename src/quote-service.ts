import { EventEmitter, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Quote } from "./quote";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class QuoteService {

    colorSubject = new EventEmitter<string>();
    apiUrl = 'http://localhost:8080'

    constructor(private http: HttpClient){}

    getQuote(): Observable<Quote[]> {
        return this.http.get<Quote[]>(this.apiUrl);
    }

    setColor(color: string){
        this.colorSubject.next(color);
    }   

    getColor(): Observable<string>{
        return this.colorSubject.asObservable();
    }

}