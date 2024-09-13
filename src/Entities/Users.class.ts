// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  //PrimaryColumn,
  //Index,
  CreateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

// importaciones de identidades
import { Roles } from './Roles.class';
import { Charges } from './Charges.class';
import { Tasks } from './Tasks.class';

@Entity('users', {
  orderBy: {
    id: 'ASC',
  },
})
export class Users {
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
      unique: true,
      length: 100,
    })
      email: string;

    @Column({
      nullable: false,
      length: 100,
    })
      password: string;

    @Column({
      nullable: false,
      length: 15,
    })
      phoneNumber: string;

    @Column({ default: 1 })
      state: number;

    @Column()
      idRole: number;

    @Column()
      idCharges: number;

    @CreateDateColumn()
      createdAt: Date;

    @CreateDateColumn()
      updatedAt: Date;

  // Relación de uno a muchos con la roles
  @JoinColumn({ name: 'idRole', referencedColumnName: 'id' })
  @ManyToOne(() => Roles, (role) => role.user)
    role: Roles;

  @JoinColumn({ name: 'idCharges', referencedColumnName: 'id' })
  @ManyToOne(() => Charges, (charges) => charges.user)
    charges: Charges;

  // relación de muchos a uno con la tabla usuarios
  @JoinColumn({ name: 'id', referencedColumnName: 'idUser' })
  @OneToMany(() => Tasks, (tasks) => tasks.user)
    tasks: Tasks[];
}
