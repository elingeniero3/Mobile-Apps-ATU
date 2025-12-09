import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonInput, IonCardContent, IonCardHeader, IonCard, IonCardTitle} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart,settingsOutline} from 'ionicons/icons';
import { Router } from '@angular/router';
import { Data } from '../services/my-data';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, FormsModule, IonInput, IonCardContent, IonCardHeader, IonCard, IonCardTitle, CommonModule],
})
export class HomePage {
  //Variables:
  ingredients:string="";
  apiKey="70759a4f7911402abcc53d3c51d3b759";
  recipeUrl="https://api.spoonacular.com/recipes/complexSearch";
  recipeInfo !:any;
  
  

  constructor(private router: Router,private ds:Data, private mhs:MyHttp) {
    addIcons({ heart, settingsOutline});
  }
  
  openFavourites() {
    this.router.navigate(['/favourite']);
  }
  openSettings() {
    this.router.navigate(['/settings']);
  }
  async searchRecipes() {
    const url =this.recipeUrl +"?query="+this.ingredients+"&apiKey="+this.apiKey;
    const options: HttpOptions = {
      url,
      method: 'GET'
    };
    
    let result=await this.mhs.get(options);

    this.recipeInfo=result.data.results;
    console.log(JSON.stringify(this.recipeInfo));
  }

  RecipeDetails(){
    //TBD
  }

  
}
