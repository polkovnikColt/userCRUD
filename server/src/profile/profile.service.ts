import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {

    getUserById(id:string): string {
        return `User ${id}`;
    }

    getAllUsers():string {
        return "all";
    }

    deleteUser(id:string):string {
        return `Deleted user ${id}`;
    }

    updateProfileCredential(id:string):string{
        return `Updated user credential ${id}`;
    }
}