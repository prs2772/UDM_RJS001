const apiKey = '5uLZYT8YBf2Mp2cr0mFF7T41sg8VJMho';
const requestHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

requestHttp
.then( resp => resp.json())
.then(({data}) => {
  const { url } = data.images.original;
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
})
.catch(console.warn);
