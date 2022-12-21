import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/service/tip.service';

@Component({
  selector: 'app-save-diet',
  templateUrl: './save-diet.component.html',
  styleUrls: ['./save-diet.component.scss']
})
export class SaveDietComponent implements OnInit {


  constructor(private tipSvc:TipService) { }


  tips:Tip[] = [];

  ngOnInit(): void {
    this.getSustDietTips()


  }


  getSustDietTips(): void{
    this.tipSvc.getAllSustDietTips().subscribe(tips =>
      this.tips = tips)
  }

}

