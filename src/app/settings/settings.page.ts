import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Data } from '../services/my-data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  measurement: string = 'Metric'; 
  constructor(private mds: Data) { }

  async ngOnInit() {
    const saved = await this.mds.get('MEASUREMENT_KEY');
    if (saved === 'Metric' || saved === 'US') {
      this.measurement = saved;
    }
    else{
      await this.mds.set('MEASUREMENT_KEY', this.measurement);
    }
  }
  
  async onMeasurementChange(value: string) {
  if (value !== this.measurement) {
    this.measurement = value;
    await this.mds.set("MEASUREMENT_KEY",this.measurement);
  }
}
}
