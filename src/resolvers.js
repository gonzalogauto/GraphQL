const axios = require('axios').default;
module.exports ={
    resolvers:{ 
        Query:{
            facturasmanuales:async(obj,argument,context,info)=>{
                console.log(argument);
                try {
                    var head={
                        "IdCliente":process.env.ID_CLIENTE,
                        "Authorization":process.env.API_TOKEN
                    }
                    const resp = await axios.get(process.env.HOST_URI+"Factura", {
                        headers: head
                    });
                    //console.log(resp.data);
                    return resp.data;
                } catch (err) {
                    // Handle Error Here
                    //console.error(err);
                    return err;
                }
                
            },
            clientes:async(obj,argument,context,info)=>{
                console.log(argument);
                try {
                    var head={
                        "IdCliente":process.env.ID_CLIENTE,
                        "Authorization":process.env.API_TOKEN
                    }
                    const resp = await axios.get(process.env.HOST_URI+"Cliente", {
                        headers: head
                    });
                    //console.log(resp.data);
                    return resp.data;
                } catch (err) {
                    // Handle Error Here
                    //console.error(err);
                    return err;
                }
                
            },
            stockyprecios:async(obj,argument,context,info)=>{
                console.log(argument);
                try {
                    var head={
                        "IdCliente":process.env.ID_CLIENTE,
                        "Authorization":process.env.API_TOKEN
                    }
                    const resp = await axios.get(process.env.HOST_URI+"ConsultaStockYPrecios", {
                        headers: head
                    });
                    //console.log(resp.data);
                    return resp.data;
                } catch (err) {
                    // Handle Error Here
                    //console.error(err);
                    return err;
                }
                
            },
            articulos:async(obj,argument,context,info)=>{
                console.log(argument.codigo);
                try {
                    var head={
                        "IdCliente":process.env.ID_CLIENTE,
                        "Authorization":process.env.API_TOKEN
                    }
                    if (argument.codigo!=null) {
                        console.log("hay info")
                        const resp = await axios.get(process.env.HOST_URI+`Articulo?query=${argument.codigo}`, {
                            headers: head
                        });
                        return resp.data;
                    } else {
                        const resp = await axios.get(process.env.HOST_URI+"Articulo", {
                            headers: head
                        });
                        return resp.data;
                        
                    }
                    
                } catch (err) {
                    // Handle Error Here
                    //console.error(err);
                    return err;
                }
                
            }
        }
    }
}