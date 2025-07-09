
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HitoScalarFieldEnum = {
  id_Hito: 'id_Hito',
  nombre: 'nombre',
  descripcion: 'descripcion',
  esActivo: 'esActivo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaqueteTrabajoScalarFieldEnum = {
  id_PaqueteTrabajo: 'id_PaqueteTrabajo',
  nombre: 'nombre',
  descripcion: 'descripcion',
  esActivo: 'esActivo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PartidaScalarFieldEnum = {
  id_Partida: 'id_Partida',
  nombre: 'nombre',
  medida: 'medida',
  ritmo: 'ritmo',
  cuadrillasSugeridas: 'cuadrillasSugeridas',
  hitoId: 'hitoId',
  procesoConstrutivoId: 'procesoConstrutivoId',
  paqueteTrabajoId: 'paqueteTrabajoId'
};

exports.Prisma.ProcesoConstrutivoScalarFieldEnum = {
  id_ProcesoConstrutivo: 'id_ProcesoConstrutivo',
  nombre: 'nombre',
  descripcion: 'descripcion',
  jerarquia: 'jerarquia',
  esActivo: 'esActivo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlanMaestroScalarFieldEnum = {
  id_PlanMaestro: 'id_PlanMaestro',
  descripcion: 'descripcion',
  fechaInicio: 'fechaInicio',
  proyectoId: 'proyectoId'
};

exports.Prisma.PmFrenteScalarFieldEnum = {
  id_PmFrente: 'id_PmFrente',
  planMaestroId: 'planMaestroId',
  nombre: 'nombre'
};

exports.Prisma.PmFrentePartidaScalarFieldEnum = {
  id_PmFrentePartida: 'id_PmFrentePartida',
  partidaId: 'partidaId',
  cuadrilla: 'cuadrilla',
  frenteId: 'frenteId',
  orden: 'orden'
};

exports.Prisma.PmProgramacionScalarFieldEnum = {
  id_PmProgramacion: 'id_PmProgramacion',
  viviendaId: 'viviendaId',
  fechaInicio: 'fechaInicio',
  fechaFin: 'fechaFin',
  cantidad: 'cantidad',
  pmFrentePartidaId: 'pmFrentePartidaId'
};

exports.Prisma.EquipoCargoScalarFieldEnum = {
  id_EquipoCargo: 'id_EquipoCargo',
  nombre: 'nombre',
  esActivo: 'esActivo'
};

exports.Prisma.EquipoTrabajoScalarFieldEnum = {
  id_EquipoTrabajo: 'id_EquipoTrabajo',
  planMaestroId: 'planMaestroId'
};

exports.Prisma.PmEquipoScalarFieldEnum = {
  id_PmEquipo: 'id_PmEquipo',
  usuarioId: 'usuarioId',
  equipoTrabajoId: 'equipoTrabajoId',
  equipoCargoId: 'equipoCargoId'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id_Usuario: 'id_Usuario',
  nombre: 'nombre'
};

exports.Prisma.ModeloViviendaScalarFieldEnum = {
  id_ModeloVivienda: 'id_ModeloVivienda',
  nombre: 'nombre',
  activo: 'activo'
};

exports.Prisma.ProyectoScalarFieldEnum = {
  id_Proyecto: 'id_Proyecto',
  nombre: 'nombre',
  activo: 'activo'
};

exports.Prisma.ViviendaScalarFieldEnum = {
  id_Vivienda: 'id_Vivienda',
  numero: 'numero',
  id_Frente: 'id_Frente',
  modeloViviendaId: 'modeloViviendaId'
};

exports.Prisma.PlanSemanalScalarFieldEnum = {
  id_PlanSemanal: 'id_PlanSemanal',
  descripcion: 'descripcion',
  fechaInicio: 'fechaInicio',
  fechaTermino: 'fechaTermino',
  pmFrenteId: 'pmFrenteId'
};

exports.Prisma.PlanSemanalPartidaScalarFieldEnum = {
  id_PlanSemanalPartida: 'id_PlanSemanalPartida',
  partidaId: 'partidaId',
  viviendaId: 'viviendaId',
  revisionOk: 'revisionOk',
  id_UsuarioRevision: 'id_UsuarioRevision',
  fechaRevision: 'fechaRevision',
  causaNoCumplimientoId: 'causaNoCumplimientoId',
  observacion: 'observacion',
  responsableId: 'responsableId',
  cantidadProgramada: 'cantidadProgramada',
  cantidadEjecutada: 'cantidadEjecutada',
  id_Cuadrilla: 'id_Cuadrilla'
};

exports.Prisma.CausaNoCumplimientoScalarFieldEnum = {
  id_CausaNoCumplimiento: 'id_CausaNoCumplimiento',
  nombre: 'nombre',
  esActivo: 'esActivo'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Hito: 'Hito',
  PaqueteTrabajo: 'PaqueteTrabajo',
  Partida: 'Partida',
  ProcesoConstrutivo: 'ProcesoConstrutivo',
  PlanMaestro: 'PlanMaestro',
  PmFrente: 'PmFrente',
  PmFrentePartida: 'PmFrentePartida',
  PmProgramacion: 'PmProgramacion',
  EquipoCargo: 'EquipoCargo',
  EquipoTrabajo: 'EquipoTrabajo',
  PmEquipo: 'PmEquipo',
  Usuario: 'Usuario',
  ModeloVivienda: 'ModeloVivienda',
  Proyecto: 'Proyecto',
  Vivienda: 'Vivienda',
  PlanSemanal: 'PlanSemanal',
  PlanSemanalPartida: 'PlanSemanalPartida',
  CausaNoCumplimiento: 'CausaNoCumplimiento'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Javier Dinamarca\\Desktop\\Prueba - copia\\last-planner-master\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Javier Dinamarca\\Desktop\\Prueba - copia\\last-planner-master\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:1234@localhost:5432/lastplanner?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\n// a tener en cuenta id_nombre es la clave primaria y nombreId es una clave foranea en la tabla\n\ngenerator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../generated/prisma\"\n  binaryTargets = [\"debian-openssl-1.1.x\", \"debian-openssl-3.0.x\", \"native\", \"windows\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// preguntar sobre este Plan Maestro \n/**\n * model PlanMaestro1 {\n * id_PlanMaestro          Int      @id @default(autoincrement())\n * nombre      String   @db.VarChar(255)\n * descripcion String   @db.VarChar(255) @default(\"\")\n * fechaInicio DateTime @db.Timestamptz(6) @default(now())\n * fechaFin    DateTime @db.Timestamptz(6) @default(now())\n * id_Usuario Int\n * id_Proyecto Int\n * esActivo    Boolean  @default(true)\n * createdAt   DateTime @db.Timestamptz(6) @default(now()) // fecha de creacion\n * updatedAt   DateTime @db.Timestamptz(6) @default(now()) // fecha de actualizacion\n * planMaestroPartidaVivienda  PlanMaestroPartidaVivienda[]\n * }\n * model PlanMaestroPartidaVivienda {\n * id_PlanMaestroPartidaVivienda            Int      @id @default(autoincrement())\n * idPlanMaestro Int\n * idPartida    Int\n * idVivienda    Int\n * fechaIni      DateTime @db.Timestamptz(6) @default(now())\n * fechaFin      DateTime @db.Timestamptz(6) @default(now())\n * esActivo    Boolean  @default(true)\n * createdAt   DateTime @db.Timestamptz(6) @default(now())\n * updatedAt   DateTime @db.Timestamptz(6) @default(now())\n * planMaestro1 PlanMaestro1 @relation(fields: [idPlanMaestro], references: [id_PlanMaestro])\n * @@index([idPlanMaestro])\n * }\n * model Tarea {\n * id_Tarea Int @id @default(autoincrement())\n * nombre String @db.VarChar(255)\n * descripcion String @db.VarChar(255)\n * createdAt DateTime @default(now())\n * updatedAt DateTime @updatedAt\n * tareaEstado TareaEstado @relation(fields: [tareaEstadoId], references: [id_TareaEstado])\n * tareaEstadoId Int\n * tareaPrioridad TareaPrioridad @relation(fields: [tareaPrioridadId], references: [id_TareaPrioridad])\n * tareaPrioridadId Int\n * }\n * model TareaEstado {\n * id_TareaEstado Int @id @default(autoincrement())\n * nombre String @db.VarChar(255)\n * descripcion String @db.VarChar(255)\n * createdAt DateTime @default(now())\n * updatedAt DateTime @updatedAt\n * tareas Tarea[]\n * }\n * model TareaPrioridad {\n * id_TareaPrioridad Int @id @default(autoincrement())\n * nombre String @db.VarChar(255)\n * descripcion String @db.VarChar(255)\n * createdAt DateTime @default(now())\n * updatedAt DateTime @updatedAt\n * tareas Tarea[]\n * }\n * model Objetivo {\n * id_Objetivo Int @id @default(autoincrement())\n * nombre String @db.VarChar(255)\n * descripcion String @db.VarChar(255)\n * createdAt DateTime @default(now())\n * updatedAt DateTime @updatedAt\n * }\n */\n\n// PARTIDAS \n\nmodel Hito {\n  id_Hito     Int      @id @default(autoincrement())\n  nombre      String   @db.VarChar(255)\n  descripcion String   @db.VarChar(255)\n  esActivo    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  partida Partida[]\n}\n\nmodel PaqueteTrabajo {\n  id_PaqueteTrabajo Int      @id @default(autoincrement())\n  nombre            String   @db.VarChar(255)\n  descripcion       String   @db.VarChar(255)\n  esActivo          Boolean  @default(true)\n  createdAt         DateTime @default(now())\n  updatedAt         DateTime @updatedAt\n\n  partida Partida[]\n}\n\nmodel Partida {\n  id_Partida          Int    @id @default(autoincrement())\n  nombre              String @db.VarChar(255)\n  medida              String @db.VarChar(255)\n  ritmo               String @db.VarChar(255)\n  cuadrillasSugeridas Int\n\n  hito   Hito @relation(fields: [hitoId], references: [id_Hito])\n  hitoId Int\n\n  procesoConstrutivo   ProcesoConstrutivo @relation(fields: [procesoConstrutivoId], references: [id_ProcesoConstrutivo])\n  procesoConstrutivoId Int\n\n  paqueteTrabajo   PaqueteTrabajo @relation(fields: [paqueteTrabajoId], references: [id_PaqueteTrabajo])\n  paqueteTrabajoId Int\n\n  pmFrentePartidas   PmFrentePartida[]\n  planSemanalPartida PlanSemanalPartida[]\n}\n\nmodel ProcesoConstrutivo {\n  id_ProcesoConstrutivo Int      @id @default(autoincrement())\n  nombre                String   @db.VarChar(255)\n  descripcion           String   @db.VarChar(255)\n  jerarquia             Int\n  esActivo              Boolean  @default(true)\n  createdAt             DateTime @default(now())\n  updatedAt             DateTime @updatedAt\n\n  partida Partida[] // es para relacionar con la tabla partidas\n}\n\n// PLAN MAESTRO\n\nmodel PlanMaestro {\n  id_PlanMaestro Int    @id @default(autoincrement())\n  descripcion    String @db.VarChar(255)\n\n  fechaInicio DateTime @default(now()) @db.Timestamptz(6)\n\n  proyecto   Proyecto @relation(fields: [proyectoId], references: [id_Proyecto])\n  proyectoId Int\n\n  equipoTrabajos EquipoTrabajo[]\n  pmFrentes      PmFrente[]\n}\n\nmodel PmFrente {\n  id_PmFrente Int @id @default(autoincrement())\n\n  planMaestro   PlanMaestro @relation(fields: [planMaestroId], references: [id_PlanMaestro])\n  planMaestroId Int\n\n  nombre String @db.VarChar(255)\n\n  pmFrentePartidas PmFrentePartida[]\n  planSemanal      PlanSemanal[]\n}\n\nmodel PmFrentePartida {\n  id_PmFrentePartida Int @id @default(autoincrement())\n\n  partida   Partida @relation(fields: [partidaId], references: [id_Partida])\n  partidaId Int\n\n  cuadrilla Int\n\n  frente   PmFrente @relation(fields: [frenteId], references: [id_PmFrente])\n  frenteId Int\n\n  orden Int\n\n  pmProgramacion PmProgramacion[]\n}\n\nmodel PmProgramacion {\n  id_PmProgramacion Int @id @default(autoincrement())\n\n  vivienda   Vivienda @relation(fields: [viviendaId], references: [id_Vivienda])\n  viviendaId Int\n\n  fechaInicio DateTime @default(now()) @db.Timestamptz(6)\n  fechaFin    DateTime @default(now()) @db.Timestamptz(6)\n  cantidad    Int\n\n  pmFrentePartida   PmFrentePartida @relation(fields: [pmFrentePartidaId], references: [id_PmFrentePartida])\n  pmFrentePartidaId Int\n}\n\n// USUARIOS\n\nmodel EquipoCargo {\n  id_EquipoCargo Int     @id @default(autoincrement())\n  nombre         String  @db.VarChar(255)\n  esActivo       Boolean @default(true)\n\n  pmEquipo PmEquipo[]\n}\n\nmodel EquipoTrabajo {\n  id_EquipoTrabajo Int @id @default(autoincrement())\n\n  PlanMaestro   PlanMaestro @relation(fields: [planMaestroId], references: [id_PlanMaestro])\n  planMaestroId Int // clave foranea de plan maestro\n\n  pmEquipo PmEquipo[]\n}\n\nmodel PmEquipo {\n  id_PmEquipo Int @id @default(autoincrement()) // si la borro deja de funcionar \n\n  usuario   Usuario @relation(fields: [usuarioId], references: [id_Usuario])\n  usuarioId Int\n\n  equipoTrabajo   EquipoTrabajo @relation(fields: [equipoTrabajoId], references: [id_EquipoTrabajo])\n  equipoTrabajoId Int\n\n  equipoCargo   EquipoCargo @relation(fields: [equipoCargoId], references: [id_EquipoCargo])\n  equipoCargoId Int\n}\n\nmodel Usuario {\n  id_Usuario Int    @id @default(autoincrement())\n  nombre     String @db.VarChar(255)\n\n  pmEquipo PmEquipo[]\n\n  planSemanalPartida PlanSemanalPartida[]\n}\n\n// VIVIENDA\n\nmodel ModeloVivienda {\n  id_ModeloVivienda Int     @id @default(autoincrement())\n  nombre            String  @db.VarChar(255)\n  activo            Boolean @default(true)\n\n  vivienda Vivienda[]\n}\n\nmodel Proyecto {\n  id_Proyecto Int     @id @default(autoincrement())\n  nombre      String  @db.VarChar(255)\n  activo      Boolean @default(true)\n\n  planMaestro PlanMaestro[]\n}\n\nmodel Vivienda {\n  id_Vivienda Int    @id @default(autoincrement())\n  numero      String @db.VarChar(255)\n\n  id_Frente String // id frente o lado  puede ser lado a o b  \n\n  modeloVivienda   ModeloVivienda @relation(fields: [modeloViviendaId], references: [id_ModeloVivienda])\n  modeloViviendaId Int\n\n  planSemanalPartida PlanSemanalPartida[]\n  pmProgramacion     PmProgramacion[]\n}\n\n// PLAN SEMANAL\n\nmodel PlanSemanal {\n  id_PlanSemanal Int      @id @default(autoincrement())\n  descripcion    String   @db.VarChar(255)\n  fechaInicio    DateTime @default(now()) @db.Timestamptz(6)\n  fechaTermino   DateTime @default(now()) @db.Timestamptz(6)\n\n  pmFrente   PmFrente @relation(fields: [pmFrenteId], references: [id_PmFrente])\n  pmFrenteId Int\n}\n\nmodel PlanSemanalPartida {\n  id_PlanSemanalPartida Int @id @default(autoincrement())\n\n  partida   Partida @relation(fields: [partidaId], references: [id_Partida])\n  partidaId Int\n\n  vivienda   Vivienda @relation(fields: [viviendaId], references: [id_Vivienda])\n  viviendaId Int\n\n  revisionOk         Boolean  @default(false)\n  id_UsuarioRevision Int\n  fechaRevision      DateTime @default(now()) @db.Timestamptz(6)\n\n  causaNoCumplimiento   CausaNoCumplimiento @relation(fields: [causaNoCumplimientoId], references: [id_CausaNoCumplimiento])\n  causaNoCumplimientoId Int\n\n  observacion String @db.VarChar(255)\n\n  responsable   Usuario @relation(fields: [responsableId], references: [id_Usuario])\n  responsableId Int // clave foranea de usuario \n\n  cantidadProgramada Decimal @db.Decimal(10, 2) // Ejemplo: 99999999.99\n  cantidadEjecutada  Decimal @db.Decimal(10, 2) // Ejemplo: 99999999.99\n\n  id_Cuadrilla Int // posible clave foranea\n}\n\n// CAUSA NO CUMPLIMIENTO\n\nmodel CausaNoCumplimiento {\n  id_CausaNoCumplimiento Int     @id @default(autoincrement())\n  nombre                 String  @db.VarChar(255)\n  esActivo               Boolean @default(true)\n\n  planSemanalPartida PlanSemanalPartida[]\n}\n",
  "inlineSchemaHash": "5a1925759f00357e4c6c5ec2651da818e3cbe41f8b8dd8143f390d87ad8b4d3e",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Hito\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Hito\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"esActivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"partida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partida\",\"nativeType\":null,\"relationName\":\"HitoToPartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaqueteTrabajo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PaqueteTrabajo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"esActivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"partida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partida\",\"nativeType\":null,\"relationName\":\"PaqueteTrabajoToPartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Partida\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Partida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ritmo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuadrillasSugeridas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hito\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Hito\",\"nativeType\":null,\"relationName\":\"HitoToPartida\",\"relationFromFields\":[\"hitoId\"],\"relationToFields\":[\"id_Hito\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hitoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"procesoConstrutivo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcesoConstrutivo\",\"nativeType\":null,\"relationName\":\"PartidaToProcesoConstrutivo\",\"relationFromFields\":[\"procesoConstrutivoId\"],\"relationToFields\":[\"id_ProcesoConstrutivo\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"procesoConstrutivoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paqueteTrabajo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaqueteTrabajo\",\"nativeType\":null,\"relationName\":\"PaqueteTrabajoToPartida\",\"relationFromFields\":[\"paqueteTrabajoId\"],\"relationToFields\":[\"id_PaqueteTrabajo\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paqueteTrabajoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrentePartidas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrentePartida\",\"nativeType\":null,\"relationName\":\"PartidaToPmFrentePartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planSemanalPartida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanSemanalPartida\",\"nativeType\":null,\"relationName\":\"PartidaToPlanSemanalPartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProcesoConstrutivo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_ProcesoConstrutivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jerarquia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"esActivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"partida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partida\",\"nativeType\":null,\"relationName\":\"PartidaToProcesoConstrutivo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PlanMaestro\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PlanMaestro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaInicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proyecto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Proyecto\",\"nativeType\":null,\"relationName\":\"PlanMaestroToProyecto\",\"relationFromFields\":[\"proyectoId\"],\"relationToFields\":[\"id_Proyecto\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proyectoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipoTrabajos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EquipoTrabajo\",\"nativeType\":null,\"relationName\":\"EquipoTrabajoToPlanMaestro\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrentes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrente\",\"nativeType\":null,\"relationName\":\"PlanMaestroToPmFrente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PmFrente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PmFrente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planMaestro\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanMaestro\",\"nativeType\":null,\"relationName\":\"PlanMaestroToPmFrente\",\"relationFromFields\":[\"planMaestroId\"],\"relationToFields\":[\"id_PlanMaestro\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planMaestroId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrentePartidas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrentePartida\",\"nativeType\":null,\"relationName\":\"PmFrenteToPmFrentePartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planSemanal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanSemanal\",\"nativeType\":null,\"relationName\":\"PlanSemanalToPmFrente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PmFrentePartida\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PmFrentePartida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partida\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partida\",\"nativeType\":null,\"relationName\":\"PartidaToPmFrentePartida\",\"relationFromFields\":[\"partidaId\"],\"relationToFields\":[\"id_Partida\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partidaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuadrilla\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrente\",\"nativeType\":null,\"relationName\":\"PmFrenteToPmFrentePartida\",\"relationFromFields\":[\"frenteId\"],\"relationToFields\":[\"id_PmFrente\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frenteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmProgramacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmProgramacion\",\"nativeType\":null,\"relationName\":\"PmFrentePartidaToPmProgramacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PmProgramacion\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PmProgramacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vivienda\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vivienda\",\"nativeType\":null,\"relationName\":\"PmProgramacionToVivienda\",\"relationFromFields\":[\"viviendaId\"],\"relationToFields\":[\"id_Vivienda\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viviendaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaInicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaFin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrentePartida\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrentePartida\",\"nativeType\":null,\"relationName\":\"PmFrentePartidaToPmProgramacion\",\"relationFromFields\":[\"pmFrentePartidaId\"],\"relationToFields\":[\"id_PmFrentePartida\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrentePartidaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EquipoCargo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_EquipoCargo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"esActivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmEquipo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmEquipo\",\"nativeType\":null,\"relationName\":\"EquipoCargoToPmEquipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EquipoTrabajo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_EquipoTrabajo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanMaestro\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanMaestro\",\"nativeType\":null,\"relationName\":\"EquipoTrabajoToPlanMaestro\",\"relationFromFields\":[\"planMaestroId\"],\"relationToFields\":[\"id_PlanMaestro\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planMaestroId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmEquipo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmEquipo\",\"nativeType\":null,\"relationName\":\"EquipoTrabajoToPmEquipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PmEquipo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PmEquipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"PmEquipoToUsuario\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"id_Usuario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipoTrabajo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EquipoTrabajo\",\"nativeType\":null,\"relationName\":\"EquipoTrabajoToPmEquipo\",\"relationFromFields\":[\"equipoTrabajoId\"],\"relationToFields\":[\"id_EquipoTrabajo\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipoTrabajoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipoCargo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EquipoCargo\",\"nativeType\":null,\"relationName\":\"EquipoCargoToPmEquipo\",\"relationFromFields\":[\"equipoCargoId\"],\"relationToFields\":[\"id_EquipoCargo\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipoCargoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmEquipo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmEquipo\",\"nativeType\":null,\"relationName\":\"PmEquipoToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planSemanalPartida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanSemanalPartida\",\"nativeType\":null,\"relationName\":\"PlanSemanalPartidaToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModeloVivienda\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_ModeloVivienda\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vivienda\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vivienda\",\"nativeType\":null,\"relationName\":\"ModeloViviendaToVivienda\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Proyecto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Proyecto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planMaestro\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanMaestro\",\"nativeType\":null,\"relationName\":\"PlanMaestroToProyecto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vivienda\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_Vivienda\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Frente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modeloVivienda\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModeloVivienda\",\"nativeType\":null,\"relationName\":\"ModeloViviendaToVivienda\",\"relationFromFields\":[\"modeloViviendaId\"],\"relationToFields\":[\"id_ModeloVivienda\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modeloViviendaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planSemanalPartida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanSemanalPartida\",\"nativeType\":null,\"relationName\":\"PlanSemanalPartidaToVivienda\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmProgramacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmProgramacion\",\"nativeType\":null,\"relationName\":\"PmProgramacionToVivienda\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PlanSemanal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PlanSemanal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaInicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaTermino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PmFrente\",\"nativeType\":null,\"relationName\":\"PlanSemanalToPmFrente\",\"relationFromFields\":[\"pmFrenteId\"],\"relationToFields\":[\"id_PmFrente\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pmFrenteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PlanSemanalPartida\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_PlanSemanalPartida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partida\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Partida\",\"nativeType\":null,\"relationName\":\"PartidaToPlanSemanalPartida\",\"relationFromFields\":[\"partidaId\"],\"relationToFields\":[\"id_Partida\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partidaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vivienda\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vivienda\",\"nativeType\":null,\"relationName\":\"PlanSemanalPartidaToVivienda\",\"relationFromFields\":[\"viviendaId\"],\"relationToFields\":[\"id_Vivienda\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viviendaId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revisionOk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_UsuarioRevision\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaRevision\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamptz\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"causaNoCumplimiento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CausaNoCumplimiento\",\"nativeType\":null,\"relationName\":\"CausaNoCumplimientoToPlanSemanalPartida\",\"relationFromFields\":[\"causaNoCumplimientoId\"],\"relationToFields\":[\"id_CausaNoCumplimiento\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"causaNoCumplimientoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsable\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"nativeType\":null,\"relationName\":\"PlanSemanalPartidaToUsuario\",\"relationFromFields\":[\"responsableId\"],\"relationToFields\":[\"id_Usuario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidadProgramada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidadEjecutada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Cuadrilla\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CausaNoCumplimiento\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_CausaNoCumplimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"esActivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planSemanalPartida\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlanSemanalPartida\",\"nativeType\":null,\"relationName\":\"CausaNoCumplimientoToPlanSemanalPartida\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

