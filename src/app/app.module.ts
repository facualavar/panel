import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';
import { EmpresaComponent } from './components/empresa/empresa/empresa.component';
import { MarcasComponent } from './components/marcas/marcas/marcas.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SectionComponent } from './components/layout/section/section.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UserSessionComponent } from './components/layout/sidebar/user-session/user-session.component';
import { BreadcrumbComponent } from './components/layout/section/breadcrumb/breadcrumb.component';
import { PerfilesComponent } from './components/usuarios/perfiles/perfiles.component';
import { ItemDropdownComponent } from './components/layout/sidebar/list/item/item-dropdown/item-dropdown.component';
import { ItemLinkComponent } from './components/layout/sidebar/list/item/item-link/item-link.component';
import { ListComponent } from './components/layout/sidebar/list/list.component';
import { ItemComponent } from './components/layout/sidebar/list/item/item.component';
import { HabilitarComponent } from './components/layout/botones/habilitar/habilitar.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { TablaProductosComponent } from './components/productos/tabla-productos/tabla-productos.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsuariosComponent,
    ProductosComponent,
    PedidosComponent,
    EmpresaComponent,
    MarcasComponent,
    DashboardComponent,
    SectionComponent,
    HeaderComponent,
    LoginComponent,
    UserSessionComponent,
    BreadcrumbComponent,
    PerfilesComponent,
    ItemDropdownComponent,
    ItemLinkComponent,
    ListComponent,
    ItemComponent,
    EditarProductoComponent,
    HabilitarComponent,
    TablaProductosComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
