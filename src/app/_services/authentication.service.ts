import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { ApiService } from '_services/api.service';
import { ToastController } from '@ionic/angular';

@Injectable()
export class AuthenticationService {

    public isAuthenticated: boolean;

    public userDetails: KeycloakProfile;

    constructor(
      private http: HttpClient,
      private keycloakService: KeycloakService,
      private apiService: ApiService,
      private toastController: ToastController,
    ) {
      this.isAuthenticated = false;
    }

    async init() {
      await this.checkLogin();
      if (this.isAuthenticated) {
        await this.getUserInfo();
        this.apiService.getAccount().subscribe(
          response => {},
          error => {
            if (error.status === 404) {
              this.apiService.createAccount().subscribe(
                async success => {
                  let toast = await this.toastController.create({
                    message: 'We have created an account for you. Welcome!',
                    color: 'success',
                    duration: 4000,
                    showCloseButton: true,
                    closeButtonText: 'OK'
                  });
                  toast.present();
                },
                error => {
                  console.log("Error when calling createAccount(): ", error)
                }
              );
            }
          }
        );
      }
    }

    async checkLogin() {
      this.isAuthenticated = await this.keycloakService.isLoggedIn();
    }

    async getUserInfo() {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }

    login() {
      this.keycloakService.login();
    }

    logout() {
      this.keycloakService.logout();
    }

    account() {
      this.keycloakService.getKeycloakInstance().accountManagement();
    }
}
