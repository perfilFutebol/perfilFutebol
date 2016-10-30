/**
 * Habilidade.js
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
 			size: 100
 		},

 		descricao: {
 			type: 'string',
 			size: 250
 		},

 		//Associações
 		usuario: {
 			collection: 'usuario',
 			via: 'habilidade'
 		},

 		esporte: {
 			model: 'esporte'
 		}
 	}
 };

