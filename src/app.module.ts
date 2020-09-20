import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule,TypeOrmModuleAsyncOptions  } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from './modules/configuration';

import { User, UsersModule, MovimentationsModule, PlanOfBillsModule,PlanOfBills, ClassificationModule, Classification, Movimentation, AuthModule} from './modules'


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory:(configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [User,Movimentation, Classification, PlanOfBills],
          synchronize: configService.isEnv('dev')
        } as TypeOrmModuleAsyncOptions;
      }
    }),
    AuthModule,
    UsersModule,
    MovimentationsModule,
    PlanOfBillsModule,
    ClassificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
