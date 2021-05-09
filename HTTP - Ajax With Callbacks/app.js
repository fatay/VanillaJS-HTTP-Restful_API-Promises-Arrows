// For testing & Prototyping REST API
// We can use "Fake Online REST API Website"
// https://jsonplaceholder.typicode.com

// const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts) {
//   if (err) {
//     console.error(err);
//   }

//   console.log(posts);
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, posts) {
//   if (err) {
//     console.error(err);
//   }

//   console.log(posts);
// });

// Create Data
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.err(err);
//   } else {
//     console.log(post);
//   }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
// function(err, post) {
//   if(err) {
//     console.err(err);
//   } else {
//     console.log(post);
//   }
// });

//Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
// function(err, posts) {
//   if (err) {
//     console.error(err);
//   }

//   console.info("Post deleted successfully.");
// });