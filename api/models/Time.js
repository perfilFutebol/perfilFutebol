/**
 * Time.js
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
 			unique: true,
 			size:50
 		},

 		integrante: {
 			collection: 'usuario',
 			via: 'time'
 		},

 		//Associações
 		esporte: {
 			model: 'esporte'
 		}
 	}
 };

