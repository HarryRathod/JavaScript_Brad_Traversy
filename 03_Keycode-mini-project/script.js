// const insert = document.getElementById("insert");

// window.addEventListener("keydown", (e) => {
//   insert.innerHTML = `
//     <div class="key">
//         ${e.key === " " ? "Space" : e.key}
//         <small>e.key</small>
//     </div>
//     <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//     </div>
//     <div class="key">
//         ${e.code}
//         <small>event.code</small>
//     </div>
//     `;
// });



// window.addEventListener("keydown", (e) => {
// 
//     insert.textContent='';
// 
//     const div1 = document.createElement("div");
//     div1.textContent = `${e.key === " " ? "Space" : e.key}`;
//     div1.className='key';
// 
//     const small1 = document.createElement("small");
//     small1.textContent = "e.key";
// 
//     div1.append(small1);
// 
//     insert.append(div1);
// 
//     const div2=document.createElement('div');
//     div2.textContent=`${e.keyCode}`;
//     div2.className='key';
// 
//     const small2=document.createElement('small');
//     small2.textContent='e.keyCode';
// 
//     div2.append(small2);
// 
//     insert.append(div2);
// 
//     const div3=document.createElement('div');
//     div3.textContent=`${e.code}`;
//     div3.className='key';
// 
//     const small3=document.createElement('small');
//     small3.textContent='e.code';
// 
//     div3.append(small3);
// 
//     insert.append(div3);
// });



window.addEventListener('keydown',(e)=>{

    const insert=document.getElementById('insert'); 

    insert.innerHTML='';

    const keyCodes={
        'e.key': e.key===' '? "Space" : e.key,
        'e.keyCode' : e.keyCode,
        'e.code' : e.code,
    };

    for(let key in keyCodes)
    {
        const div=document.createElement('div');
        div.className='key';
        
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
});
