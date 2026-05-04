import { FaHome } from "react-icons/fa";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { resume } from "react-dom/server";

function App() {
  // Food Items JSON Array of Object
  const foodItems = [
    {
      id: 1,
      name: 'Special Chicken Pizza 8"',
      category: "pizza",
    },
    {
      id: 2,
      name: 'Beef Pizza 6"',
      category: "pizza",
    },
    {
      id: 3,
      name: 'Special Chicken Pizza 12"',
      category: "pizza",
    },
    {
      id: 4,
      name: 'Special Chicken Pizza 10"',
      category: "pizza",
    },
    {
      id: 5,
      name: 'Special Chicken Pizza 6"',
      category: "pizza",
    },
    {
      id: 6,
      name: 'Chicken Pizza 12"',
      category: "pizza",
    },
    {
      id: 7,
      name: 'Chicken Pizza 8"',
      category: "pizza",
    },
    {
      id: 8,
      name: 'Chicken Pizza 10"',
      category: "pizza",
    },
    {
      id: 9,
      name: 'Chicken Pizza 6"',
      category: "pizza",
    },
    {
      id: 10,
      name: "Doughnut",
      category: "snacks",
    },
    {
      id: 11,
      name: "Faluda",
      category: "snacks",
    },
    {
      id: 12,
      name: "Cup Cake",
      category: "cake",
    },
    {
      id: 13,
      name: "Chicken Patties",
      category: "snacks",
    },
    {
      id: 14,
      name: "Chicken Cheese Roll",
      category: "snacks",
    },
    {
      id: 15,
      name: "Chicken Toast",
      category: "snacks",
    },
    {
      id: 16,
      name: "Beef Toast",
      category: "snacks",
    },
    {
      id: 17,
      name: "Crispy Chicken Fry",
      category: "snacks",
    },
    {
      id: 18,
      name: "Grill Chicken Burger",
      category: "snacks",
    },
    {
      id: 19,
      name: "Hot Dog",
      category: "snacks",
    },
    {
      id: 20,
      name: "Chicken Burger",
      category: "snacks",
    },
    {
      id: 21,
      name: "Eque Special Burger",
      category: "snacks",
    },
    {
      id: 22,
      name: "Beef Burger",
      category: "snacks",
    },
    {
      id: 23,
      name: "Cheese Sandwich",
      category: "snacks",
    },
    {
      id: 24,
      name: "Club Sandwich",
      category: "snacks",
    },
    {
      id: 25,
      name: "Chicken Sandwich",
      category: "snacks",
    },
    {
      id: 26,
      name: 'Beef Pizza 8"',
      category: "pizza",
    },
    {
      id: 27,
      name: 'Beef Pizza 10"',
      category: "pizza",
    },
    {
      id: 28,
      name: 'Beef Pizza 12"',
      category: "pizza",
    },
    {
      id: 29,
      name: 'Special Beef Pizza 6"',
      category: "pizza",
    },
    {
      id: 30,
      name: "Oven Pasta",
      category: "snacks",
    },
    {
      id: 31,
      name: "Mint Juice",
      category: "juice",
    },
    {
      id: 32,
      name: "Cheese Cake",
      category: "cake",
    },
    {
      id: 33,
      name: "Mango Juice",
      category: "juice",
    },
    {
      id: 34,
      name: "Red Velvet",
      category: "cake",
    },
    {
      id: 35,
      name: "Orange Juice",
      category: "juice",
    },
    {
      id: 36,
      name: "Chocolate Cake",
      category: "cake",
    },
  ];

  //Category JSON Array of Object
  const categories = [
    {
      id: 1,
      name: "Snacks",
    },
    {
      id: 2,
      name: "Pizza",
    },
    {
      id: 3,
      name: "Cake",
    },
    {
      id: 4,
      name: "Juice",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const filterFoodItems =
    selectedCategory === "all"
      ? foodItems
      : foodItems.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  //Fetch Data Using Browser Built-in fetch method:
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  //Fetch Data Using Axios:
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
     setPosts(res.data)
    };
    fetchPosts()
  }, []);

  return (
    <div className="App">
      {/* Category Item */}
      <div className="text-center mt-4 ">
        <div className="d-flex justify-content-center">
          <FaHome
            onClick={() => setSelectedCategory("all")}
            size={27}
            className="me-3"
          />
          {categories.map((category) => (
            <p
              onClick={() => setSelectedCategory(category.name)}
              key={category.id}
              className="me-2 px-2 py-1 rounded fw-bold bg-light"
            >
              {category.name.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <input
            className="form-control w-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      {/* Food Item */}
      <div className="container">
        <div className="row g-3 my-3">
          {filterFoodItems.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-primary p-3 rounded text-white text-center fs-6 fw-bold"
                style={{ height: "150px" }}
              >
                {item.name.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show User */}
      <div className="container">
        <h1 className="text-center">Showing User List by Fetching Data</h1>
        <div className="row g-3 my-3">
          {users.map((user) => (
            <div key={user.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-info p-3 rounded text-white text-center fs-6 fw-bold"
                style={{ height: "150px" }}
              >
                {user.name.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show Post */}
      <div className="container">
        <h1 className="text-center">
          Showing Post by Fetching Data with Axios
        </h1>
        <div className="row g-3 my-3">
          {posts.map((post) => (
            <div key={post.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-warning p-3 rounded text-white text-center fs-6 fw-bold"
                style={{ height: "150px" }}
              >
                {post.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
