/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

 	attributes: {
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
 		}
 	}
 };

