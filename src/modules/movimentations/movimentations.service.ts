import { Injectable } from '@nestjs/common';
@Injectable()
export class MovimentationsService {
    getAllMovimentations(): string[]{
        return ['movimmentation', 'movimentation2']

    }

    getMovimentationById(id: number): string{
        return 'Movimentation' +id

    }
}
