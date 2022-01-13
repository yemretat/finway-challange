# REST API with Node using Typescript

This is a REST API developed using node and express with typescript

![Adsız (900 x 380 px) (2)](https://user-images.githubusercontent.com/66990093/149416621-e2916020-2a08-4307-b5d6-dd6edb587788.png)

## Technical Details About the Project

The main focus will be to create a maintainable and highly testable architecture.
<br>
Following are the features of this project:

* **This backend is written in Typescript**: The type safety at build time and having intellisense for it in the IDE like vscode.

* **Dependecy Injection principle is applied**: The injector class injects dependency through the constructor of the class.It achieves that by decoupling the usage of an object from its creation.

* **Open Closed principle is applied**: Our classes ise open for extension, but closed for modification using abstract concrete approach

* **Separation of concern principle is applied**: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.

* **Centralised Error handling is done**: I have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.

* **Redis is used to provide caching**: Redis works by mapping keys to values with a sort of predefined data model

* **Async execution is adopted**: I have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.

* **Docker compose has been configured**: I have created the Dockerfile to provide the easy deployability without any setup and configurations.

* **Unit test is favored**: The tests have been written to test the functions and routes without the need of the database server.

* **Logging Mechanism is provided** : The critical errors are logged through winston

## How to build and run this project
#### Install using Docker Compose [**Recommended Method**] 
  * Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
  * Execute `docker-compose up` in terminal from the repo directory.
  * You will be able to access the api from http://localhost:5000
  * To run the tests execute `npm test`.
#### Install Without Docker [**2nd Method**]
  * Install Redis on your local.
  * Execute `npm install`
  * Execute `npm start` and You will be able to access the API from http://localhost:5000
  * To run the tests execute `npm test`.

 ## Directory Traversal for toDeepLink API call
 `/src → server.ts → /controller/ServerIndex.ts -> /controller/index.ts -> /controller/news.ts -> /middlewares/redis/RedisMiddleware -> middlewares/query/NewsQueryMiddleware -> /controller/Concrete/NewsController `
 

 ## API Examples
* /
    * Method and Headers
    ```
    Get /api/?language=en&sortBy=publishedAt&totalDisplayed=10&q=tesla
    Host: localhost:5000
    Content-Type: application/json
    ```

    * Response Body: 200
    ```json
    {
    "status": "ok",
    "totalResults": 7871,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Rachel Koning Beals",
            "title": "Living With Climate Change: Scorched Western states and a hurricane in New York: Earth experienced one of its hottest years on record in 2021",
            "description": "A series of reports from NOAA, NASA and others point to a trend of global rising average temperatures, including the hottest U.S. summer since 1936.",
            "url": "https://www.marketwatch.com/story/scorched-western-states-and-a-hurricane-in-new-york-earth-experienced-one-of-its-hottest-years-on-record-in-2021-11642107438",
            "urlToImage": "https://images.mktw.net/im-384421/social",
            "publishedAt": "2022-01-13T20:57:00Z",
            "content": "Last years lofty average global temperatures, which choked the Western U.S. in drought and fire and kicked up a deadly hurricane in New York, may not have been a record-beater. But more worrisome for… [+5844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Steve Denning, Senior Contributor, \n Steve Denning, Senior Contributor\n https://www.forbes.com/sites/stevedenning/",
            "title": "HBR’s Four Different Takes On ‘Digital Disruption’",
            "description": "Key aspects of the emerging digital economy",
            "url": "https://www.forbes.com/sites/stevedenning/2022/01/13/hbrs-four-different-takes-on-digital-disruption/",
            "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61e08d5f473693fb563806f6%2F0x0.jpg",
            "publishedAt": "2022-01-13T20:49:42Z",
            "content": "Digital disruption\r\ngetty\r\nThe January/February 2022 issue of Harvard Business Review (HBR) addresses the important issue of digital disruption with no less than four articles. The series argues that… [+7096 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ValueWalk"
            },
            "author": "Cristian Bustos",
            "title": "Ford Reaches Company Market Cap Record Of $100 Billion",
            "description": "As the stock of Ford Motor Company (NYSE:F) increased by 4.6% to $25.59, the highest in almost 20 years, the automaker reached a market capitalization of $100 billion for the first time ever. Electric vehicle plans have been key to achieving such a milestone.…",
            "url": "https://www.valuewalk.com/fords-market-cap-peaks-to-a-company-record-100-billion/",
            "urlToImage": "https://valuewalk.b-cdn.net/wp-content/uploads/2019/11/Screenshot-233.png",
            "publishedAt": "2022-01-13T20:47:12Z",
            "content": "As the stock of Ford Motor Company (NYSE:F) increased by 4.6% to $25.59, the highest in almost 20 years, the automaker reached a market capitalization of $100 billion for the first time ever. Electri… [+2380 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Notebookcheck.net"
            },
            "author": "Enrico Frahn",
            "title": "Tesla Model 3 and Model Y owners complain about heat pump failures at low temperatures",
            "description": "Even though Tesla claimed that it has solved this already known issue of the Model 3 and Model Y with a software update, owners are still reporting heat pump failures which could potentially lead to life-threatening situations when driving these electric cars…",
            "url": "https://www.notebookcheck.net/Tesla-Model-3-and-Model-Y-owners-complain-about-heat-pump-failures-at-low-temperatures.592612.0.html",
            "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Tesla_Model_3_Winter_Heizung_Defekt.jpg",
            "publishedAt": "2022-01-13T20:41:00Z",
            "content": "Working For Notebookcheck\r\nAre you a techie who knows how to write? Then join our Team! English native speakers welcome! \r\nNews Writer (AUS/NZL based) - Details here\r\nDuring the winter time, the heat… [+1633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ines Ferré",
            "title": "Bill banning stock trading by lawmakers is 'fair for everyday people': Retail trader",
            "description": "Momentum is growing to restrict stock trading by members of Congress and their spouses, as retail traders have been tracking politician trades and their...",
            "url": "https://finance.yahoo.com/news/bill-banning-stock-trading-by-lawmakers-is-fair-for-everyday-people-retail-trader-203820104.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UyAZy2e.Sbc3OoV.y.GUNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-01/816cbee0-74ab-11ec-9aef-586aca6880c9",
            "publishedAt": "2022-01-13T20:38:20Z",
            "content": "Momentum is growing to restrict stock trading by members of Congress and their spouses, as retail traders have been tracking politician trades and their performance. \r\nOn Wednesday, Senators Jon Osso… [+4139 chars]"
        }
    ]
    }
    ```
    * Response Body: 400
    ```json
    {
    "success": "false",
    "message": "Please give the correct sort param"
    }
    ```
    * Response Body: 400
    ```json
    {
    "success": "false",
    "message": "Please give the correct language param"
    }
    ```
