import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassificationController } from './classification.controller';
import { Classification } from './classification.entity';
import { ClassificationService } from './classification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Classification])
  ],
  controllers: [ClassificationController],
  providers: [ClassificationService]
})
export class ClassificationModule {}
