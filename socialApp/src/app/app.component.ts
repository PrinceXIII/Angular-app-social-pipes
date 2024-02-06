import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  avatarDefaut = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  utilisateurs = [
    {
      pseudo : 'C@mille',
      age : 23,
      avatar : 'https://i.pravatar.cc/400?img=48'
    },
    {
      pseudo : 'AyCaramba23',
      age: 56,
      avatar: ''
    },
    {
      pseudo : 'ΩmegaXY',
      age : 44,
      avatar : 'https://i.pravatar.cc/400?img=6'
    }
  ]
}
