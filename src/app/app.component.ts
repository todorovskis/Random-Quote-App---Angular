import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteService } from '../quote-service';

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet ></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  backgroundColor: string = '';

  constructor(private service: QuoteService) {}

  ngOnInit(): void {
    this.service.getColor().subscribe(color => {
      document.body.style.backgroundColor = color;
    });
  }


}
