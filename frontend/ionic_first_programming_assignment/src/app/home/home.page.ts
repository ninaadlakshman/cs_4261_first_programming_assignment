import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VacationSpot } from 'src/utils/vacationspot';
import { MessageService } from 'primeng/api';
import { VacationSpotService } from '../services/vacationspot.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
  `]
})
export class HomePage implements OnInit {
  date: Date;
  vacation_spots: VacationSpot[]
  editing2: boolean = true;
  clonedVacationDetails: { [s: string]: VacationSpot; } = {};

  constructor(private vacationSpotsService: VacationSpotService, private messageService: MessageService, private changeDetect: ChangeDetectorRef) {}

  ngOnInit() {
    this.vacationSpotsService.getVacationSpots().subscribe(data => {
      this.vacation_spots = data;
    });
  }

  onRowEditInit(vacation_spot: VacationSpot) {
    this.clonedVacationDetails[vacation_spot.id] = {...vacation_spot};
  }

  onRowEditSave(vacation_spot: VacationSpot) {
    delete this.clonedVacationDetails[vacation_spot.id];
    this.messageService.add({severity:'success', summary: 'Success', detail:'Vacation Spot is updated'});
  }

  onRowEditCancel(vacation_spot: VacationSpot, index: number) {
    this.vacation_spots[index] = this.clonedVacationDetails[vacation_spot.id];
    delete this.clonedVacationDetails[vacation_spot.id];
  }
}
