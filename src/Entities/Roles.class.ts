// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// importaciones de identidades
import { Users } from './Users.class';

@Entity('roles', {
  orderBy: {
    id: 'ASC',
  },
})

export class Roles {
  @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

  @Column({ unique: true })
    name: string;

  @Column({ default: 1 })
    state: number;

  @CreateDateColumn()
    createdAt: Date;

  @CreateDateColumn()
    updatedAt: Date;

  @CreateDateColumn()
    createdBy: number;

  // relación de muchos a uno con la tabla usuarios
  @JoinColumn({ name: 'id', referencedColumnName: 'idRole' })
  @ManyToOne(() => Users, (user) => user.role)
    user: Users;
}