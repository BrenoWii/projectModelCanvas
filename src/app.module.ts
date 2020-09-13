import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule,TypeOrmModuleAsyncOptions  } from '@nestjs/typeorm';
import {User} from './entities/user.entity'
import {Movimentation} from './entities/movimentation.entitiy'

import { UsersModule } from './modules/users/users.module'
import { MovimentationsModule } from './modules/movimentations/movimentations.module';
import { ConfigModule, ConfigService } from './modules/configuration';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory:(configService: ConfigService) => {
        console.log(configService.get('DB_TYPE'))
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [User,Movimentation],
          synchronize: configService.isEnv('dev')
        } as TypeOrmModuleAsyncOptions;
      }
    }),
    UsersModule,
    MovimentationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
