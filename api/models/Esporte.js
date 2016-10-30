/**
 * Esporte.js
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

 		//Associações
 		time: {
 			collection: 'time',
 			via: 'esporte'
 		},

 		habilidade: {
 			collection: 'habilidade',
 			via: 'esporte'
 		},

 		local: {
 			collection: 'local',
 			via: 'esporte'
 		},

 		usuario: {
 			collection: 'usuario',
 			via: 'esporte'
 		},

 		evento:{
 			collection: 'evento',
 			via: 'esporte'
 		},

 		campeonato: {
 			collection: 'campeonato',
 			via: 'esporte'
 		}
 	}
 };

