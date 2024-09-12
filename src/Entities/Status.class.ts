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
import { Tasks } from './Tasks.class';

@Entity('status', {
  orderBy: {
    id: 'ASC',
  },
})

export class Status {
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

  @JoinColumn({ name: 'id', referencedColumnName: 'idState' })
  @OneToMany(() => Tasks, (tasks) => tasks.states)
    tasks: Tasks[];
}