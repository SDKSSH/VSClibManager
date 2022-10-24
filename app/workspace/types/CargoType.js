// @ts-nocheck
const LibItem = require("../../tree/LibItem");
const TypeModel = require("../TypeModel");
const axios = require("axios").default;

module.exports = class CargoType extends TypeModel{
    searchExtension(startwith){
        axios.get("https://crates.io/api/v1/crates?page=1&per_page=20&sort=downloads&q="+startwith).then((response)=>{
            return response.data.crates.map((lib) => new LibItem({
                created : lib.created_at,
                downloads : lib.downloads,
                description : lib.description,
                name : lib.name,
                version: lib.max_version,
                documentation: lib.documentation
            }, "https://raw.githubusercontent.com/robertohuertasm/vscode-icons/master/icons/file_type_rust.svg", "RUST"))
        }).catch((error)=>{
            return []
        })
    }

}