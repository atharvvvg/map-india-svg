document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
            x=j.clientX
            y=j.clientY
            document.getElementById("name").style.top=y+10+"px"
            document.getElementById("name").style.left=x+10+"px"
        }
        e.style.fill="pink"
        document.getElementById("namem").innerText=e.id
        document.getElementById("name").style.opacity=1

    })
    e.addEventListener("mouseleave",function(){
        e.style.fill="#ececec"
        document.getElementById("name").style.opacity=0
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const stateSearchInput = document.getElementById('stateSearch');
    const stateList = document.getElementById('stateList');
    const allPaths = document.querySelectorAll('.allPaths');
  
    stateSearchInput.addEventListener('input', function () {
      const searchText = stateSearchInput.value.toLowerCase();
  
      stateList.innerHTML = '';
  
      allPaths.forEach(path => {
        const stateName = path.getAttribute('name').toLowerCase();
  
        if (stateName.includes(searchText)) {
          path.classList.add('highlight');
  
          const listItem = document.createElement('li');
          listItem.textContent = path.getAttribute('name');
          stateList.appendChild(listItem);
        } else {
          path.classList.remove('highlight');
        }
      });
    });
  
    document.body.addEventListener('click', function (event) {
      if (!event.target.closest('#stateSearch')) {
        stateSearchInput.value = ''; 
        stateList.innerHTML = '';  
        allPaths.forEach(path => path.classList.remove('highlight'));
      }
    });
  });
  