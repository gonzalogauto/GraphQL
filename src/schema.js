const graphql = require('graphql-tools');
const gql = require('graphql-tag');
const { resolvers } = require('./resolvers');


const typeDefs = gql`
  type Query {
    facturasmanuales: ResponseFacturas
    clientes: ResponseClientes
  }

  type ResponseFacturas {
    CountResultado: Int,
    Siguiente: Int,
    TotalRegistros: Int,
    Resultados: [ResultadosFact]
  }
  
  type ResultadosFact {
    InformacionAdicional: InformacionAdicional,
    AjustesPorRedondeos: Int,
    ArticulosSeniadosDetalle: [String],
    Cliente: String,
    ClienteDescripcion: String,
    Codigo: String,
    CompAfec: [String],
    Cotizacion: Int,
    Descuento: Int,
    Email: String,
    EntregaPosterior: Int,
    FacturaDetalle: [FacturaDetalle],
    Fecha: String,
    Impuestos: Float,
    ImpuestosComprobante: [String],
    ImpuestosDetalle: [ImpuestosDetalle],
    KitsDetalle: [String],
    Letra: String,
    ListaDePrecios: String,
    MonedaComprobante: String,
    MontoDescuento2Visual: Int,
    MontoDescuento3: Int,
    Numero: Int,
    Obs: String,
    PorcentajeDescuento: Int,
    PromocionesDetalle: [String],
    PuntoDeVenta: Int,
    RecargoMonto: Int,
    RecargoMonto1Visual: Int,
    RecargoMonto2: Int,
    RecargoPorcentaje: Int,
    Total: Int,
    TotalImpuestos: Int,
    ValoresDetalle: [ValoresDetalle],
    Vendedor: String,
    VueltoVirtual: Int
  }

  type ResultadosClientes { 
    Apellido: String
    CUIT: String
    Calle: String
    CategCli: String
    Clasificacion: String
    CodNombreFantasia: String
    Codigo: String
    CodigoPostal: String
    CodigoSiprib: String
    CondicionDePago: String
    CuitPais: String
    Departamento: String
    DescuentoPreferente: String
    EMail: String
    EstadoCivil: String
    ExcluidoPercepcionGanancias: Boolean
    ExcluidoPercepcionIVA: Boolean
    Fax: String
    FechaNacimiento: String
    Hijos: Int
    Imagen: String
    InactivoFW: Boolean
    ListaDePrecio: String
    Localidad: String
    Movil: String
    Nombre: String
    NroDocumento: String
    NroIIBB: Int
    Numero: Int
    Observacion: String
    PaginaWeb: String
    Pais: String
    PercepcionGanancias: String
    PercepcionIva: String
    Piso: String
    PrimerNombre: String
    Provincia: String
    RUT: String
    RecomendadoPor: String
    SegundoNombre: String
    Sexo: String
    SituacionFiscal: Int
    SituacionGanancias: Int
    SujetoVinculado: Boolean
    Telefono: String
    TipoCli: String
    TipoConvenio: Int
    TipoDocumento: String
    TopeCtaCte: Int
    Transportista: String
    Vendedor: String
    VigenciaHastaGan: String
    VigenciaHastaIva: String
    idglobal: String
    Percepciones: [String ]
    OtrasDirecciones: [String ]
    Contacto: [String ]
    InformacionAdicional: InformacionAdicional }
  
  type ResponseClientes { 
    CountResultado: Int
    Siguiente: String
    TotalRegistros: Int
    Resultados: [ResultadosClientes] 
  }

  type InformacionAdicional {
    BaseDeDatosAltaFW: String,
    BaseDeDatosModificacionFW: String,
    EstadoTransferencia: String,
    FechaAltaFW: String,
    FechaExpo: String,
    FechaImpo: String,
    FechaModificacionFW: String,
    FechaTransferencia: String,
    HoraAltaFW: String,
    HoraExpo: String,
    HoraImpo: String,
    HoraModificacionFW: String,
    SerieAltaFW: String,
    SerieModificacionFW: String,
    UsuarioAltaFW: String,
    UsuarioModificacionFW: String,
    VersionAltaFW: String,
    VersionModificacionFW: String,
    ZADSFW: String
  }

  type ImpuestosDetalle {
      Codigo: String,
      MontoDeImpuestoInterno: Int,
      MontoDeImpuestoInternoSinDescuento: Int,
      MontoDeIva: Int,
      MontoDeIvaSinDescuento: Int,
      MontoNoGravado: Int,
      MontoNoGravadoSinDescuento: Int,
      NroItem: Int,
      PorcentajeDeIva: Int
  }
  type FacturaDetalle {
        Articulo: String,
        Codigo: String,
        ArticuloDetalle: String,
        Color: String,
        ColorDetalle: String,
        Talle: String,
        Cantidad: Int,
        Precio: Int,
        Descuento: Int,
        MontoDescuento: Int,
        Monto: Int,
        NroItem: Int
  }

  type ValoresDetalle {
    Codigo: String,
    Valor: String,
    ValorDetalle: String,
    Fecha: String,
    NumeroInterno:Int,
    Monto: Int,
    PorcentajeDesRec: Int,
    MontoDesRec: Int,
    Recibido: Int,
    NroItem: Int
  }
`;




module.exports ={
    schema:graphql.makeExecutableSchema({
        typeDefs,
        resolvers,
    })
}