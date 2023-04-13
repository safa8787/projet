const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    nom : 
    {type:String,
     required:true   

    },
    prenom: 
    {type:String,
     required:true   

    },

sujet :
{type: String,
    required: true},

 email :
{type: String,
    required: true},

    message :
{type: String },   
})

module.exports = mongoose.model('message', userschema);








