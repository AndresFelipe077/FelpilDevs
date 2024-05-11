import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { UserGithub } from './models/user-github';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  at: string = '@';
  
  users: UserGithub[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: any) => {
        this.users = users;
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('All users get successfully!!!');
      }
    })
  }

}
