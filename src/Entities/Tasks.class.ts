import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

// import types
import { Users } from './Users.class';
import { States } from './States.class';
import { Projects } from './Projects.class';

@Entity('tasks', {
  orderBy: {
    id: 'ASC',
  },
})
export class Tasks {
  // columna para identificación única
  @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

  @Column()
  @PrimaryColumn({ name: 'idUser', type: 'int', nullable: false })
  @Index()
    idUser: number;

  @Column()
  @PrimaryColumn({ name: 'idProject', type: 'int', nullable: false })
  @Index()
    idProject: number;

  @Column()
  @PrimaryColumn({ name: 'idState', type: 'int', nullable: false })
  @Index()
    idState: number;

  @Column({
    nullable: false,
    length: 100,
  })
    name: string;

  @Column({ length: 255 })
    description: string;

  @Column({ length: 255 })
    image: string;

  @Column({ default: 1 })
    state: number;

  @CreateDateColumn()
    createdAt: Date;

  @CreateDateColumn()
    updatedAt: Date;

  // Relación con la entidad Users
  @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
  @ManyToOne(() => Users, (user) => user.tasks)
    user: Users;

  // Relación con la entidad States
  @JoinColumn({ name: 'idState', referencedColumnName: 'id' })
  @ManyToOne(() => States, (state) => state.tasks)
    states: States;

  // Relación con la entidad Projects
  @JoinColumn({ name: 'idProject', referencedColumnName: 'id' })
  @ManyToOne(() => Projects, (project) => project.tasks)
    projects: Projects;
}
