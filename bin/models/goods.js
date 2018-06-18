var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new Schema({
    "goodsInfo":[{
        "productId"   : String,
        "productName" : String,
        "SalePrice"   : Number,
        "checked"     : String,
        "productNum"  : Number,
        "productImage": String
    }]
});
module.exports = mongoose.model('good',nameSchema);