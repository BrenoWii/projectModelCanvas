import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PasswordTransformer } from './password.transformer';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
  
  @Column({
    nullable:false,
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;
  

  @CreateDateColumn()
  @UpdateDateColumn()

  @Column({ default: true })
  isActive: boolean;
}
