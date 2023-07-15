import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { TaskComponent } from './components/task/task.component';
import { UserGuardGuard } from './service/security/user-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ProbandoBindingsComponent } from './components/probando-bindings/probando-bindings.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AccountComponent },
  { path: 'register', component: NewAccountComponent },
  { path: 'probando', component: ProbandoBindingsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'task', component: TaskComponent, canActivate: [UserGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
