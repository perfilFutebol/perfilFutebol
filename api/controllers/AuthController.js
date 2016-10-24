/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

 module.exports = {
	
	_config: {
		actions: false,
		shortcuts: false,
		rest: false
	},

	login: function(req, res) {

		passport.authenticate('local', function(err, usuario, info){
			if ((err) || (!usuario)) {
				return res.send({
					mensagem: info.message,
					usuario: usuario 
				});
			}
			req.logIn(usuario, function(err) {
				if (err) res.send(err);
				return res.send({
					mensagem: info.message,
					usuario: usuario
				});
			});
		})(req, res);
	},

	logout: function(req, res) {
		req.logout();
		res.send('Logout realizado com sucesso');
	}
 };

