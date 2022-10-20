const TypeModel = require("../TypeModel");
const axios = require("axios").default;

module.exports = class CargoType extends TypeModel{
    searchExtension(startwith){
        axios.get("https://crates.io/api/v1/crates?page=1&per_page=10&sort=downloads&q="+startwith).then((response)=>{
                        
        }).catch((error)=>{
            return []
        })
    }

}