import {User} from "../user/entity/user.entity";
import {UserInterface} from "../types/types";
import {getManager} from "typeorm/index";
import {JwtService} from "@nestjs/jwt";
import {TokenType} from "../types/types";
import {Injectable} from "@nestjs/common";

@Injectable()
export class LoginService {
    private readonly manager;

    constructor(private readonly jwtService: JwtService) {
        this.manager = getManager();
    }

    private async validateUser(user: UserInterface): Promise<User | null> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        if (candidate.password === user.password) {
            return candidate;
        }
        return null;
    }

    async login(body: UserInterface): Promise<TokenType> {
        const user = this.validateUser(body);
        return {
            token: this.jwtService.sign({user}),
        };
    }

    async registration(user: UserInterface): Promise<TokenType> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        console.log(candidate);
        if (!candidate) {
            await this.manager.insert(User, user);
            return {
                token: this.jwtService.sign({user})
            }
        }
        return {
            message: "User with such credentials exists"
        }
    }

}