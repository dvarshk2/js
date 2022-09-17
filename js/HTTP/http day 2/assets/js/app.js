let cl = console.log;

let apiURL ='https://jsonplaceholder.typicode.com/photos';
let photos = document.getElementById('photos');

//1. create instance of XMLHTTPRequest

let xhr = new XMLHttpRequest();
cl(xhr.readyState);

//2 call open method
//open method accepts 3 arguments >> 1. method name, 2. api link, 3.async value (byDefault true)
xhr.open('GET', apiURL, true);
cl(xhr.readyState);

//3 onload

xhr.onload = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
    cl(xhr.response);
    templating(JSON.parse(xhr.response));
    }else if(xhr.status === 404){
        // cl('URL not found');
        throw new Error('URL Not Found')
    }
}
// cl(xhr.readyState);


//4 send
xhr.send();
// cl(xhr.readyState);



function templating(arr){
    let result ='';
    arr.forEach(ele => {
        result += `
            <div class="col-sm-4">
				<div class="card albumCard mb-4">
					<div class="card-body">
						<figure>
							<img src="${ele.url}" alt="${ele.title}" class="img-fluid">
							<figcaption>
								<p>${ele.title}</p>
								<span>Album Id: ${ele.albumId}</span>
								<span>ID: ${ele.id}</span>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
        `
    });
    photos.innerHTML =  result;
}