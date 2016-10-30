/**
 * Local.js
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

 		//Associações
 		esporte: {
 			collection: 'esporte',
 			via: 'local'
 		},

 		evento: {
 			collection: 'evento',
 			via: 'local'
 		},

 		endereco: {
 			model: 'endereco'
 		}
 	}
 };

