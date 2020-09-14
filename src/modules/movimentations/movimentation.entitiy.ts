
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { PlanOfBills } from '../plan-of-bills/plan-of-bills.entity';
import { User } from '../users/user.entity';

@Entity()
export class Movimentation {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: false})
    date: Date;

    @Column()
    value:number

    @ManyToOne(type => PlanOfBills, planOfBills => planOfBills.movimentations)
    planOfBill: PlanOfBills;

    @Column({nullable: false})
    payDate: Date;

    @OneToOne(type => User)
    @JoinColumn()
    user: User

}
