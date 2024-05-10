import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  articles = [
   
   
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Ex-BJP Ally Dushyant Chautala Writes To Haryana Governor, Seeks Floor Test - NDTV",
      description:
        "Former Haryana Deputy Chief Minister and BJP ally Dushyant Chautala has written to the Governor, demanding a floor test in the state assembly.",
      url: "https://www.ndtv.com/india-news/ex-bjp-ally-dushyant-chautala-writes-to-haryana-governor-seeks-floor-test-5623367",
      urlToImage:
        "https://c.ndtvimg.com/2023-11/c0cvak3g_dushyant-chautala-1200_625x300_17_November_23.jpg",
      publishedAt: "2024-05-09T07:02:44Z",
      content:
        "Chandigarh: Former Haryana Deputy Chief Minister and BJP ally Dushyant Chautala has written to the Governor, demanding a floor test in the state assembly. Mr Chautala's move comes amidst a political … [+2651 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Indian student Rupesh Chandra Chintakindi missing in Chicago since May 2; what we know so far | Mint - Mint",
      description:
        "Indian student Rupesh Chandra Chintakindi has been missing in Chicago since May 2. His father last spoke to him via WhatsApp on May 2. The Consulate General of India in Chicago is working with the police and Indian diaspora to locate him.",
      url: "https://www.livemint.com/news/trends/rupesh-chandra-chintakindi-chicago-police-indian-student-missing-telangana-eam-jaishankar-11715233879420.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/09/1600x900/pexels-photo-346798_1714997091109_1715235789701.jpeg",
      publishedAt: "2024-05-09T06:51:48Z",
      content:
        "An Indian student from Telangana has been reported missing in Chicago since May 2. The 25-year-old Rupesh Chandra Chintakindi, studying for a master's degree at Concordia University, Wisconsin, has n… [+3288 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Rafah invasion: Biden stuns Netanyahu, stops bomb shipment to Israel - The Times of India",
      description:
        "The United States in a stunning move blocked the shipment of bombs to Israel citing unhappiness over Rafah invasion. President Biden has made it clear that if Israel go into Rafah, he will not be supplying weapons. The U.S. President also agreed that",
      url: "https://timesofindia.indiatimes.com/videos/international/rafah-invasion-biden-stuns-netanyahu-stops-bomb-shipment-to-israel/videoshow/109969448.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/msid-109969448,imgsize-105936.cms",
      publishedAt: "2024-05-09T05:47:07Z",
      content:
        "May 09, 2024, 11:17AM ISTSource: TOI.inThe United States in a stunning move blocked the shipment of bombs to Israel citing unhappiness over Rafah invasion. President Biden has made it clear that if I… [+169 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Caught On Camera: Lucknow Super Giants Owner Sanjiv Goenka Railing At KL Rahul After Loss - NDTV Sports",
      description:
        "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
      url: "https://news.google.com/rss/articles/CBMiigFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9sc2ctb3duZXItc2Fuaml2LWdvZW5rYXMtYW5pbWF0ZWQtY2hhdC13aXRoLWtsLXJhaHVsLWFmdGVyLTEwLXdpY2tldC10aHJhc2hpbmctYnktc3JoLXZpcmFsLXdhdGNoLTU2MjAzMTbSAZABaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaXBsLTIwMjQvbHNnLW93bmVyLXNhbmppdi1nb2Vua2FzLWFuaW1hdGVkLWNoYXQtd2l0aC1rbC1yYWh1bC1hZnRlci0xMC13aWNrZXQtdGhyYXNoaW5nLWJ5LXNyaC12aXJhbC13YXRjaC01NjIwMzE2L2FtcC8x",
      urlToImage:
        "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
      publishedAt: "2024-05-09T05:34:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI World Desk",
      title:
        "US aims to destabilise India during Lok Sabha elections 2024, claims Russia - The Times of India",
      description:
        'India News: On Wednesday, Russia said that the US attempted to "unbalance" Indian politics by making it "harder to have the General Parliamentary elections." Spea',
      url: "https://timesofindia.indiatimes.com/india/russia-claims-us-aims-to-destabilise-india-during-lok-sabha-elections-2024/articleshow/109968436.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-109968671,width-1070,height-580,imgsize-1102284,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-05-09T05:23:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Mahima Joshi",
      title:
        "'Pre-Meditated': Air India Express Lays Off Employees As Flight Disruptions Continue - News18",
      description:
        "Air India Express on Wednesday laid off some senior cabin crew members who 'reported sick' causing disruption in its flight operations",
      url: "https://www.news18.com/auto/pre-meditated-air-india-express-lays-off-employees-after-mass-sick-leave-caused-over-80-flights-cancellations-8883382.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/12/air-india-express-2023-12-44bde7f7605ca561c8f536e130e038c5-16x9.jpeg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-05-09T05:21:09Z",
      content:
        "Air India Express terminated on Wednesday the contract of some senior cabin crew members who reported sick a day ago, even as the carrier continued to reel from flight cancellations 24 hours since th… [+3383 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "TCS CEO K Krithivasan earned Rs 25.36 crore in FY24 - Moneycontrol",
      description:
        "Click here to track and Analyse your mutual fund investments, Stock Portfolios, Asset Allocation. Start tracking your investments in stocks, mutual fund, gold, bank deposits, property and get all your details about your investments in a single place with Mone…",
      url: "https://www.moneycontrol.com/technology/tcs-ceo-k-krithivasan-earned-rs-25-36-crore-in-fy24-article-12718091.html",
      urlToImage: null,
      publishedAt: "2024-05-09T05:20:39Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Alia Bhatt gets ready for MET Gala in BTS video, reveals her moodboard for the look. Watch - Hindustan Times",
      description:
        "Alia Bhatt was among the best dressed celebrities at the Met Gala on Monday. Here's what went on behind the scenes hours before her red carpet appearance. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/alia-bhatt-gets-ready-for-met-gala-bts-video-reveals-her-moodboard-for-the-look-watch-101715230384815.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/05/09/1600x900/alia_bhatt_Met_BTS_1715230481758_1715230481906.jpg",
      publishedAt: "2024-05-09T05:12:20Z",
      content:
        "It really does take a village not just to raise a kid, but also to get a Bollywood star ready for the MET Gala. Vogue magazine has shared a behind-the-scenes video of Alia Bhatt prepping for the MET … [+2331 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "'Remove police for 15 seconds': In Hyderabad BJP leader Navneet Rana issues open threat to Owaisi brothers | Mint - Mint",
      description:
        "Bharatiya Janata Party (BJP) MP Navneet Rana on Tuesday addressed a public meeting in Hyderabad in support of BJP candidate Madhavi Latha and said that that if you vote for AIMIM and Congress, it goes directly to Pakistan.",
      url: "https://www.livemint.com/politics/news/bjp-mp-navneet-rana-owaisi-brothers-akbaruddin-asaduddin-hyderabad-telangana-aimim-lok-sabha-election-madhavi-latha-11715228947626.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/09/1600x900/Rana_1715229451925_1715229457478.jpg",
      publishedAt: "2024-05-09T05:05:22Z",
      content:
        "Bharatiya Janata Party (BJP) MP Navneet Rana on Tuesday issued an open threat to the Owaisi brothers, Asaduddin Owaisi and Akbaruddin Owaisi, saying that if the police were removed from duty for just… [+3930 chars]",
    },
    {
      source: {
        id: null,
        name: "The Quint",
      },
      author: "Raajwrita Dutta",
      title:
        "Garena Free Fire MAX Redeem Codes for Today, 9 May 2024: How To Win Freebies - The Quint",
      description:
        "The Garena Free Fire MAX redeem codes for today, Thursday, 9 May 2024, are updated on reward.ff.garena.com. Read the steps here to claim the active codes and win freebies.",
      url: "https://www.thequint.com/tech-and-auto/tech-news/garena-free-fire-max-redeem-codes-today-know-how-to-win-freebies-and-rewards-latest-details",
      urlToImage:
        "https://images.thequint.com/thequint%2F2024-05%2F36dae464-7a0b-4e79-a741-2c9e2272eabe%2Fgarena.jpg?rect=0%2C0%2C1440%2C756",
      publishedAt: "2024-05-09T04:39:04Z",
      content:
        "Registered players can start using the new set of Garena Free Fire MAX redeem codes for today, Thursday, 9 May 2024. One should note that the active codes are present on the redemption website - rewa… [+648 chars]",
    },    
   
  ];

  constructor() {
    super();
    console.log("Hello I am Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
          
            {this.state.articles.map((element) => {
               return <div className="col-md-4"  key = {element.title}>
              <NewsItem
                title={element.title.slice(0, 45)}
                description={element.description .slice(0, 88)}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
               </div>
            })}
         
        </div>
      </div>
    );
  }
}

export default News;
