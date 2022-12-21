import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/models/auth-response';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedUser!:AuthResponse

  constructor(private authSvc: AuthService) { }




  ngOnInit(): void {
    if(this.checkLog())
      this.loggedUser = this.authSvc.getAccessData()
  }

  checkLog():boolean{
    return this.authSvc.isUserLogged()
  }

  logOut(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'See you soon!',
      showConfirmButton: false,
      timer: 3000
      })

      this.authSvc.logOut();
  }
}
