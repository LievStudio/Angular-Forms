import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/data/user-interface';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'JLiev',
    emailOffers: true,
    interfaceStyle: 'Dark',
    subscriptionType: 'Annual',
    notes: 'Some starting notes for you...'
  }

  constructor() { }

  ngOnInit() {
  }

}
