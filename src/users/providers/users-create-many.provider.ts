import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    //query runner untuk transaction
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      //connect instance to data source
      await queryRunner.connect();
      //start transaction
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException('cannot connect to db');
    }

    try {
      for (const user of createManyUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      //if success commit
      await queryRunner.commitTransaction();
    } catch (error) {
      //if fail rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException('cannot complete the transaction', {
        description: String(error),
      });
    } finally {
      //release connection
      await queryRunner.release();
    }
    return newUsers;
  }
}
