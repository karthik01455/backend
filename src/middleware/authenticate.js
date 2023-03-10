const jwt = require('jsonwebtoken');
async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  //   console.log(authHeader);

  // console.log(token);
  //split the token from the bearer
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, 'SECRET', async(err, tokenHeader) => {
    if (err) return res.sendStatus(403);
    req.body.emailId = tokenHeader.emailId;
    next();
  });
}
module.exports={authenticateToken};