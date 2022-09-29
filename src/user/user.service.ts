import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interfaces/user.interface";
@Injectable()
export class UserService {
  constructor(
    @InjectModel("USER_MODEL") private readonly userModel: Model<User>
  ) {}

  /**
   * @description: 注册方法
   * @param {User} user
   * @return {*}
   */
  public async register(user: User) {
    return this.userModel
      .findOne({
        phone: user.phone,
      })
      .then((res) => {
        if (res) {
          console.log("该用户已注册");
          throw Error("该用户已注册");
        }
      })
      .then(() => {
        try {
          const createUser = new this.userModel(user);
          return createUser.save();
        } catch (error) {
          throw Error("保存用户失败" + error);
        }
      })
      .catch((err) => {
        console.warn(`发生问题--${err}`);
      });
  }
}