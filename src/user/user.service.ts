import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../model/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async find(filter: any): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findOne(conditions: any, password?: boolean): Promise<User> {
    if (password) {
      return this.userModel.findOne(conditions, '+password').exec();
    }
    return this.userModel.findOne(conditions).exec();
  }

  async exists(id: string): Promise<boolean> {
    return this.userModel.exists({ _id: id });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
