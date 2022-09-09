import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VacationSpot } from 'src/utils/vacationspot';

@Injectable({
  providedIn: 'root'
})
export class VacationSpotService {
  vacationSpots: VacationSpot[] = [
    {
      "id": "1000",
      "location": "New York City, NY",
      "date_to_visit": "09-09-2022",
      "current_temperature": "It is currently 78 degrees."
    },
    {
      "id": "1001",
      "location": "Mumbai, India",
      "date_to_visit": "11-09-2022",
      "current_temperature": "It is currently 88 degrees."
    }
  ]
  constructor(private http: HttpClient) { }

  getVacationSpots(): Observable<VacationSpot[]> {
    return of(<VacationSpot[]>(this.vacationSpots))

    // return this.http.get<any>('')
    //     .toPromise()
    //     .then(res => <VacationSpot[]>res.data)
    //     .then(data => { return data; });
  }
}
