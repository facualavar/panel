import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EmpresaComponent } from './components/empresa/empresa/empresa.component';
import { PerfilesComponent } from './components/usuarios/perfiles/perfiles.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { MarcasComponent } from './components/marcas/marcas/marcas.component';
import { UserComponent } from './components/user/user.component';

import { ProductosComponent } from './components/productos/productos/productos.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';

import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/new', component: EditarProductoComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'dash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
