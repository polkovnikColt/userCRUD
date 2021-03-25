import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ProfileController} from './profile.controller';
import {ProfileService} from './profile.service';
import {AdminMiddleware} from "../guard-and-middleware/middleware/admin.middleware";


@Module({
    imports: [],
    controllers: [ProfileController],
    providers: [ProfileService],
})
export class ProfileModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AdminMiddleware)
            .forRoutes({path:'profiles/all', method:RequestMethod.GET});
    }
}