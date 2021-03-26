import {Module} from '@nestjs/common';
import {ProfileModule} from "./profile/profile.module";
import {UserModule} from './user/user.module'
import {LoginModule} from "./auth/login.module";

@Module({
    imports: [
        UserModule,
        ProfileModule,
        LoginModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
