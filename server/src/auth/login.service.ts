import {User} from "../user/entity/user.entity";
import {LoginResponseType, UserInterface} from "../types/types";
import {getManager} from "typeorm/index";
import {JwtService} from "@nestjs/jwt";
import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import {config} from "./jwt/secret";

@Injectable()
export class LoginService {
    private readonly manager;

    constructor(private readonly jwtService: JwtService) {
        this.manager = getManager();
    }
    private async validateUser(user: UserInterface): Promise<UserInterface | null> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        if (!candidate) {
            return null;
        }
        const isMatch = await bcrypt.compare(user.password, candidate.password);
        if (isMatch) {
            return candidate;
        }
        return null;
    }

    async loginOnLoad(body:UserInterface):Promise<LoginResponseType>{
        const user:UserInterface = await this.manager.findOne(User,{email:body.email});
        if(!user){
            throw new UnauthorizedException();
        }
        if(user.password === body.password){
            return {
                token: this.jwtService.sign({user}),
                user:user
            }
        }
    }

    async login(body: UserInterface): Promise<LoginResponseType> {
        const user: UserInterface = await this.validateUser(body);
        if (!!user) {
            return {
                token: this.jwtService.sign({user}),
                user: user
            };
        } else {
            throw new UnauthorizedException();
        }
    }

    async registration(user: UserInterface): Promise<LoginResponseType> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        if (!candidate) {
            const hash = await bcrypt.hash(user.password, config.hashSalt)
            user.password = hash;
            await this.manager.insert(User, user);
            return  {
                token: this.jwtService.sign({user}),
                user: user
            }
        }
        else{
            throw new BadRequestException();
        }
    }

}