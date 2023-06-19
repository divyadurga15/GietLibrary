import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.css']
})
export class SubBannerComponent {
  public video ='../assets/InShot_20230618_120442090 (1).mp4'
  constructor(private routes:Router){

  }
  onclick(){
    this.routes.navigateByUrl('department')
  }
}
