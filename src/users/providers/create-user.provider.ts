import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
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
      let newUser = this.userRepository.create({
        ...createUserDto,
        password: await this.hashingProvider.hashPassword(
          createUserDto.password,
        ),
      });
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
}
