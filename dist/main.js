(()=>{content=document.querySelector("#content"),backgroundImage=document.createElement("img"),backgroundImage.classList.add("background-image"),backgroundImage.src="../src/deli.jpg",content.appendChild(backgroundImage),header=document.createElement("div"),header.classList.add("header"),headerText=document.createElement("h1"),headerText.textContent="Fuhgettaboutit",navBar=document.createElement("nav"),navLinks=["Home","Menu","Contact"];for(let e=0;e<navLinks.length;e++)btn=document.createElement("button"),btn.classList.add(`page-${e}`),btn.textContent=navLinks[e],navBar.appendChild(btn);header.appendChild(headerText),header.appendChild(navBar),content.appendChild(header)})();