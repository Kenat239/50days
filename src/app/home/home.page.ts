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

  public usuarios = [];
  constructor(
    public useS: UsuarioService,
    private router: Router,
    private socket: Socket,
    private socketS: SocketService
  ) {}

  ngOnInit () {
    this.socketS.concetar();
    this.socketS.escucha ();
    // this.socketS.hear('usuariosConectados').subscribe( (res:any) => {
    //   this.usuarios = res.usuarios;
    //   console.log(res);
    // })
   
  }


  borrar () {
    this.socketS.desconectar();
    this.useS.logout ();
  }

}
