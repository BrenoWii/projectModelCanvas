
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Movimentation {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: false})
    date: Date;

    @Column()
    value:number

    @Column()
    type:string;

    @OneToOne(type => User)
    user: User

}