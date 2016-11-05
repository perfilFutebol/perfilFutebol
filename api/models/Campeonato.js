/**
 * Campeonato.js
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
 			size: 50
 		},

 		descricao: {
 			type: 'string',
 			size: 250
 		},

 		//Associações
 		evento: {
 			collection: 'evento',
 			via: 'campeonato'
 		},

 		esporte: {
 			model: 'esporte'
 		}
 	}
 };

