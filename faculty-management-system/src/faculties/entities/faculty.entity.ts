import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('faculties')
export class Faculty {

    @PrimaryColumn({ type: 'varchar', length: 50 })
    id: string;

    @Column()
    name: string;

    @Column()
    expertise: string;

    @Column()
    noOfPublication: number;
}