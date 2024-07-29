
export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: '45176970-913b8fa7a45cf3c015efbbbdd',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch images');
    });
}
