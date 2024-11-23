let inpBox = document.getElementById('inp')
let subButton = document.getElementById('btn')
let movieImg = document.getElementById('movies');

subButton.addEventListener('click' , ()=>{
    let inpValue = inpBox.value;

    fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q='${inpValue}'`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        let movies = data.description;
        console.log(movies)

        movies.map((movie)=>{
            // console.log(movie);
            let imgUrl = movie.photo_url[1];
            let title = movie.title;
            // console.log(imgUrl);

            let img = document.createElement('img');
            let t = document.createElement('h1');
            img.src = imgUrl;
            t.innerText = title;
            
            // console.log(img);
            // console.log(img); 
            movieImg.appendChild(t);
            movieImg.appendChild(img);
        })
    })
})
