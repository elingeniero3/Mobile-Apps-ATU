import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { Data } from '../services/my-data';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class RecipeDetailsPage implements OnInit {
  ingredientsUrl="https://api.spoonacular.com/recipes";
  apiKey = '70759a4f7911402abcc53d3c51d3b759';
  recipeIng: any;
  measurement: String = 'Metric';
  
  constructor(private ds:Data, private mhs:MyHttp) { }

  async ngOnInit() {
    const id = await this.ds.get('selectedRecipeId');
    this.measurement = await this.ds.get('MEASUREMENT_KEY');

    const url = this.ingredientsUrl + "/" + id + "/information?apiKey=" + this.apiKey;
    const options: HttpOptions = { url };

    const result = await this.mhs.get(options);
    this.recipeIng = result.data;
    console.log(this.recipeIng);
  }

  isMetric() {
    return this.measurement === 'Metric';
  }
}
