import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_emis_brecho',
      autoLoadEntities: true,  // Carrega automaticamente os modelos de dados das entidades
      synchronize: true, // Sincroniza as tabelas com os modelos de dados
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
