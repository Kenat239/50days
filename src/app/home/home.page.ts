import { Component } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';
import {SocketService} from '../servicios/socket.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private useS: UsuarioService,
    private router: Router,
    private socket: Socket,
    private socketS: SocketService
  ) {}

  ngOnInit () {
    this.socketS.escucha ()
  }


  borrar () {
    this.useS.logout ();
  }

}
