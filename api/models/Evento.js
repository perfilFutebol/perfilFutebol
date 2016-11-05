/**
 * Evento.js
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

 		descricao: {
 			type: 'string',
 			size:250
 		},

 		data: {
 			type: 'datetime',
 			required: true
 		},

 		acesso: {
 			type: 'string',
 			enum: ['Publico', 'Privado'],
 			required: true
 		},

 		//Associações
 		local: {
 			model: 'local'
 		},

 		esporte: {
 			model: 'esporte'
 		},

 		campeonato: {
 			model: 'campeonato'
 		},

 		time: {
 			collection: 'time',
 			via: 'evento'
 		}
 	}
 };

