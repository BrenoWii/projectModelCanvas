import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import {PlanOfBills} from '../plan-of-bills/plan-of-bills.entity'

@Entity({
  name: 'classification',
})
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @OneToMany(type => PlanOfBills, planOfBills => planOfBills.classification)
  planOfBills: PlanOfBills[];

  @CreateDateColumn()
  createDate: Date
  
  @UpdateDateColumn()
  updateDate: Date

}
