/**
 * Endereco.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

  attributes: {
    //Atributos
    logradouro: {
      type: 'string',
      required: true,
      size: 150
    },

    numero: {
      type: 'string',
      required: true,
      size: 10
    },

    bairro: {
      type: 'string',
      required: true,
      size: 50
    },

    complemento:{
      type: 'string',
      size:100
    },

    cidade: {
      type: 'string',
      required: true,
      size: 50
    },

    estado: {
      type: 'string',
      enum: ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
      required: true,
      size: 2
    },

    cep: {
      type: 'integer',
      required: true
    },

    //Associações
    local: {
      model: 'local'
    }
  }
};

