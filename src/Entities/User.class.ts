// importaciones de módulos de la librerías
import {
  Entity,
  Column,
  PrimaryColumn,
  // OneToMany,
  Index,
  CreateDateColumn,
  // JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// importaciones de identidades
// import { Role } from './Role.class';

@Entity('users', {
  orderBy: {
    id: 'ASC',
  },
})
export class User {
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
    //TODO: Revisar si es necesario la relaciones con cargos

    @Column({ default: 1 })
      state: number;

    @Column()
    @PrimaryColumn({ name: 'idRole', type: 'int', nullable: false })
    @Index()
      idRole: number;

    @CreateDateColumn()
      createdAt: Date;

    @CreateDateColumn()
      updatedAt: Date;

  // // Relación de uno a muchos con la roles
  // @JoinColumn({ name: 'idRole', referencedColumnName: 'id' })
  // @OneToMany(() => Role, (rol) => rol.user)
  //   role: Role[];
}
