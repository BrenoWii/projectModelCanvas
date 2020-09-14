import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Movimentation } from './movimentation.entitiy';
import { MovimentationsService } from './movimentations.service';
import { CreateMovimentationDto } from './dto'

@Controller('movimentations')
export class MovimentationsController {
    constructor (private readonly movimentationService:MovimentationsService) {}

    @Get()
    getAllMovimentations(): Promise<Movimentation[]> {
        return this.movimentationService.getAllMovimentations()
    }


    @Get(':id')
    getMovimentationById(@Param('id') id): Promise<Movimentation> {
        return this.movimentationService.getMovimentationById(id)
    }

    @Post()
    async create(@Body() createMovimentationDto: CreateMovimentationDto) {
      this.movimentationService.create(createMovimentationDto);
    }
}
