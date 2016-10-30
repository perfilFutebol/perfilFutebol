/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var bcrypt = require('bcryptjs');

 module.exports = {

 	attributes: {
 		//Atributos
 		nome: {
 			type: 'string',
 			required: true,
 			size: 100
 		},

 		login: {
 			type: 'string',
 			required: true,
 			unique: true,
 			size: 10
 		},

 		senha:{
 			type: 'string',
 			required: true,
 			size: 20
 		},

 		email:{
 			type: 'string',
 			required: true,
 			unique: true,
 			size: 100
 		},

 		//Associações
 		time: {
 			collection: 'time',
 			via: 'integrante'
 		},

 		habilidade: {
 			collection: 'habilidade',
 			via: 'usuario'
 		},

 		organizacao: {
 			collection: 'organizacao',
 			via: 'usuario'
 		}

 		//Funções
 		toJSON: function() {
 			var obj = this.toObject();
 			delete obj.senha;
 			return obj;
 		}
 	},

 	beforeCreate: function(usuario, cb){
 		bcrypt.genSalt(10, function(err, salt){
 			bcrypt.hash(usuario.senha, salt, function(err, hash){
 				if(err){
 					console.log(err);
 					cb(err);
 				} else {
 					usuario.senha = hash;
 					cb();
 				}
 			});
 		});
 	}
 };

