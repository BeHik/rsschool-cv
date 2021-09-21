function openNav() {
    document.getElementsByClassName("openbtn")[0].style.display = "none";
    document.getElementsByClassName("closebtn")[0].style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("mySidebar").style.width = "100%";
    //document.getElementById("mySidebar").style.height = "100%";
    //document.getElementsByClassName("bar-right")[0].style.marginLeft = "340px";
  }
  
  function closeNav() {
    document.getElementsByClassName("openbtn")[0].style.display = "block";
    document.getElementsByClassName("closebtn")[0].style.display = "none";
    document.body.style.removeProperty("overflow");
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("mySidebar").style.removeProperty(height);
    //document.getElementsByClassName("bar-right")[0].style.marginLeft = "0";
  }