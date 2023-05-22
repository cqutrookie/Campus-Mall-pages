<template>
  <div class="about-us">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing high-quality services to our clients. Our mission is to provide the best solutions for our clients and ensure their satisfaction. We have extensive experience and expertise in the industry and always stay up-to-date with the latest technology and trends.</p>
      <p>...</p>
    </main>

    <footer>
      <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style>
/* 设置页面样式 */
.about-us {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 设置页眉样式*/
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

header nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

header nav li {
  display: inline-block;
  margin-right: 20px;
}

header nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

header nav a:hover {
  text-decoration: underline;
}

/* 设置页面主要内容样式 */
main {
  flex: 1;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

main h1 {
  font-size: 36px;
  color: #333;
  margin-top: 50px;
}

main p {
  font-size: 18px;
  color: #666;
  line-height: 1.5;
}

/* 设置页脚样式 */
footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>