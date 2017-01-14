// Services
import { AuthService } from './auth/auth.service';
import { IsUserLoggedIn, UserService } from './user/user.service';
// Components
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignComponent } from '../sign/sign.component';
// Pipes
import { CapitalizePipe } from '../pipes/capitalize';

export const rootServices = [ AuthService, IsUserLoggedIn, UserService];
export const rootComponents = [HomeComponent, LoginComponent, SignComponent];
export const pipes = [ CapitalizePipe ];
