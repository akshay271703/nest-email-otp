import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export abstract class Base {
  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  lastUpdatedAt: Date;

  @BeforeInsert()
  created(): Date {
    return (this.createdAt = new Date());
  }

  @BeforeUpdate()
  updated(): Date {
    return (this.lastUpdatedAt = new Date());
  }
}
