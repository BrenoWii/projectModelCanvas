import { Injectable } from '@nestjs/common';
import { Movimentation } from 'src/entities/movimentation.entitiy';
@Injectable()
export class MovimentationsService {
    getAllMovimentations(): string[]{
        return ['movimmentation', 'movimentation2']

    }

    getMovimentationById(id: number): string{
        return ''

    }
}
