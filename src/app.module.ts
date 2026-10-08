import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { hostname } from 'os';
import { ProfessoresModule } from './professores/professores.module';
import { InstituicoesModule } from './instituicoes/instituicoes.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    cache: true
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      dialect: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      name: configService.get('DB_NAME'),
      synchronize: false,
      autoLoadModels: false
    }),
    inject: [ConfigService]
  }),
  AlunosModule,
  ProfessoresModule,
  InstituicoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
