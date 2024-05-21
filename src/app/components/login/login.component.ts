import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginDTO } from '../../model/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: LoginDTO = new LoginDTO()
  errorMessage = ''
  returnUrl: string = ''

  constructor(private as: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  login() {
    this.as.login(this.model).pipe(catchError((err: HttpErrorResponse) => {
      this.errorMessage = err.error
      return of(undefined)
    })
    )
      .subscribe(user => {
        if (user) {
          this.as.getLoggedUser()
          this.model = new LoginDTO
          this.router.navigateByUrl(this.returnUrl)
        }
      })
  }
}
