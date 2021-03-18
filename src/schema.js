const graphql = require('graphql-tools');
const gql = require('graphql-tag');
const { resolvers } = require('./resolvers');


const typeDefs = gql`
  type Query {
    facturasmanuales: ResponseFacturas
    clientes: ResponseClientes
    stockyprecios:ResponseConsulta
    articulos(codigo:String):ResponseArticulos
  }

  # SCHEMA PARA CONSULTAR FACTURAS MANUALES
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

  # SCHEMA PARA CONSULTAR CLIENTES
  type ResponseClientes { 
    CountResultado: Int
    Siguiente: String
    TotalRegistros: Int
    Resultados: [ResultadosClientes] 
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
    InformacionAdicional: InformacionAdicional 
  }
  
  # SCHEMA PARA CONSULTAR ARTICULOS
  type ResponseArticulos {
    Siguiente: String
    TotalRegistros: Int
    CountResultado: Int
    Resultados: [ResultadosArticulos]
  }
  type ResultadosArticulos {
    Codigo: String
    Descripcion: String
    DescripcionAdicional: String
    Comportamiento: Int
    TipoAgrupamientoPublicaciones: Int
    Observacion: String
    NoPermiteDevoluciones: Boolean
    RestringirDescuentos: Boolean
    RequiereCCosto: Int
    NoPublicarEnEcommerce: Boolean
    SoloPromoYKit: Boolean
    Proveedor: String
    UnidadDeMedida: String
    Temporada: String
    Ano: Int
    Familia: String
    Material: String
    Linea: String
    Grupo: String
    CategoriaDeArticulo: String
    Clasificacion: String
    TipodeArticulo: String
    Imagen: String
    CondicionIvaVentas: Int
    PorcentajeIvaVentas: Int
    CondicionIvaCompras: Int
    PorcentajeIvaCompras: Int
    PorcentajeImpuestoInterno: Int
    Nomenclador: String
    Paletadecolores: String
    Curvadetalles: String
    NoComercializable: String
    Importado: Boolean
    ImprimeDespacho: Boolean
    DescEcommerce: String
    DescEcommerceHTML: String
    Peso: Int
    Largo: Int
    Ancho: Int
    Alto: Int
    InformacionAdicional: [InformacionAdicional]
    ParticipantesDetalle: [ParticipantesDetalle]
    Agrupublidetalle: [Agrupublidetalle]
  }
    type ParticipantesDetalle {
    Codigo: String
    Articulo: String
    ArticuloDetalle: String
    Color: String
    ColorDetalle: String
    Talle: String
    Cantidad: Int
    NroItem: Int
  }

  type Agrupublidetalle {
    Codigo: String
    Agrupamiento: String
    AgrupamientoDetalle: String
    NroItem: Int
  }

  # SCHEMAS DE USO GLOBAL
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

  
  # SCHEMA PARA CONSULTA DE STOCK Y PRECIOS
  type ResponseConsulta {
    CountResultado: Int,
    Siguiente: String,
    TotalRegistros: Int,
    Resultados: [ResultadosConsulta]
  }
  
  type ResultadosConsulta{
      Articulo: String,
      ArticuloDescripcion: String,
      ArticuloDescripcionAdicional: String,
      Color: String,
      ColorDescripcion: String,
      OrdenPorColor: String,
      Talle: String,
      TalleDescripcion: String,
      OrdenPorTalle: String,
      Precio: Int,
      Stock:Int,
      Comprometido:Int,
      PendienteEntrega: Int,
      Disponible: Int,
      Lista: String,
      Precios: [PreciosListas]
  }
  type PreciosListas{
      Lista: String,
      Precio: Int,    
  }
`;




module.exports = {
  schema: graphql.makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}