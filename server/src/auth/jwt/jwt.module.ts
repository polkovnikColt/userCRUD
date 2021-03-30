import {Module} from "@nestjs/common";
import {JwtStrategy} from "./jwt.strategy";
import {PassportModule} from "@nestjs/passport";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {LoginService} from "../login.service";
import {config} from "./secret";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [],
            useFactory: () => ({
                secret: config.secret,
                signOptions: {expiresIn: config.expiresIn}
            }),
            inject: []
        })
    ],
    controllers: [],
    providers: [JwtStrategy, LoginService],
    exports: [JwtModule]
})
export class JwtShared {}