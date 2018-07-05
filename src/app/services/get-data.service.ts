import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {

    constructor(private http: HttpClient) { }

    public getChannels(): Observable<any> {
        return this.http.get('./assets/channel.json');
    }

}
