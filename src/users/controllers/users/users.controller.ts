import { UsersService } from "../../services/users/users.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "src/users/dtos/CreateUser.dto";

@Controller("users")
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    async getUsers() {
        return this.userService.findUsers();
    }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto) {
        this.userService.createUsers(createUserDto);
    }
}
