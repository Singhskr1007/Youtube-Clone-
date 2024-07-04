const menuIcon=document.querySelector('.menu-icon');
const sideBar=document.querySelector('.side-bar');
const container=document.querySelector('.container');

menuIcon.onclick=function()
{
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container')
}

function ytsubs()
{
    const subb=document.querySelector('.js-sub');
    if(subb.innerText === 'Subscribe')
    {
        subb.innerText='Subscribed';
        subb.classList.add('is-subscribed');
    }
    else {
        subb.innerText = 'Subscribe';
        subb.classList.remove('is-subscribed');
    }
}