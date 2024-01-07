import { Link } from "react-router-dom";
// For the purpose of testing fronend page , i have used the following constants not implemented fully
const Home = () => {
    
     const posts = [
      {
        "id": 1,
        "title": "Exploring the Beauty of Nature",
        "desc": "Join me on a journey through the mesmerizing landscapes and hidden gems of nature. Discover the wonders that Mother Earth has to offer.",
        "img": "https://storiesoutofthesuitcase.com/wp-content/uploads/2021/09/Post_Safety_Solo_Travel_07.jpg"
     }
     ,
     {
      "id": 2,
      "title": "Coding Adventures: Unraveling the World of Programming",
      "desc": "Embark on a coding adventure with me as we explore the latest technologies, programming languages, and unravel the mysteries of the digital world.",
      "img": "https://i5.walmartimages.com/asr/d079a112-1218-4d29-9c88-727c9365492e.20494f2426e36ef0a7b9c58f57bec1ca.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
   }
   ,
   {
    "id": 3,
    "title": "Culinary Delights: A Gastronomic Journey",
    "desc": "Savor the flavors and aromas of exquisite dishes from around the globe. Join me in a culinary adventure that will tantalize your taste buds and inspire your kitchen creations.",
    "img": "https://th.bing.com/th/id/OIP.KliL0XeK6Bvb3KZfiK640wAAAA?w=469&h=700&rs=1&pid=ImgDetMain"
 }
 
 ,
 {
  "id": 4,
  "title": "Mindful Living: Finding Balance in a Busy World",
  "desc": "Discover the art of mindful living and explore practices that bring peace, balance, and joy into everyday life. Let's embark on a journey towards a more mindful and fulfilling existence.",
  "img": "https://th.bing.com/th/id/R.6a6bbddb7275db29d37927a274dfd6d0?rik=Cv1NQijdsnLDog&riu=http%3a%2f%2fplaidfuzz.com%2fwp-content%2fuploads%2f2015%2f11%2fFinding-Balance-In-The-Busy.jpg&ehk=Tdsjeys%2bbEgBUswd14QVogvaoBvKEQnZQi4BsRlqUV4%3d&risl=&pid=ImgRaw&r=0"
}
,
     ];
  
    
  
  
    return (
      <div className="home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  