import { Controller, Get, Param } from '@nestjs/common';
import { MovimentationsService } from './movimentations.service';

@Controller('movimentations')
export class MovimentationsController {
    constructor (private readonly movimentationService:MovimentationsService) {}

    @Get()
    getAllMovimentations(): string []{
        return this.movimentationService.getAllMovimentations()
    }


    @Get(':id')
    getMovimentationById(@Param('id') id): string {
        return this.movimentationService.getMovimentationById(id)
    }
}
