<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Restaurants from "./routes/Restaurants.svelte";
  import Order from "./routes/Order.svelte";

  export let url = "";
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  }

</script>

<Router url="{url}">
  <header>
    <div class="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol class="center-column">
        <li>
          <Link to="/restaurants">Browse restaurants</Link>
        </li>
        <li>
          <Link to="/order/{getRandomInt(8)}">Surprise Me</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </nav>
  </header>
  <div>
    <Route path="restaurants" component="{Restaurants}" />
    <Route path="about" component="{About}" />
    <Route path="order" component="{Order}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>


<style>

  header {
    width: 100%;
    background-color: #e79652;
  }

  header .center-column {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  header > div {
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 80px;
  }

  header h1 {
    margin: 0;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 38px;
  }

  header nav {
    height: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background-color: #f1d736;
    font-size: 20px;
  }

  header nav ol {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  @media (min-width: 600px) {
    header nav ol {
      display: block;
    }
    header nav li {
      margin-right: 30px;
    }
  }

  header nav li {
    display: inline;
  }

  header nav a {
    color: inherit;
  }
</style>
