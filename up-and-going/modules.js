function user() {
  const username, password;

  function doLogin(user, pw){
    username = user;
    password = pw;

    // do the rest of the login work

  }

  const publicAPI = {
    login: doLogin
  };

  return publicAPI;

}

// create user module instance
 const fred = User();

 fred.login( "fred", "12Battery34!" );