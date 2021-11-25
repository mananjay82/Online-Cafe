function myFunction(){
    myvar = setTimeout(showpage, 3000);
}

function showpage(){
    document.getElementById('loader').style.display = "none";
    document.getElementById('mainContainer').style.display = "block";
    document.body.style.backgroundColor = "#f7f7f7";
}

function openNav(){
    document.getElementById('mySideNav').style.width = "250px"; 
}
function closeNav(){
    document.getElementById('mySideNav').style.width = '0px';
}