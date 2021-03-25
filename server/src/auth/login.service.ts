import {User} from "../user/entity/user.entity";
import {LoginResponseType, UserInterface} from "../types/types";
import {getManager} from "typeorm/index";
import {JwtService} from "@nestjs/jwt";
import {Injectable} from "@nestjs/common";

@Injectable()
export class LoginService {
    private readonly manager;

    constructor(private readonly jwtService: JwtService) {
        this.manager = getManager();
    }

    private async validateUser(user: UserInterface): Promise<User | null> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        if (!candidate) return null;
        if (candidate.password === user.password) {
            return candidate;
        }
        return null;
    }

    async login(body: UserInterface): Promise<LoginResponseType> {
        const user = await this.validateUser(body);
        if (!!user) {
            return {
                token: this.jwtService.sign({user}),
                user: user
            };
        } else {
            return {
                loginError:"User not found"
            }
        }
    }

    async registration(user: UserInterface): Promise<LoginResponseType> {
        const candidate = await this.manager.findOne(User, {email: user.email});
        if (!candidate) {
            const newUser = await this.manager.insert(User, user);
            return {
                token: this.jwtService.sign({user}),
                user: newUser
            }

        }
        return {
            registrationError: "User with such credentials exists"
        }
    }

}