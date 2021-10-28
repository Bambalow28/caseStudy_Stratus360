
        //Global Variables that stores the latest comic number and current comic number.
        var latestComicNum;
        var currentComicNum;

        //This function gets loaded on webLoad and shows Latest Comic.
        async function getComicData() {

            //Url for the main comic API
            let comicUrl = 'https://xkcd.com/info.0.json';

            //Fetch Method to get result of comicUrl 
            let resp = await fetch(comicUrl).then((resp) => {

                //If Data is not okay then throw error
                if(!resp.ok) {
                    throw new Error(data.error);
                }

                //Otherwise, return data
                return resp.json();

            }).then(data => {
                //If Successful then get data needed from API

                //Comic Title
                document.getElementById("comicTitle").innerHTML = data.title;

                //Comic Image
                var img = document.createElement("img");
                img.src = data.img;
                var showImage = document.getElementById("comicImg");
                showImage.appendChild(img); 

                //Comic Published Date
                var month = data.month;
                var day = data.day;
                var year = data.year;
                latestComicNum = data.num;
                currentComicNum = latestComicNum;
                console.log('Comic Issue #: ' + currentComicNum)

                document.getElementById("dateShow").innerHTML = month + "/" + day  + "/" + year;

            }).catch(function(error) {
                //Catch Any Error
                console.log(error)
            })
        }

        //GETTING COMIC DATA FROM SEARCH
        async function getComicDataFromSearch() {

            //Get Search Value
            var comicInput = document.getElementById("comicSearchValue").value;

            //Parse String to Int
            currentComicNum = parseInt(comicInput);
            console.log('Comic Issue #:' + currentComicNum);

            //Add comicInput value into address bar for specific comic strip
            let specifiedComic = `https://xkcd.com/${comicInput}/info.0.json`;

            //Fetch Method to get result of specifiedComic 
            let resp = await fetch(specifiedComic).then((resp) => {

                //If Data is not okay then throw error
                if(!resp.ok) {
                    throw new Error(data.error);
                }

                //Otherwise, return data
                return resp.json();

            }).then(data => {
                //If Successful then get data needed from API

                //Comic Title
                document.getElementById("comicTitle").innerHTML = data.title;

                //Comic Image
                var img = document.createElement("img");
                img.src = data.img;
                var showImage = document.getElementById("comicImg");
                showImage.replaceChildren(img); 

                //Comic Published Date
                var month = data.month;
                var day = data.day;
                var year = data.year;

                document.getElementById("dateShow").innerHTML = month + "/" + day  + "/" + year;

            }).catch(function(error) {
                //Catch Any Error
                console.log(error)
            });
        }

        //PREVIOUS BUTTON
        async function previousComicBtn() {
            //Randomize a number from 1 to latest issue number
            var parseComicToInt = parseInt(currentComicNum);
            var prevComic = parseComicToInt - 1;
            currentComicNum = prevComic;
            console.log("Comic Issue #: " + prevComic);

            //This Variable is to show comic based of search
            let previousComic = `https://xkcd.com/${prevComic}/info.0.json`;

            //Fetch Method to get result of previousComic 
            let resp = await fetch(previousComic).then((resp) => {

                //If Data is not okay then throw error
                if(!resp.ok) {
                    throw new Error(data.error);
                }

                //Otherwise, return data
                return resp.json();

            }).then(data => {
                //If Successful then get data needed from API

                //Comic Title
                document.getElementById("comicTitle").innerHTML = data.title;

                //Comic Image
                var img = document.createElement("img");
                img.src = data.img;
                var showImage = document.getElementById("comicImg");
                showImage.replaceChildren(img); 

                //Comic Published Date
                var month = data.month;
                var day = data.day;
                var year = data.year;

                document.getElementById("dateShow").innerHTML = month + "/" + day  + "/" + year;

            }).catch(function(error) {
                //Catch Any Error
                console.log(error)
            });
        }

        //RANDOM BUTTON
        async function randomComicBtn() {
            //Randomize a number from 1 to latest issue number
            var randomNum = Math.floor((Math.random() * latestComicNum) + 1);
            currentComicNum = randomNum;
            console.log("Random Number is: " + currentComicNum);

            //This Variable is to show comic based of search
            let randomComic = `https://xkcd.com/${randomNum}/info.0.json`;

           //Fetch Method to get result of randomComic 
           let resp = await fetch(randomComic).then((resp) => {

            //If Data is not okay then throw error
            if(!resp.ok) {
                throw new Error(data.error);
            }

            //Otherwise, return data
            return resp.json();

        }).then(data => {
            //If Successful then get data needed from API

            //Comic Title
            document.getElementById("comicTitle").innerHTML = data.title;

            //Comic Image
            var img = document.createElement("img");
            img.src = data.img;
            var showImage = document.getElementById("comicImg");
            showImage.replaceChildren(img); 

            //Comic Published Date
            var month = data.month;
            var day = data.day;
            var year = data.year;

            document.getElementById("dateShow").innerHTML = month + "/" + day  + "/" + year;

        }).catch(function(error) {
            //Catch Any Error
            console.log(error)
        });
        }

        //NEXT BUTTON
        async function nextComicBtn() {
            //Get Valule of Current Comic Strip and parse into Int
            var parseComicToInt = parseInt(currentComicNum);

            if (currentComicNum == latestComicNum) {
                console.log('You are on the latest comic')
            } else {
                //Add one to the current comic strip number and store into the currentComicNum variable
            var nextComic = parseComicToInt + 1;
            currentComicNum = nextComic;
            console.log("Comic Issue #: " + nextComic);

            //This Variable will put the new comic strip value to the address bar
            let nextComicStrip = `https://xkcd.com/${nextComic}/info.0.json`;

            //Fetch Method to get result of nextComicStrip
            let resp = await fetch(nextComicStrip).then((resp) => {

                //If Data is not okay then throw error
                if(!resp.ok) {
                    throw new Error(data.error);
                }

                //Otherwise, return data
                return resp.json();

            }).then(data => {
                //If Successful then get data needed from API

                //Comic Title
                document.getElementById("comicTitle").innerHTML = data.title;

                //Comic Image
                var img = document.createElement("img");
                img.src = data.img;
                var showImage = document.getElementById("comicImg");
                showImage.replaceChildren(img); 

                //Comic Published Date
                var month = data.month;
                var day = data.day;
                var year = data.year;

                document.getElementById("dateShow").innerHTML = month + "/" + day  + "/" + year;

            }).catch(function(error) {
                //Catch Any Error
                console.log(error)
            });
            }
            
        }