import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
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
  @Index()
    idUser: number;

  @Column()
  @Index()
    idProject: number;

  @Column()
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

  @Column()
    stateTasks: number;

  @Column()
    user: number;

  @CreateDateColumn()
    createdAt: Date;

  @CreateDateColumn()
    updatedAt: Date;

  // Relación con la entidad Users
  @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
  @ManyToOne(() => Users, (user) => user.tasks)
    tasks: Users;

  // Relación con la entidad States
  @JoinColumn({ name: 'idState', referencedColumnName: 'id' })
  @ManyToOne(() => States, (state) => state.tasks)
    states: States;

  // Relación con la entidad Projects
  @JoinColumn({ name: 'idProject', referencedColumnName: 'id' })
  @ManyToOne(() => Projects, (project) => project.tasks)
    projects: Projects;
}
