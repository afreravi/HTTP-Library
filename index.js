// Import stylesheets
import './style.css';

function easyHttp (){
    this.http = new XMLHttpRequest
}

//Make an HTTP GET Request
    easyHttp.prototype.get = function(url, callback){
        this.http.open('GET', url, true);

        let self = this;
        this.http.onload = function(){
            if(self.http.status === 200){
                callback(null, self.http.responseText);
            } else {
                callback ('Error ' + self.http.status)
            }
        }

        this.http.send();
    }

//Make an HTTP POST Request
easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function (){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT Request
easyHttp.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function (){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE Request
easyHttp.prototype.delete = function(url, callback){
        this.http.open('DELETE', url, true);

        let self = this;
        this.http.onload = function(){
            if(self.http.status === 200){
                callback(null, "Deleted Successfully");
            } else {
                callback ('Error ' + self.http.status)
            }
        }

        this.http.send();
}

const http = new easyHttp;

//Get posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err){
        console.log(err)
    } else{
        console.log(posts)
    }
})

//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(posts)
//     }
// })

//Create Data
const data ={
    title: 'Custom Post',
    body: 'A new custom post'
}

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post);
//     }
// })

//Update Request
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post);
//     }
// })

// Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(response)
//     }
// })