import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterDTO } from '../../model/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model: RegisterDTO = new RegisterDTO()
  errorMessage = ''

  constructor(private as: AuthService, private router: Router) { }

  register() {
    this.as.register(this.model).pipe(catchError((err: HttpErrorResponse) => {
      this.errorMessage = err.error
      return of(undefined)
    })
    )
      .subscribe(user => {
        if (user) {
          this.model = new RegisterDTO
          this.router.navigate(["/login"])
        }
      })
  }

}
