<h2><span class="fa fa-sign-in"></span>&nbsp; Sign In</h2>
<form name="signin" action="/signin" method="post">
  <div class="row">
    <div class="six columns">
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="Enter your username..."/>
      <label for="password">Password</label>
      <input type="password" name="password" required="true" placeholder="Enter your password..."/>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Login"/>
  </div>
</form><a href="/signup">Sign up for an account.</a><br/>


// extends layout
//
// block content
//     h2
//         span.fa.fa-sign-in
//         &nbsp; Sign In
//
//     if errorMessage
//         p.errorMessage= errorMessage
//
//     form(name="signin", action="/signin", method="post")
//         div.row
//             div.six.columns
//                     label(for="username") Username
//                     input(type="text", name="username", placeholder="Enter your username...")
//
//                     label(for="password") Password
//                     input(type="password", name="password", required="true", placeholder="Enter your password...")
//
//         div.row
//             input(type="submit", value="Login")
//
//     a(href="/signup") Sign up for an account.
//     br
