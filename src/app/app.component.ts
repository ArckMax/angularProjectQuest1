import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maxime Gypteau';

  public movies:string[] = ["The Godfather", "Star Wars", "Citizen Kane", "Pulp Fiction" , "Apocalypse Now" , " 2001 : A Space Odyssey", "Blade Runner"]

  public showMovies:boolean = true;
}
