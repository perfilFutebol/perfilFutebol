var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcryptjs');

passport.serializeUser(function(usuario, done) {
	done(null, usuario.id);
});

passport.deserializeUser(function(id, done) {
	Usuario.findOne({ id: id } , function (err, usuario) {
		done(err, usuario);
	});
});

passport.use(new LocalStrategy({
	usernameField: 'login',
	passwordField: 'senha'
},
function(login, senha, done) {

	Usuario.findOne({ login: login }, function (err, usuario) {
		if (err) { return done(err); }
		if (!usuario) {
			return done(null, false, { message: 'Login incorreto' });
		}

		bcrypt.compare(senha, usuario.senha, function (err, res) {
			if (!res)
				return done(null, false, {
					message: 'Senha inválida'
				});
			var returnUser = {
				login: usuario.login,
				createdAt: usuario.createdAt,
				id: usuario.id
			};
			return done(null, returnUser, {
				message: 'Login efetuado com sucesso'
			});
		});
	});
}
));
