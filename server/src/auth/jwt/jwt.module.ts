import {Module} from "@nestjs/common";
import {JwtStrategy} from "./jwt.strategy";
import {PassportModule} from "@nestjs/passport";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {LoginService} from "../login.service";

@Module({
    imports: [
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: 'secret',
                signOptions: {expiresIn: '1h'}
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [],
    providers: [ConfigService,JwtStrategy, LoginService],
    exports: [JwtModule]
})
export class JwtShared {}