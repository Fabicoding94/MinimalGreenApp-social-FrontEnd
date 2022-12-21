import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/service/tip.service';

@Component({
  selector: 'app-save-co2',
  templateUrl: './save-co2.component.html',
  styleUrls: ['./save-co2.component.scss']
})
export class SaveCO2Component implements OnInit {


  constructor(private tipSvc:TipService) { }


  tips:Tip[] = [];

  ngOnInit(): void {
    this.getReduceCO2Tips()


  }


  getReduceCO2Tips(): void{
    this.tipSvc.getAllRecuceCO2Tips().subscribe(tips =>
      this.tips = tips)
  }

}
