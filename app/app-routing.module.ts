import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AutorizadoGuard } from "./guards/autorizado.guard";

const routes: Routes = [
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/inicio/inicio.module").then((m) => m.InicioPageModule),
  },
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./pages/registro/registro.module").then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: "info",
    loadChildren: () =>
      import("./pages/info/info.module").then((m) => m.InfoPageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: "feriados",
    loadChildren: () =>
      import("./pages/feriados/feriados.module").then(
        (m) => m.FeriadosPageModule
      ),
    canActivate: [AutorizadoGuard],
  },
  {
    path: "qr",
    loadChildren: () =>
      import("./pages/qr/qr.module").then((m) => m.QrPageModule),
    canActivate: [AutorizadoGuard],
  },
  {
    path: "perfil/:id",
    loadChildren: () =>
      import("./pages/perfil/perfil.module").then((m) => m.PerfilPageModule),
  },
  {
    path: "perfilactualizar/:id",
    loadChildren: () =>
      import("./pages/perfilactualizar/perfilactualizar.module").then(
        (m) => m.PerfilactualizarPageModule
      ),
  },
  {
    path: "olvidar-contra",
    loadChildren: () =>
      import("./pages/olvidar-contra/olvidar-contra.module").then(
        (m) => m.OlvidarContraPageModule
      ),
  },
  {
    path: "nueva-contra/:id",
    loadChildren: () =>
      import("./pages/nueva-contra/nueva-contra.module").then(
        (m) => m.NuevaContraPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
