const URL = "https://ghibliapi.herokuapp.com/films";

// let data = [];
axios
	.get(URL)
	.then((res) => {
		data = res.data;
		console.log(data);
		const listFilm = document.getElementById("films");
		for (let i = 1; i <= 10; i++) {
			let no = i;
			let title = data[i].title;
			let director = data[i].director;
			let release_date = data[i].release_date;
			let rt_score = data[i].rt_score;
			const itemHTML = `
                    <tr>
                    <td>${no}</td>
                    <td>${title}</td>
                    <td>${director}</td>
                    <td>${release_date}</td>
                    <td>${rt_score}</td>
                    <tr>
                `;
			listFilm.innerHTML += itemHTML;
            document
                    .getElementById("getData")
                    .addEventListener("click", function (event) {
                        document.getElementById("films").innerHTML += itemHTML;
                    });
        }
	})
	.catch((err) => {
		err;
	});

// code lama => ini code mu sebelumnya cobak bandingkan

// axios
// 	.get(URL)
// 	// .then((res) => {
// 	//     return res.json();
// 	// })
// 	.then((res) => {
// 		for (var i = 0; i <= 10; i++) {
// 			console.log(i);
// 		}
// 		//    const listFilm = document.getElementById("films")
// 		data = res.data;
// 		//   console.log(res);}

// 		res.data.forEach((item) => {
// 			const { title, director, release_date, rt_score } = item;
// 			const itemHTML = `
//            <tr>
//            <td>${title}</td>
//            <td>${director}</td>
//            <td>${release_date}</td>
//            <td>${rt_score}</td>
//            <tr>
//            `;
// 			//    listFilm.innerHTML += itemHTML;

// 			document
// 				.getElementById("getData")
// 				.addEventListener("click", function (event) {
// 					document.getElementById("films").innerHTML += itemHTML;
// 				});
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
