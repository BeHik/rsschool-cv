
const navItems = document.querySelectorAll('.asidenav>ul>li>div>a')

window.addEventListener('load', hideOnClickMenu, true);
window.addEventListener('resize', hideOnClickMenu, true);

function hideOnClickMenu(event) {
  if (event.currentTarget.innerWidth < 1024) {
    navItems.forEach(link => link.addEventListener('click', closeNav));}
    else {
      navItems.forEach(link=>{if(link.hasAttribute('click')) link.removeEventListener('click');})
      document.getElementById("mySidebar").style.removeProperty("width");
    }
}

function openNav() {
    document.getElementsByClassName("openbtn")[0].style.display = "none";
    document.getElementsByClassName("closebtn")[0].style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("mySidebar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementsByClassName("openbtn")[0].style.display = "block";
    document.getElementsByClassName("closebtn")[0].style.display = "none";
    document.body.style.removeProperty("overflow");
    document.getElementById("mySidebar").style.width = "0";
  }