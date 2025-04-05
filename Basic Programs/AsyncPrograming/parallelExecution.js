// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/comments/1",
//   "https://jsonplaceholder.typicode.com/albums/1",
// ];

// // parallet execution with promise.all method using async await:

// async function promiseAllExecution(urls) {
//   try {
//     const response = await Promise.all(urls.map((url) => fetch(url)));
//     const data = await Promise.all(response.map((res) => res.json()));
//     // console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// promiseAllExecution(urls).then((data) => console.log(data));

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );
    const data = await response.json();
    console.log(`Temperature: ${data.main.temp}°C`);
  } catch (err) {
    console.error("Failed to fetch weather:", err);
  }
}
getWeather("London");
