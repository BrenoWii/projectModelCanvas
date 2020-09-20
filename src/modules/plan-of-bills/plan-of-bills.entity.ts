import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Classification } from '../classification/classification.entity';
import { Movimentation } from '../movimentations/movimentation.entity';

@Entity({
  name: 'plan-of-bills',
})
export class PlanOfBills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => Classification, classification => classification.planOfBills)
  classification: Classification;

  @OneToMany(type => Movimentation, movimentation => movimentation.planOfBill)
  movimentations: Movimentation[]


  @CreateDateColumn()
  createDate: Date

  @UpdateDateColumn()
  updateDate: Date

}
