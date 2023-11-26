const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const clearAll=document.getElementById('clear');
const filter=document.getElementById('filter');
const formBtn = document.querySelector('form button');
let isEditMode = false;



function createIcon(classes)
{
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;
}

function createButton(classes)
{
    const button=document.createElement('button');
    button.className=classes;

    const icon=createIcon("fa-solid fa-xmark");
    button.append(icon);
    return button;
}

function createNewItem(item)
{
    const li=document.createElement('li');
    li.append(document.createTextNode(item));

    const button=createButton("remove-item btn-link text-red");

    li.appendChild(button);
    itemList.append(li);
}

function getStorageData()
{
    let storageData;
    if(localStorage.getItem('items') === null)
    {
        storageData=[];
    }
    else{
        storageData=JSON.parse(localStorage.getItem('items'));
    }
    return storageData;
}

function addItemToLocalStorage(item)
{
    let storageData=getStorageData();
    storageData.push(item);

    localStorage.setItem('items',JSON.stringify(storageData));
}

function checkIfItemExists(item)
{
    const storageData=localStorage.getItem('items');
    return storageData.includes(item);
}

function addItem(e){
    e.preventDefault();

    const item=itemInput.value;
    if(item==='')
    {
        alert('Please enter the Item');
        return;
    }

    if(isEditMode)
    {
        const li=itemList.querySelector('.edit-mode');
        removeItemFromLocalStorage(li.textContent);
        li.classList.remove('edit-mode');
        itemList.removeChild(li);
        isEditMode=false;
    }
    else{
        if(checkIfItemExists(item))
        {
            alert('Item alredy exsits!');
            return;
        }
    }

    createNewItem(item);

    addItemToLocalStorage(item);

    itemInput.value='';

    checkUI();
}

function removeItemFromLocalStorage(item)
{
    let storageData=getStorageData();

    storageData = storageData.filter((i) => i !== item);

    localStorage.setItem('items',JSON.stringify(storageData));
}

function setItemToEdit(item)
{
    isEditMode=true;

    itemInput.value=item.textContent;

    const lis=itemList.querySelectorAll('li');

    lis.forEach((i) => { i.classList.remove('edit-mode')});

    item.classList.add('edit-mode');

    formBtn.innerHTML=`<i class="fa-solid fa-plus"></i> Update Item`;
    formBtn.style.backgroundColor= '#228B22';
}

function removeItem(e)
{
    if(e.target.parentElement.classList.contains('remove-item'))
    {   
        if(confirm('Are you want to remove item?')){
            e.target.parentElement.parentElement.remove();
            removeItemFromLocalStorage(e.target.parentElement.parentElement.textContent);
            checkUI();
        }
    }
    else{
        setItemToEdit(e.target);
    }
}

function removeAll(e)
{
    while(itemList.firstChild)
    {
        itemList.removeChild(itemList.firstChild);
    }
    localStorage.clear('items');
    checkUI();
}

function filterItems(e)
{
    const lis=itemList.querySelectorAll('li');

    const filterText=e.target.value.toLowerCase();

    lis.forEach((item) => {
        const text=item.firstChild.textContent.toLowerCase();
        if(text.indexOf(filterText)!=-1)
        {
            item.style.display='flex';
        }
        else{
            item.style.display='none';
        }
    });
}

function displayItems()
{
    const storageData=getStorageData();

    storageData.forEach((item) => {
    createNewItem(item);
    });
    checkUI();
}

function checkUI()
{
    const items=itemList.querySelectorAll('li');
    if(items.length>0){
        filter.style.display='block';
        clearAll.style.display='block';
    }
    else{
        filter.style.display='none';
        clearAll.style.display='none';
    }
    formBtn.innerHTML='<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor='#333';
    isEditMode=false;
}


//Events
function init(){
    itemForm.addEventListener('submit',addItem);
    itemList.addEventListener('click',removeItem);
    clearAll.addEventListener('click',removeAll);
    filter.addEventListener('input',filterItems);
    document.addEventListener('DOMContentLoaded',displayItems);
}

init();

checkUI();