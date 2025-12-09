import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonInput} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart,settingsOutline} from 'ionicons/icons';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, FormsModule, IonInput],
})
export class HomePage {
  ingredients:string="";

  constructor(private router: Router) {
    addIcons({ heart, settingsOutline});
  }
  
  openFavourites() {
    this.router.navigate(['/favourite']);
  }
  openSettings() {
    this.router.navigate(['/settings']);
  }
  onSearch() {
    //TBD
  }

  
}
