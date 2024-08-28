import {
  BadRequestException,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    private readonly usersCreateManyUsers: UsersCreateManyProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDTO) {
    let isExist = undefined;

    try {
      isExist = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'error connection to database',
        },
      );
    }

    if (isExist) {
      throw new BadRequestException('user already exist');
    }

    if (!isExist) {
      let newUser = this.userRepository.create(createUserDto);
      try {
        newUser = await this.userRepository.save(newUser);
      } catch (error) {
        throw new RequestTimeoutException(
          'unable to process your request at the moment',
          {
            description: 'error connection to database',
          },
        );
      }

      return newUser;
    }
  }

  public async findAll(limit: number, page: number) {
    console.log(limit, page);
    console.log(this.profileConfiguration);
    return await this.userRepository.find();
  }

  public async findOneById(id: number) {
    let user = undefined;
    try {
      user = await this.userRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment',
        {
          description: 'error connection to database',
        },
      );
    }
    if (!user) {
      throw new BadRequestException('user not found');
    }
    if (user) {
      return user;
    }
  }

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyUsers.createMany(createManyUsersDto);
  }
}
