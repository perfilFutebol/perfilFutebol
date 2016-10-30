/**
 * Organizacao.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes: {
 		//Atributos
 		nome: {
 			type: 'string',
 			required: true,
 			size: 100
 		},

 		acesso: {
 			type: 'string',
 			enum: ['Publico', 'Privado'],
 			required: true
 		},

 		//Associações
 		usuario: {
 			collection: 'usuario',
 			via: 'organizacao'
 		},

 		time: {
 			collection: 'time',
 			via: 'organizacao'
 		}
 	}
 };

