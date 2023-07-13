# phase-comments

Phase Frontend Test: “Comments”

Implement comment threads pinned on the canvas with React.
Requirements:
- A page with canvas (can use any graphics libraries like PIXI to implement)
- Display a static image on the canvas
- [Bonus] Canvas can zoom in/out and pan around
- [Bonus] Display more than one image
- Start a comment thread anywhere in the canvas
- Clicking anywhere on the image displayed in the canvas should add a new
comment marker to the canvas and open the comment dialog
- Comment markers should exist in the canvas and retain the position relative to
the displayed image (independent of the pan and zoom)
- [Bonus] If comments are placed on a particular image they should be attached to
that image, so that if the image to be moved or removed all comments placed on
it should move with it.

- Comment dialog:
- Should be implemented outside of the canvas in React.
- Should not change scale if the canvas is zoomed in or zoomed out.
- Should have a thread of comments and a field to add a new comment.
- Can be closed
- Should have a way to resolve the thread. If the thread is resolved, the
corresponding marker on the canvas should be deleted as well.
- [Bonus] have ability for multiple users to leave comments in any thread (user
authentication is not required)

- Comments:
- Should display it’s content
- Display the time it was posted at
- Display the username who wrote the comment

This implementation doesn’t need to have the backend and can rely on client side technologies
for keeping user data.
Example video for visual reference (UI doesn’t have to be replicated exactly like on the video):
https://drive.google.com/file/d/1G98D8yq4Y2eJRJHdtCi9NxjjmiVQdoGT/view

Checklist:
● Have no performance issues
● Should be able to run in Chrome, Firefox, Safari

● Readable code, comments
● Unit tests
● [Bonus] Any additional tests that you think
