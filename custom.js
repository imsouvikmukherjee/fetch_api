const url = "https://reqres.in/api/users?page=2";
const request = new XMLHttpRequest();

request.open('GET', url);
request.onreadystatechange = function() {
    console.log(request.readyState);

    if (request.readyState === 4) {
        const data = JSON.parse(this.response);


        for (const key in data.data) {
          
         
            const parent = document.querySelector('#list');
           const rowname =  document.createElement('tr')
           parent.appendChild(rowname);


           const name =  document.createElement('td')
           name.innerHTML= data.data[key].first_name
           parent.appendChild(name);

           const lastname =  document.createElement('td')
           lastname.innerHTML= data.data[key].last_name
           parent.appendChild(lastname);


           const email =  document.createElement('td')
           email.innerHTML= data.data[key].email
           parent.appendChild(email);

           const avatar =  document.createElement('td')
           const img = document.createElement('img');
           img.setAttribute('src',data.data[key].avatar)
           avatar.appendChild(img)
        
           parent.appendChild(avatar);


     
     
            
        }






    }
}
request.send();