import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/service/tip.service';

@Component({
  selector: 'app-save-electricity',
  templateUrl: './save-electricity.component.html',
  styleUrls: ['./save-electricity.component.scss']
})
export class SaveElectricityComponent implements OnInit {


  constructor(private tipSvc:TipService) { }


  tips:Tip[] = [];

  ngOnInit(): void {
    this.getElectricityTips()


  }


  getElectricityTips(): void{
    this.tipSvc.getAllSaveElectricityTips().subscribe(tips =>
      this.tips = tips)
  }

}
