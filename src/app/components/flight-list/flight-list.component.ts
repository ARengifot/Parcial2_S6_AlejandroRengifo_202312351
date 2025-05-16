import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService, Airline, Flight } from '../../services/airline.service';

@Component({
  standalone:false,
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  airline!: Airline;

  constructor(
    private route: ActivatedRoute,
    private svc: AirlineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.svc.getOne(id).subscribe(a => this.airline = a);
  }

  goBack() {
    this.router.navigate(['/airline', this.airline.id]);
  }
}
