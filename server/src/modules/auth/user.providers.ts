import { Connection, Repository } from 'typeorm';
import { Constants } from '../../constants';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: Constants.UserRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Constants.DbConnectionToken],
  },
];
