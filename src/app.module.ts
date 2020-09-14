import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule,TypeOrmModuleAsyncOptions  } from '@nestjs/typeorm';
import {User} from './modules/users/user.entity'
import {Movimentation} from './modules/movimentations/movimentation.entitiy'

import { UsersModule } from './modules/users/users.module'
import { MovimentationsModule } from './modules/movimentations/movimentations.module';
import { ConfigModule, ConfigService } from './modules/configuration';
import { PlanOfBillsModule } from './modules/plan-of-bills/plan-of-bills.module';
import { ClassificationModule } from './modules/classification/classification.module';
import { Classification } from './modules/classification/classification.entity';
import { PlanOfBills } from './modules/plan-of-bills/plan-of-bills.entity';


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
    UsersModule,
    MovimentationsModule,
    PlanOfBillsModule,
    ClassificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
