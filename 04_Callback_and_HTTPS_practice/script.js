//Callback Function  Practice

itemList=document.getElementById('items');

const posts=[
    {title:'Item One', description:'This is First Item'},
    {title:'Item Two', description:'This is Second Item'},
];

//Without the use of Promise

// function createItem(post,cb)
// {
//     setTimeout(() => {
//         posts.push(post);
//         cb();
//     }, 2000);
// }
// 
// function displayItem(){
//     setTimeout(()=> {posts.forEach(function (post) {
//         const div=document.createElement('div');
//         div.innerHTML=`<strong>${post.title}</strong> - ${post.description}.`;
//         itemList.appendChild(div);
//     });
// },100);
// }
// 
// createItem({title:'Item Three',description:'This is Third Item'},displayItem);




//With the use of Promise

function createItem(post)
{
    return new Promise( (resolve,reject) => {
        posts.push();
        let error=false;
        if(!error)
            resolve();
        else{
            reject('Somthing went wrong');
        }
    });
}

function displayItem()
{
    posts.forEach( (post) => {
        const div=document.createElement('div');
        div.innerHTML=`<strong>${post.title}</strong> - ${post.description}.`;
        itemList.appendChild(div);
    });
}

function displayError(error)
{
    const div=document.createElement('div');
        div.innerHTML=`<strong>${error}</strong>.`;
        itemList.appendChild(div);
}


createItem({title:'Item Three',description:'This is Third Item'})
.then(displayItem)
.catch(displayError);


//HTTPS Request Practice
//Brad's Github Link -  https://api.github.com/users/bradtraversy

const xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/bradtraversy');

xhr.onreadystatechange = function(){

    if(this.readyState===4 && this.status==200)
    {
        const data=JSON.parse(this.responseText);

        const div=document.createElement('div');
        div.innerHTML=`<h1>${data.name}</h1>`;
        itemList.appendChild(div);
    }
}

xhr.send();
