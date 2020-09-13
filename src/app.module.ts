import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Movimentation } from './entities/movimentation.entitiy';
import { User } from './entities/user.entity';


import { UsersModule } from './modules/users/users.module'
import { MovimentationsModule } from './modules/movimentations/movimentations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'adm',
      password: '35157595',
      database: 'fluxodecaixa',
      entities: [User, Movimentation],
      synchronize: true,
    }),
    UsersModule,
    MovimentationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
