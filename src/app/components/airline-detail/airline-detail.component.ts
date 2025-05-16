import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService, Airline } from '../../services/airline.service';

@Component({
  standalone: false,
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css']
})
export class AirlineDetailComponent implements OnInit {
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

  viewFlights() {
    this.router.navigate(['/airline', this.airline.id, 'flights']);
  }
}
