const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
const PORT = 3000;

// Middleware de sessão
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true
}));

// Middleware do Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração do Passport LocalStrategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Lógica de autenticação
    if (username === 'user' && password === 'pass') {
      return done(null, { id: 1, name: 'John Doe' });
    } else {
      return done(null, false, { message: 'Invalid credentials' });
    }
  }
));

// Serialização do usuário
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Desserialização do usuário
passport.deserializeUser((id, done) => {
  // Aqui você deve buscar o usuário no banco de dados
  // Aqui estamos simulando com um usuário fixo
  const user = { id: 1, name: 'John Doe' };
  done(null, user);
});

// Middleware de log
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

// Rota para login
app.post('/login', passport.authenticate('local', { 
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true 
}));

// Rota protegida (dashboard)
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to your dashboard!');
  } else {
    res.redirect('/login');
  }
});

// Rota de login (simplesmente uma página de login para o exemplo)
app.get('/login', (req, res) => {
  res.send('<form action="/login" method="post">\
              <div>\
                <label>Username:</label>\
                <input type="text" name="username"/>\
              </div>\
              <div>\
                <label>Password:</label>\
                <input type="password" name="password"/>\
              </div>\
              <div>\
                <input type="submit" value="Log In"/>\
              </div>\
            </form>');
});

// Tratamento de exceções
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
