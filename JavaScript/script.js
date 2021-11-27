function myFunction() {
    myvar = setTimeout(showpage, 3000);
    if (window.location.href == "file:///C:/Users/ASUS/Desktop/Online%20Cafe/categoryresult.html") {
        menuListResult();
    }
}

function showpage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('mainContainer').style.display = "block";
    document.body.style.backgroundColor = "#f7f7f7";
}

function openNav() {
    document.getElementById('mySideNav').style.width = "250px";
}
function closeNav() {
    document.getElementById('mySideNav').style.width = '0px';
}

var categoryResult;
function categorySearch() {
    var categoryVal = document.getElementById('menuList').value;
    if (categoryVal == 'selectcategory') {
        alert('Please Select any Category');
        return false;
    }
    else {
        sessionStorage.setItem(categoryResult, categoryVal);
        alert(categoryVal + ": - Available");
        return true;
    }
}
function menuListResult() {
    categoryResult = sessionStorage.getItem(categoryResult);
    // console.log(sessionStorage.getItem(categoryResult));
    switch (categoryResult) {
        case 'starters':
            document.getElementById('menuLists').innerHTML = '<div class="menuItemBox"><img src="Images/babycornchilli.png" alt=""><h1>Baby Corn Chilli </h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div>';
            break;
        case 'appetizers':
            break;
        case 'chinese':
            document.getElementById('menuLists').innerHTML = '<div class="menuItemBox"><img src="Images/vegnoodles.jpg" alt=""><h1>Veg Noodles</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/hakkanoodles.jpg" alt=""><h1>Veg Hakka Noodles</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/chickennoodles.webp" alt=""><h1>Chicken Noodles</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/vegmanchurian.png" alt=""><h1>Veg Manchurian</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/honeychillipotato.jpg" alt=""><h1>Honey Chilli Potato</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/babycornchilli.png" alt=""><h1>Baby Corn Chilli </h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div>';
            break;
        case 'breads':
            break;
        case 'northindian':
            break;
        case 'southindian':
            document.getElementById('menuLists').innerHTML = '<div class="menuItemBox"><img src="Images/masaladosa.jfif" alt=""><h1>Masala Dosa</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div><div class="menuItemBox"><img src="Images/idlisambhar.jpg" alt=""><h1>Idli Sambhar</h1><button class="menuCategoriesBtn" type="submit" onclick="window.location.href=`order.html`;">Order Here</button></div>';
            break;
        case 'drinks':
            break;
        case 'desserts':
            break;
        default:
            document.getElementById('empty').innerHTML = "Please Select any Category From Home Page";
            document.getElementById('menuLists').style.display = 'none';
            document.getElementById('menuContainer').style.display = 'none';
            document.body.style.display = 'block';
            break;
    }
    sessionStorage.clear();
}