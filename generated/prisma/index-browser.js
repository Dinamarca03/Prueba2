
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
