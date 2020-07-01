import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuptabs',
  templateUrl: './signuptabs.component.html',
  styleUrls: ['./signuptabs.component.css']
})
export class SignuptabsComponent implements OnInit {
  state: string = '';
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;
  savedChanges = false;
  passwordType: string = 'password'
  showPassword: boolean = false;


  constructor(private _backendService: BackendService, private _router: Router) {
  }
  ngOnInit() {
  }
  routeLoginPage() {
    this._router.navigate(['/login']);
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this._backendService.createUser(formData).then(
      (success) => {
        this.dataLoading = false;
        this.savedChanges = true;
      },
      (error) => {
        this.error = error;
        this.dataLoading = false;
        this.savedChanges = false;
      }
    );
  }

  public passwordAction() {
    if (this.showPassword){
      this.showPassword = false;
      this.passwordType = 'password';
    }else {
      this.showPassword = true;
      this.passwordType = 'text';
    }
  }
}
