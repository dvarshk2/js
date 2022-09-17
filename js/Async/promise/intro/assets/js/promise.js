let cl = console.log;

// promise >> it is javaScript object, it gives any value in future
// it is used to handle async operations of javaScript
// pending
// fullfilled
// rejected

// settled >> either fullfilled or rejected

// object methods
// 1. literal let obj = {key:value,}
// 2. let obj = new Object();
// 3. constructor method
 

// let promise1 = new Promise((resolve, reject) => {
//     let error = false;
//     if(!error){
//         resolve('Data is loaded!!');
//     }else{
//         reject("Something went wrong!!!!!!");
//     }

//     let error = true;
//     if(erroe){
//         reject("Something went wrong!!!!!");
//     }else{
//         resolve('Data is loaded!!!');
//     }
// })

//to get value from promise , we must consume it

// promise1
//     .then((response)=> cl(response));
//     .catch((err)=> cl(err));



    let blogsArray =[
        {title:'Blog one Title', content:'Blog one Content'},
        {title:'Blog Two Title', content:'Blog Two Content'}
    ]
    let blogs = document.getElementById('blogs');
    
    function createBlog(blogTitle, blogContent){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                let obj = {
                    title: blogTitle,
                    content: blogContent,
                };
                blogsArray.push(obj);
                cl(blogsArray);
                let error = false;
                if(!error){
                    resolve(blogsArray)
                }else{
                    reject("Something went wrong!!")
                }
                cl('created blog');
            }, 3000);
        })
        return promise;
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
        }, 3000);
    }
    
    createBlog('Blog Three Title', 'Blog Three content')
        .then(res => readBlogs(res))
        .catch((err) => cl(err))
