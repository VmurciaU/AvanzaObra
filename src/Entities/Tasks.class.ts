import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

// import types
import { Users } from './Users.class';
import { Status } from './Status.class';
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
    idUser: number;

  @Column()
    idProject: number;

  @Column()
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
  @ManyToOne(() => Status, (state) => state.tasks)
    states: Status;

  // Relación con la entidad Projects
  @JoinColumn({ name: 'idProject', referencedColumnName: 'id' })
  @ManyToOne(() => Projects, (project) => project.tasks)
    projects: Projects;
}
