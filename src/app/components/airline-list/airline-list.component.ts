import { Component, OnInit } from '@angular/core';
import { AirlineService, Airline } from '../../services/airline.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];

  constructor(
    private svc: AirlineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.svc.getAll().subscribe(list => this.airlines = list);
  }

  goToDetail(id: string) {
    this.router.navigate(['/airline', id]);
  }
}
