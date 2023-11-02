export const getImagen = async () => {
  try {
    const apiKey = "5uLZYT8YBf2Mp2cr0mFF7T41sg8VJMho";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "No se encontro la imagen";
  }
};

getImagen();
