<h2>Submit a new link post</h2>
<form name="newpost" action="/r/undefined/submit" method="post">
  <label for="title">Title</label>
  <input type="text" name="title" required="true" placeholder="Title..."/><br/>
  <label for="category">Category</label>
  <input type="text" name="category" required="true"/><br/> <!-- Change to Dropdown with fixed selections -->
  <input type="submit" value="Submit" class="button button-primary"/>
</form>


// extends layout
// block content
//     if textPost
//         h2 Submit a new text post
//     else
//         h2 Submit a new link post
//     form(name="newpost", action= "/r/" + category + "/submit", method="post")
//         label(for="title") Title
//         input(type="text", name="title", required="true", placeholder="Title...")
//         br
//         if textPost
//             textarea(type="text", name="selftext", placeholder="Say something..." id="self-text-box")
//         else
//             label(for="link") Link
//             input(type="text", name="link", required="true", placeholder="URL...")
//         label(for="category") category
//         input(type="text", name="category", required="true", value=category)
//         br
//         input.button.button-primary(type="submit", value="Submit")
