async function editFormHandler(event) {
    event.preventDefault();

    const post_message = document.querySelector('input[name="post-message"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    }
    else {
        alert(response.statusText);
    }
  
};
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  