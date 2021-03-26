import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {AdminMiddleware} from "../guard-and-middleware/middleware/admin.middleware";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtShared} from "../auth/jwt/jwt.module";

@Module({
    imports: [JwtShared],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AdminMiddleware)
            .forRoutes({path:'/user/:id',method:RequestMethod.DELETE})
    }
}
