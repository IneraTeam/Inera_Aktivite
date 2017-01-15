// Services
import { AuthService } from '../services/auth/auth.service';
import { IsUserLoggedIn, UserService } from '../services/user/user.service';
// Components

import { LoginComponent } from '../login/login.component';
import { SignComponent } from '../sign/sign.component';
// Pipes
import { CapitalizePipe } from '../pipes/capitalize';
import { MenuComponent } from '../homeshell/menu/menu.component';
import { HShellComponent } from '../homeshell/hshell.component';

export const rootServices = [AuthService, IsUserLoggedIn];
export const rootComponents = [MenuComponent, LoginComponent, SignComponent, HShellComponent];
export const pipes = [CapitalizePipe];
