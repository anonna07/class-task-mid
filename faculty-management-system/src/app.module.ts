import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'anonna1234',
      database: 'faculty_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultiesModule,
  ],
})
export class AppModule {}
