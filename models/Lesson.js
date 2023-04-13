const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    name: 
    {type:String,
     required:true   

    },

sujet :
{type: String,
    required: true},

video :
{type: String,
    required: true}, 

    test :
{type: String },   
})

module.exports = mongoose.model('lesson', userschema);