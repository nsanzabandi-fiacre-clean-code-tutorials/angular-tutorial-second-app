import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthentificationService } from "../services/authentification.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent implements OnInit {

  authentificationStatus: boolean;

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.authentificationStatus = this.authentificationService.isAuthentified;
  }

  onSignInButton() {
    this.authentificationService.signIn().then(
      () => {
        console.log("Connexion réuissie!")
        this.authentificationStatus = this.authentificationService.isAuthentified;
        this.router.navigate(['devices']);
      }
    );
  }

  onSignOutButton() {
    console.log("Déconnexion réuissie!")
    this.authentificationService.signOut();
    this.authentificationStatus = this.authentificationService.isAuthentified;
  }

}
