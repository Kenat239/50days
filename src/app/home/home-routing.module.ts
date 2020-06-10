import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'carrito',
        loadChildren: () => import('../paginas/carrito/carrito.module').then(m => m.CarritoPageModule)
      },
      {
    path: 'chat',
    loadChildren: () => import('../paginas/chat/chat.module').then( m => m.ChatPageModule)
  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
