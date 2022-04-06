async function likedClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch('/api/posts/liked', {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
      
    if (response.ok) {
    document.location.reload();
    } else {
    alert(response.statusText);
    }
};
  
  
document.querySelector('#liked-btn').addEventListener('click', likedClickHandler);