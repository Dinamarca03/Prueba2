import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HitoModule } from './Partidas/hito/hito.module';
import { ProcesoConstructivoModule } from './Partidas/proceso_constructivo/proceso-constructivo.module';
import { PaqueteTrabajoModule } from './Partidas/paquete_trabajo/paquete_trabajo.module';
import { PartidaModule } from './Partidas/partida/partida.module';
import { UsuarioModule } from './Usuarios/usuario/usuario.module';
import { EquipoTrabajoModule } from './Usuarios/equipo_trabajo/equipo_trabajo.module';
import { EquipoCargoModule } from './Usuarios/equipo_cargo/equipo_cargo.module';
import { PmEquipoModule } from './Usuarios/pm_equipo/pm_equipo.module';
import { ViviendaModule } from './Viviendas/vivienda/vivienda.module';
import { ProyectoModule } from './Viviendas/proyecto/proyecto.module';
import { ModeloViviendaModule } from './Viviendas/modelo_vivienda/modelo_vivienda.module';
import { PmFrenteModule } from './Plan_Maestro/pm_frente/pm_frente.module';
import { PmFrentePartidaModule } from './Plan_Maestro/pm_frente_partida/pm_frente_partida.module';
import { PmProgramacionModule } from './Plan_Maestro/pm_programacion/pm_programacion.module';
import { ApiMalpoModule } from './api-malpo/api-malpo.module';
import { PlanSemanalModule } from './Plan_Semanal/plan_semanal/plan_semanal.module';
import { PlanSemanalPartidaModule } from './Plan_Semanal/plan_semanal_partida/plan_semanal_partida.module';
import { CausaNoCumplimientoModule } from './causa_no_cumplimiento/causa_no_cumplimiento.module';
import { RyMModule } from './RyM_api/RyM.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  
    PrismaModule,
    HitoModule,
    ProcesoConstructivoModule,
    PaqueteTrabajoModule,
    PartidaModule,
    UsuarioModule,
    EquipoTrabajoModule,
    EquipoCargoModule,
    PmEquipoModule,
    ViviendaModule,
    ProyectoModule,
    ModeloViviendaModule,
    PmFrenteModule,
    PmFrentePartidaModule,
    PmProgramacionModule,
    ApiMalpoModule, // Agrega el módulo de la api de Malpo
    PlanSemanalModule,
    PlanSemanalPartidaModule,
    CausaNoCumplimientoModule,
    RyMModule // api de prueba
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
