// Services
import { AuthService } from '../services/auth/auth.service';
import { IsUserLoggedIn, UserService } from '../services/user/user.service';
// Components
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignComponent } from '../sign/sign.component';
// Pipes
import { CapitalizePipe } from '../pipes/capitalize';

export const rootServices = [AuthService, IsUserLoggedIn];
export const rootComponents = [HomeComponent, LoginComponent, SignComponent];
export const pipes = [CapitalizePipe];
