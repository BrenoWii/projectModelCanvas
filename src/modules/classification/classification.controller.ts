import { Body, Controller, Post } from '@nestjs/common';
import { CreateClassificationDto } from './dto';
import { ClassificationService } from './classification.service';

@Controller('classification')
export class ClassificationController {
    constructor(private readonly classificationService: ClassificationService){}

    @Post()
    async create(@Body() createClassificationDto: CreateClassificationDto){
        this.classificationService.create(createClassificationDto)
    }

}
