
<h2>Sign Up</h2>
<p>Password goes through bcrypt before going into the database.</p>
<form name="signup" action="/signup" method="post">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="Enter your username..." class="u-full-width"/>
      <label for="password">Password</label>
      <input type="password" name="password" required="true" placeholder="Enter your password..." class="u-full-width"/>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Register"/>
  </div>
</form>
<p></p>

// extends layout
//
// block content
//     h2 Sign Up
//     if errorMessage
//         p.errorMessage
//             span= errorMessage
//
//     p Password goes through bcrypt before going into the database.
//
//     form(name="signup", action="/signup", method="post")
//         div.row
//             div.six.columns
//                     label(for="username") Username
//                     input.u-full-width(type="text", name="username", placeholder="Enter your username...")
//
//                     label(for="password") Password
//                     input.u-full-width(type="password", name="password", required="true", placeholder="Enter your password...")
//
//         div.row
//             input(type="submit", value="Register")
//
//     p= errorMessage
