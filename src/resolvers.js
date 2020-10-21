const axios = require('axios').default;
module.exports ={
    resolvers:{ 
        Query:{
            facturasmanuales:async(argument)=>{
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
            clientes:async(argument)=>{
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
                
            }
        }
    }
}