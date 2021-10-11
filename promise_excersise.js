// let MAINAPP = ((nsp) => {
let postUrl = "http://jsonplaceholder.typicode.com/posts",
  commentsUrl = "http://jsonplaceholder.typicode.com/comments",
  todosUrl = "http://jsonplaceholder.typicode.com/todos";

fetch(postUrl, { method: "GET" })
  .then((resPost) => resPost.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(`Post error: ${error}`));

//   fetch(commentsUrl, { method: "GET" })
//     .then((resComment) => resComment.json())
//     .then((comments) => (nsp.comment = comments))
//     .catch((error) => console.log(`Cooments error: ${error}`));

//   fetch(todosUrl, { method: "GET" })
//     .then((resTodos) => resTodos.json())
//     .then((todos) => (nsp.todos = todos))
//     .catch((error) => console.log(`Todos error: ${error}`));

//   console.log(posts);

//   nsp.post = posts;
//   nsp.comment = comments;
//   nsp.todos = todos;

// return nsp;
// })();
