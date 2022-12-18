import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/service/tip.service';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-save-water',
  templateUrl: './save-water.component.html',
  styleUrls: ['./save-water.component.scss']
})
export class SaveWaterComponent implements OnInit {


  constructor(private tipSvc:TipService) { }


  tips:Tip[] = [];

  ngOnInit(): void {
    this.getWaterTips()

  }

  getWaterTips(): void {
    this.tipSvc.getAllSaveWaterTips().subscribe(tips =>
      this.tips = tips)
  }

}
