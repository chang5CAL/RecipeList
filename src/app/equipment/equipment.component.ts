import { Component, OnInit } from '@angular/core';
import { Equipment } from '../equipment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  userEquipment = [
  ];

  userid = 0;
  equipmentid = "";

  private userEquipmentURL = "den1.mssql7.gear.host/user/read/equipment/" + this.userid;
  private userDeleteEquipmentURL = "den1.mssql7.gear.host/user/delete/equipment/" + this.equipmentid + "/" + this.userid;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUserEquipment().subscribe(Equipment => this.userEquipment = Equipment);
  }

    //HTTP request from
    //https://github.com/kuncevic/angular-httpclient-examples/blob/master/client/src/app/app.component.ts

      getUserEquipment (): Observable<Equipment[]> {
      return this.http.get<Equipment[]>(this.userEquipmentURL)
        .pipe(
          catchError(this.handleError('getUserEquipment',[]))
        );
      }

      deleteUserEquipment (id: number): Observable<{}> {
        const url = this.userDeleteEquipmentURL;
        return this.http.delete(url,httpOptions).pipe(
          catchError(this.handleError('deleteUserEquipment'))
        );
      }

      private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error);

          return of(result as T);
        }
      }
}
