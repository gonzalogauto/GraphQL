const { comentarios } = require('../data.json');

module.exports ={
    resolvers:{ 
        Query:{
            comentarios: () => comentarios,
            totalcomentarios:()=>comentarios.length,
            comentarios_buscar:(args)=>{
                let usuario=args.usuario;
                return comentarios.filter(element=>element.usuario==usuario);
            }
        }
    }
}