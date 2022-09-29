import { Controller, Post, Body } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { User } from "src/interfaces/user.interface";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("用户模块")
export class UserController {
  constructor(private userService: UserService) {}
  @Post("register")
  @ApiOperation({
    summary: "用户注册",
  })
  async registerUser(@Body() userDto: User) {
    return await this.userService.register(userDto);
  }
}
