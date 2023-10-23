const getGif = async() => {
  try{
    const apiKey = '5uLZYT8YBf2Mp2cr0mFF7T41sg8VJMho';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    console.log(data);
    
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  }catch(error){
    console.error(error);
  }
};

getGif();
