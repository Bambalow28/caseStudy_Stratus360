
        //This Variable stores the latest Comic Number
        var latestComicNum;

        //This function is asynchronous which will wait until the comic API has been loaded where it
        //will return the result of the API.
        async function getComicData() {
            //Variable for the Homepage which shows latest comic API
            let comicUrl = 'https://xkcd.com/info.0.json';

            //Using Fetch Method, Get the result when requesting comicURL
            let resp = await fetch(comicUrl, {
                method: "GET",
                mode: 'cors',
                credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
            });

            //If GET is success then read 
            let comicData = await resp.json().then(data => {
            document.getElementById("comicTitle").innerHTML = data.title;

            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.appendChild(img); 

            var month = data.month;
            var day = data.day;
            var year = data.year;
            latestComicNum = data.num;

            document.getElementById("datePublished").innerHTML = month + "/" + day  + "/" + year;
        });
        }

        async function getComicDataFromSearch() {
            //Get Search Value
            var comicInput = document.getElementById("comicSearchValue").value;

            //This Variable is to show comic based of search
            let randomComic = `https://xkcd.com/${comicInput}/info.0.json`;

            //Using Fetch Method, Get the result when requesting comicURL
            let resp = await fetch(randomComic);

            //If GET is success then read 
            let comicData = await resp.json().then(data => {
            document.getElementById("comicTitle").innerHTML = data.title;

            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.replaceChildren(img);

            var month = data.month;
            var day = data.day;
            var year = data.year;

            document.getElementById("datePublished").innerHTML = month + "/" + day  + "/" + year;
        });
        }

        //PREVIOUS BUTTON
        async function previousComicBtn() {
            //Randomize a number from 1 to latest issue number
            var parseComicToInt = parseInt(latestComicNum);
            var prevComic = parseComicToInt - 1;
            latestComicNum = prevComic;
            console.log("Previous Comic Number: " + prevComic);

            //This Variable is to show comic based of search
            let randomComic = `https://xkcd.com/${prevComic}/info.0.json`;

            //Using Fetch Method, Get the result when requesting comicURL
            let resp = await fetch(randomComic);

            //If GET is success then read 
            let comicData = await resp.json().then(data => {
            document.getElementById("comicTitle").innerHTML = data.title;

            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.replaceChildren(img);

            var month = data.month;
            var day = data.day;
            var year = data.year;

            document.getElementById("datePublished").innerHTML = month + "/" + day  + "/" + year;
        });
        }

        //RANDOM BUTTON
        async function randomComicBtn() {
            //Randomize a number from 1 to latest issue number
            var randomNum = Math.floor((Math.random() * latestComicNum) + 1);
            latestComicNum = randomNum;
            console.log("Random Number is: " + latestComicNum)

            //This Variable is to show comic based of search
            let randomComic = `https://xkcd.com/${randomNum}/info.0.json`;

            //Using Fetch Method, Get the result when requesting comicURL
            let resp = await fetch(randomComic);

            //If GET is success then read 
            let comicData = await resp.json().then(data => {
            document.getElementById("comicTitle").innerHTML = data.title;

            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.replaceChildren(img);

            var month = data.month;
            var day = data.day;
            var year = data.year;

            document.getElementById("datePublished").innerHTML = month + "/" + day  + "/" + year;
        });
        }

        //NEXT BUTTON
        async function nextComicBtn() {
            //Randomize a number from 1 to latest issue number
            var parseComicToInt = parseInt(latestComicNum);
            
            var nextComic = parseComicToInt + 1;
            latestComicNum = nextComic;
            console.log("Next Comic Number: " + nextComic);

            //This Variable is to show comic based of search
            let randomComic = `https://xkcd.com/${nextComic}/info.0.json`;

            //Using Fetch Method, Get the result when requesting comicURL
            let resp = await fetch(randomComic);

            //If GET is success then read 
            let comicData = await resp.json().then(data => {
            document.getElementById("comicTitle").innerHTML = data.title;

            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.replaceChildren(img);

            var month = data.month;
            var day = data.day;
            var year = data.year;

            document.getElementById("datePublished").innerHTML = month + "/" + day  + "/" + year;
        });
        }