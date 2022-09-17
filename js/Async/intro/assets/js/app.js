let cl = console.log;

function print10(){
    cl(10);
}

// function print20(){
//     cl(20);
// }

function print30(){
    cl(30);
}

print10();
print20();
print30();

function print20(){
    setTimeout(() => {
        cl(20);
    }, 3000);
}

print10();
print20();
print30();

// 1. callback function

// function getData(){
//     setTimeout(() => {
//         cl('Data is downloaded');
//     }, 3000)
// }

function templating(){
    cl('Templating done on data')
}

// getData();
// templating();// Async behaviour will be observed

//to avoid async, we must call templating() inside getData()

function getData(){
    setTimeout(() => {
        cl('Data is downloaded');
        templating();
    }, 3000)
}

let blogsArray =[
    {title:'Blog one Title', content:'Blog one Content'},
    {title:'Blog Two Title', content:'Blog Two Content'}
]
let blogs = document.getElementById('blogs');

function createBlog(blogTitle, blogContent){
    setTimeout(() => {
        cl('created blog');
        let obj = {
            title: blogTitle,
            content: blogContent,
        };
        blogsArray.push(obj);
        readBlogs(blogsArray);
    }, 3000);
}

function readBlogs(arr){
    setTimeout(() => {
        cl('Read blog');
        let result ='';
        arr.forEach(blog => {
            result += `
            <div class="card">
                <div class="card-body">
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                </div>
            </div>
            `;
        });
        blogs.innerHTML = result;
    }, 2000);
}

createBlog('Blog Three Title', 'Blog Three content');
// readBlogs(blogsArray);