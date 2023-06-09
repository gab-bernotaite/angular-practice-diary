import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import '../app.component.css'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomePageComponent {

  title = 'Mind Your Mind'

  constructor(private router: Router) {}

  onAddDiaryEntry() {
    this.router.navigate(['/add-diary-entry']);
  }


}
