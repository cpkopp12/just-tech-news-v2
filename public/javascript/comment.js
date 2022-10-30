//DECLARATIONS: comment form element for listener --------------------------
const commentFormEl = document.querySelector('.comment-form');

//EVENT HANDLER ---------------------------------
async function commentFormHandler(event){
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
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
    }
};

//EVENT LISTENER --------------------------------
commentFormEl.addEventListener('submit', commentFormHandler);






