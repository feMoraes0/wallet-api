const jwt = require('jsonwebtoken');

module.exports = {
  verify(request, response, next) {
    const { authorization }  = request.headers;

    if(!authorization)
      return response.status(401).send({'msg': 'Missed authorization parameter at header.'});
    
    const splited = authorization.split(' ');
    
    if(!splited.lenght === 2)
      return response.status(401).send({'msg': 'Invalid authorization parameter invalid.'});
    
    const [ baerer, token ] = splited;

    if(baerer !== "Baerer")
      return response.status(401).send({'msg': 'Token malformatted.'});

    
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if(error)
        return response.status(401).send({'msg': 'Invalid token.'});
      
      next();
    });
  }
}