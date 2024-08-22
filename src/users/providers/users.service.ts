import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-params.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDTO } from '../dtos/create-user.dto';

/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDTO) {
    //check is user exist with same email
    const isExist = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    //handle exception
    //create a new user
    if (!isExist) {
      let newUser = this.userRepository.create(createUserDto);
      newUser = await this.userRepository.save(newUser);

      return newUser;
    } else {
      return 'email already taken';
    }
  }

  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamDto, limit, page);
    return [
      {
        firstName: 'john',
        email: 'john@doe.com',
      },
      {
        firstName: 'ghozi',
        email: 'ghozi@gmail.com',
      },
    ];
  }

  public async findOneById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
}
