import { Component, OnInit,AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-logintabs',
  templateUrl: './logintabs.component.html',
  styleUrls: ['./logintabs.component.css']
})
export class LogintabsComponent implements OnInit, AfterViewInit {
  socialAuth: boolean = false; 
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;
  passwordType: string = 'password'
  showPassword: boolean = false;

  constructor(public afAuth: AngularFireAuth, private _backendService: BackendService) { }

  ngOnInit() {
    this.socialAuth = environment.socialAuthEnabled;
  }
  ngAfterViewInit() {
    if (!localStorage.getItem("uid")) {
      this.afAuth.user.subscribe(res => {
        if (res) {
          window.localStorage.setItem("uid", res.uid);
          window.localStorage.setItem("displayName", res.displayName);
          window.localStorage.setItem("email", res.email);
          window.localStorage.setItem("picture", res.photoURL);
        }
      });
    }
  }
  login(loginType, formData?) {
    // this._backendService.login(loginType, formData).catch(
    //   (err) => {
    //     this.error = err;
    //   });
    this._backendService.login(loginType, formData);
  }
  logout() {
    this._backendService.logout()
     .then(
       (success) => {
     //  this._router.navigate(['/login']);
     window.localStorage.removeItem("uid");
     window.localStorage.removeItem("displayName");
     window.localStorage.removeItem("email");
     window.localStorage.removeItem("picture");
     window.localStorage.removeItem("role");
     }).catch(function (error) {
         console.log(error);
       })
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
