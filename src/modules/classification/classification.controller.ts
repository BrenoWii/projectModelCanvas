import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateClassificationDto } from './dto';
import { ClassificationService } from './classification.service';

@Controller('api/classification')
export class ClassificationController {
    constructor(private readonly classificationService: ClassificationService){}

    @Post()
    async create(@Body() createClassificationDto: CreateClassificationDto){
       return this.classificationService.create(createClassificationDto)
    }

    @Get()
    async getClassifications(){
        return this.classificationService.getClassifications()
    }

}
