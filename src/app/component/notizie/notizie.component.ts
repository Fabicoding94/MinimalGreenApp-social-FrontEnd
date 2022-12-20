import { Component, OnInit } from '@angular/core';
import { Notizia } from 'src/app/models/notizia';
import { NotizieService } from 'src/app/service/notizie.service';
import { TipService } from 'src/app/service/tip.service';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.component.html',
  styleUrls: ['./notizie.component.scss']
})
export class NotizieComponent implements OnInit {

  notizie: Notizia[] = [];

  constructor(
    private notizieSvc: NotizieService,
  ) {}
  ngOnInit(): void {
    this.getNotizie();
  }


  getNotizie(): void {
    this.notizieSvc.getAllNotizie().subscribe(notizie =>
      this.notizie = notizie)
  }

}
