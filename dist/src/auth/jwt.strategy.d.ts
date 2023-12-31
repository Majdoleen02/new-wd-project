import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: {
        userId: number;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        name: string;
        password: string;
    }, unknown> & {}>;
}
export {};
