import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {LoginController} from './login.controller';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtStrategy} from './jwt/jwt.strategy';
import {LoginService} from "./login.service";
import {LoginMiddleware} from "../guard-and-middleware/middleware/login.middleware";

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
    controllers: [LoginController],
    providers: [LoginService, JwtStrategy]
})

export class LoginModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(LoginMiddleware)
            .forRoutes(LoginController);
    }
}