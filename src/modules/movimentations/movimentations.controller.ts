import { Controller, Get, Param, Post, Body, UseGuards, } from '@nestjs/common';
import { Movimentation } from './movimentation.entity';
import { JwtAuthGuard } from '../auth/jwt-guard';
import { MovimentationsService } from './movimentations.service';
import { CreateMovimentationDto } from './dto'

@Controller('api/movimentations')
export class MovimentationsController {
    constructor (private readonly movimentationService:MovimentationsService) {}

    @UseGuards(JwtAuthGuard)
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
