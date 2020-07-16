import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/shared/song.service';

import { AuthService } from './../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Songs: any = [];

  data = '';

  constructor(
    public songService: SongService,
    public authService: AuthService,
     public storage: Storage,
      public toastController: ToastController
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.songService.getSongList().subscribe((res) => {
      console.log(res)
      this.Songs = res;
    })
  }

  deleteSong(song, i) {
    if (window.confirm('Do you want to delete song?')) {
      this.songService.deleteSong(song._id)
        .subscribe(() => {
          this.Songs.splice(i, 1);
          console.log('Song deleted!')
        }
        )
    }
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
  }
 
  logout() {
    this.authService.logout();
  }
 
  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
 
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }
 

}