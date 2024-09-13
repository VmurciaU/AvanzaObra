// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Projects } from './Projects.class';

// importaciones de identidades

@Entity('clients', {
  orderBy: {
    id: 'ASC',
  },
})
export class Clients {
    // columna para identificación única
    @PrimaryGeneratedColumn({ type: 'int' })
      id: number;

    @Column({
      nullable: false,
      length: 100,
    })
      name: string;

    @Column({
      nullable: false,
      length: 128,
    })
      typeIdentification: string;

    @Column({
      nullable: false,
      unique: true,
      length: 100,
    })
      email: string;

    @Column({
      nullable: false,
      length: 15,
    })
      phoneNumber: string;

    @Column({ default: 1 })
      state: number;

    @CreateDateColumn()
      createdAt: Date;

    @CreateDateColumn()
      updatedAt: Date;

  // relación de muchos a uno con la tabla usuarios
  @JoinColumn({ name: 'id', referencedColumnName: 'idClient' })
  @OneToMany(() => Projects, (project) => project.client)
    project: Projects[];

}
