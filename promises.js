const posts = [{ title: "Post one", body: "This is post one" }, { title: "Post two", body: "This is post two" }]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000)
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve()
      } else {
        reject('Error:  something went wrong')
      }
    }, 2000)
  })
}

// createPosts({ title: "Post three", body: "This is post three" }).then(() => {
//   getPosts()
// });

// async await
async function init() {
  await createPosts({ title: "Post three", body: "This is post three" });

  getPosts();
}

init();

// Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 12;
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, 'Goodbye')
// )

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

