// Import stylesheets
import './style.css';

// Constructor
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

//Make an HTTP PUT Request

//Make an HTTP DELETE Request


//instantiate object
const http = new easyHttp;

//Get posts
http.get('https://jsonplaceholder.typicode.com/posts1', function(err, posts){
    if(err){
        console.log(err)
    } else{
        console.log(posts)
    }
})

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h4>Custom HTTP Library (Ajax With
Callbacks) - ES5</h4>`;