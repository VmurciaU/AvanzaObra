// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Index,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Clients } from './Clients.class';
import { Tasks } from './Tasks.class';

// importaciones de identidades

@Entity('projects', {
  orderBy: {
    id: 'ASC',
  },
})
export class Projects {
    // columna para identificación única
    @PrimaryGeneratedColumn({ type: 'int' })
      id: number;

    @Column()
    @PrimaryColumn({ name: 'idClient', type: 'int', nullable: false })
    @Index()
      idClient: number;

    @Column({
      nullable: false,
      length: 255,
    })
      name: string;

    @Column({ length: 255 })
      description: string;

    @Column({ default: 1 })
      state: number;

    @CreateDateColumn()
      createdAt: Date;

    @CreateDateColumn()
      updatedAt: Date;

  @JoinColumn({ name: 'idClient', referencedColumnName: 'id' })
  @ManyToOne(() => Clients, (client) => client.project)
    client: Clients;

  // relación de muchos a uno con la tabla usuarios
  @JoinColumn({ name: 'id', referencedColumnName: 'idProject' })
  @OneToMany(() => Tasks, (tasks) => tasks.projects)
    tasks: Tasks[];

}
