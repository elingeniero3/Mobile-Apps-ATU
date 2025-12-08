import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart,settingsOutline} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, FormsModule],
})
export class HomePage {
  ingredients:string="";

  constructor() {
    addIcons({ heart, settingsOutline});
  }

  openFavourites() {
    //TBD
  }
  openSettings() {
    //TBD
  }
  onSearch() {
    //TBD
  }

  
}
