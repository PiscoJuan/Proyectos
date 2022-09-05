import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { NewCharComponent } from './new-char/new-char.component';
import { EditCharComponent } from './edit-char/edit-char.component';
import { ListCharComponent } from './list-char/list-char.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "new-char", component: NewCharComponent },
  { path: "edit-char", component: EditCharComponent },
  { path: "list-char", component: ListCharComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
