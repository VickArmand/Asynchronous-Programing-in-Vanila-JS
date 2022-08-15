// A callback function is a function passed as a parameter to another function.
const posts= [
    {title:'Post One', body:'This is Post One'},
    {title:'Post Two', body:'This is Post Two'}
];
function getPosts(){
    setTimeout(function(){
        let output='';
        posts.forEach((post, index)=>{
          output+=`<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post, callback){
setTimeout(()=>{
    posts.push(post);
    callback();
},2000);
}

createPost({title:'Post Three',body:'This is Post Three'},getPosts);