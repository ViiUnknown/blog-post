const createPost = (getPost) => {
    // Select the <div> that holds every post
    const postsContainer = document.getElementById("posts-container")

    const post = document.createElement("div")
    post.classList.add("post")

    const postTitle = document.createElement("h2")
    postTitle.textContent = getPost.title

    const postContent = document.createElement("p")
    postContent.textContent = getPost.content

    // add double click event to edit the title and the content
    postTitle.addEventListener("dblclick", (e) => updatePost(e.target, "title"))
    postContent.addEventListener("dblclick", (e) => updatePost(e.target, "content"))

    // create edit title <button>
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement)
    })

    // create edit content <button>
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        editContent(e.target.parentElement)
    })

    // create delete <button>
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    // append our elements to <div class="post">, then the post to the container
    post.appendChild(postTitle)
    post.appendChild(postContent)
    post.appendChild(editTitleBtn)
    post.appendChild(editContentBtn)
    post.appendChild(deleteBtn)
    postsContainer.appendChild(post)
}

const addPost = () => {
    const title = prompt("Enter the post title:")
    if (!title) return

    const content = prompt("Enter the post content:")
    if (!content) return

    createPost({ title, content })
}

const updatePost = (element, field) => {
    const newText = prompt(`Input the updated ${field}:`, element.textContent)
    if (newText) {
        element.textContent = newText
    }
}

const editTitle = (target) => {
    // target <div class="post"><h2>title</h2><p>content</p><button title><button content><button delete></div>
    const postTitle = target.firstChild
    updatePost(postTitle, "title")
}

const editContent = (target) => {
    // target <div class="post"><h2>title</h2><p>content</p><button title><button content><button delete></div>
    const postContent = target.childNodes[1]
    updatePost(postContent, "content")
}

const deletePost = (target) => {
    // target <div class="post"><h2>title</h2><p>content</p><button title><button content><button delete></div>
    const postTitle = target.firstChild.textContent
    const toDelete = confirm(`Are you sure you want to delete "${postTitle}"?`)

    if (toDelete) {
        target.remove()
        alert(`Post "${postTitle}" deleted successfully`)
    }
}

window.onload = () => {
    let postList = [
        {
            title: "Hello World",
            content: "This is my very first blog post. I am learning Web II and this is where it starts."
        },
        {
            title: "Why I Like JavaScript",
            content: "JavaScript lets me change the page without reloading it. Every click can do something."
        },
        {
            title: "Weekend Plans",
            content: "Finish this blog post application, then go get some coffee in Phnom Penh."
        }
    ]
    postList.map((post) => createPost(post))

    let addPostBtn = document.getElementById("add-post-button")
    addPostBtn.addEventListener("click", addPost)
}
