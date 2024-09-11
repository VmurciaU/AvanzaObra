// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

// importaciones de identidades
import { Users } from './Users.class';

@Entity('charges', {
  orderBy: {
    id: 'ASC',
  },
})

export class Charges {
  @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

  @Column({ unique: true })
    name: string;

  @Column({ length: 255 })
    description: string;

  @Column({ default: 1 })
    state: number;

  @CreateDateColumn()
    createdAt: Date;

  @CreateDateColumn()
    updatedAt: Date;

  @CreateDateColumn()
    createdBy: number;

  // relación de muchos a uno con la tabla usuarios
  @JoinColumn({ name: 'id', referencedColumnName: 'idCharges' })
  @OneToMany(() => Users, (user) => user.charges)
    user: Users[];
}