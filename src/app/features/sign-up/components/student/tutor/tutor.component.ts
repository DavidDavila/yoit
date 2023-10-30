import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss'],
})
export class TutorComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  onRegister() {
    this.router.navigate(['..', 'child'], { relativeTo: this.route });
  }
}
