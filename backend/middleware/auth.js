import jwt from "jsonwebtoken";

const secret = 'board';

const auth = async (req, res, next) => {
  try {
     // get the token from req
    const token = req.headers.authorization.split(" ")[1];
    // check if its google auth token or custom
    const isCustomAuth = token.length < 500;
  // decoded data will have the user data and id
    let decodedData;
 // if token is custom auth token
    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
  // store id
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;