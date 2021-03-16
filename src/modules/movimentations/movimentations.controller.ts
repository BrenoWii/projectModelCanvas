import { Controller, Get, Param, Post, Body, UseGuards,Request } from '@nestjs/common';
import { Movimentation } from './movimentation.entity';
import { JwtAuthGuard } from '../auth/jwt-guard';
import { MovimentationsService } from './movimentations.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovimentationDto } from './dto'

@UseGuards(JwtAuthGuard)
@Controller('api/movimentations')
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
    async create(@Request() request, @Body() createMovimentationDto: CreateMovimentationDto) {
        createMovimentationDto.user = request.user.id
        return this.movimentationService.create(createMovimentationDto);
    }
}
