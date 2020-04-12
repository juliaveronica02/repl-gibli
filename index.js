const URL = 'https://ghibliapi.herokuapp.com/films'
axios.get(URL)
    // .then((res) => {
    //     return res.json();
    // })
    .then((res) => {
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
    //    const listFilm = document.getElementById("films")
       data = res.data;
    //   console.log(res);}
    

       res.data.forEach(item =>{
           const {title, director, release_date, rt_score}=item;
           const itemHTML =`
           <tr>
           <td>${title}</td>
           <td>${director}</td>
           <td>${release_date}</td>
           <td>${rt_score}</td>
           <tr>
           `;
        //    listFilm.innerHTML += itemHTML;

        document.getElementById('getData').addEventListener('click',function(event){
            document.getElementById('films').innerHTML += itemHTML;
        }
       )
    })
}).catch(err => {
        console.log(err);
        
    })