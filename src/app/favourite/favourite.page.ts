import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Data } from '../services/my-data';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonButton]
})
export class FavouritePage implements OnInit {
  favourites: any[] = [];
  constructor(private router: Router,private mds: Data) { }

  async ngOnInit() {
    const favs = await this.mds.get('FAVOURITE_KEY');
    this.favourites = favs || [];
    console.log('FAVOURITES:', this.favourites);
  }

  async openDetails(id: number) {
    await this.mds.set('selectedRecipeId', id);
    this.router.navigate(['/recipe-details']);
  }
}
