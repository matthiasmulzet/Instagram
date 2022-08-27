let posts = [
    {
        'author': 'img/person9_optimized.jpg',
        'authorName': 'Daniel Crack',
        'image': 'img/post1_optimized.jpg',
        'description': 'These are my childhood heroes',
        'location': 'New York City, N.Y',
        'comments': [],
        'time': 'Vor 1 Stunde',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-1',
        'commentId': 'comment-id-1',
        'writenCommentId': 'writen-comment-id-1',
        'likes': 30,
        'likesId': 'likes-id-1',
        'commentsBigPictureId': 'comments-big-picture-1',
        'bookmarkId': 'bookmark-id-1'
    },

    {
        'author': 'img/person10_optimized.jpg',
        'authorName': 'Lisa Müller',
        'image': 'img/post2_optimized.jpg',
        'description': 'drinking and having fun…',
        'location': 'Donaukanal, Wien',
        'comments': [],
        'time': '3. August',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-2',
        'commentId': 'comment-id-2',
        'writenCommentId': 'writen-comment-id-2',
        'likes': 1500,
        'likesId': 'likes-id-2',
        'commentsBigPictureId': 'comments-big-picture-2',
        'bookmarkId': 'bookmark-id-2'
    },

    {
        'author': 'img/person11_optimized.jpg',
        'authorName': 'Sarinia Julini',
        'image': 'img/post3_optimized.jpg',
        'description': 'Look what I found in the deeps from Egypt',
        'location': 'Hurghada, Egypt',
        'comments': [],
        'time': 'Vor 20 Stunden',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-3',
        'commentId': 'comment-id-3',
        'writenCommentId': 'writen-comment-id-3',
        'likes': 7,
        'likesId': 'likes-id-3',
        'commentsBigPictureId': 'comments-big-picture-3',
        'bookmarkId': 'bookmark-id-3'
    },

    {
        'author': 'img/person12_optimized.jpg',
        'authorName': 'Florian Casper',
        'image': 'img/post4_optimized.jpg',
        'description': 'Enjoiying the beautiful nights in Hawaii',
        'location': 'Honolulu, Hawaii',
        'comments': [],
        'time': 'Vor 2 Stunden',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-4',
        'commentId': 'comment-id-4',
        'writenCommentId': 'writen-comment-id-4',
        'likes': 10,
        'likesId': 'likes-id-4',
        'commentsBigPictureId': 'comments-big-picture-4',
        'bookmarkId': 'bookmark-id-4'
    },

    {
        'author': 'img/person13_optimized.jpg',
        'authorName': 'Armin Karlsen',
        'image': 'img/post5_optimized.jpg',
        'description': 'How awesome can life be?',
        'location': 'Lagos, Portugal',
        'comments': [2, 2],
        'time': 'Vor 22 Stunden',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-5',
        'commentId': 'comment-id-5',
        'writenCommentId': 'writen-comment-id-5',
        'likes': 9321,
        'likesId': 'likes-id-5',
        'commentsBigPictureId': 'comments-big-picture-5',
        'bookmarkId': 'bookmark-id-5'
    },

    {
        'author': 'img/person14_optimized.jpg',
        'authorName': 'Juliana Mayer',
        'image': 'img/post6_optimized.jpg',
        'description': 'Just a random picture where my boyfriend is running down the street',
        'location': 'Barcelona, Espanã',
        'comments': [1, 2, 3, 4],
        'time': 'Vor 15 Stunden',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-6',
        'commentId': 'comment-id-6',
        'writenCommentId': 'writen-comment-id-6',
        'likes': 654,
        'likesId': 'likes-id-6',
        'commentsBigPictureId': 'comments-big-picture-6',
        'bookmarkId': 'bookmark-id-6'
    },

    {
        'author': 'img/person15_optimized.jpg',
        'authorName': 'Heinz Merling',
        'image': 'img/post7_optimized.jpg',
        'description': 'In love with this picture!',
        'location': '',
        'comments': [1, 2],
        'time': '6. August',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-7',
        'commentId': 'comment-id-7',
        'writenCommentId': 'writen-comment-id-7',
        'likes': 227,
        'likesId': 'likes-id-7',
        'commentsBigPictureId': 'comments-big-picture-7',
        'bookmarkId': 'bookmark-id-7'
    },

    {
        'author': 'img/person16_optimized.jpg',
        'authorName': 'Marlis Schmidt',
        'image': 'img/post8_optimized.jpg',
        'description': 'Start the morning with a quick yoga session and the day is yours',
        'location': 'Palma De Mallorca, Spain',
        'comments': [1],
        'time': 'Vor 5 Stunden',
        'redHeart': 'false',
        'bookmark': 'false',
        'heartIconId': 'icons-left-8',
        'commentId': 'comment-id-8',
        'writenCommentId': 'writen-comment-id-8',
        'likes': 99,
        'likesId': 'likes-id-8',
        'commentsBigPictureId': 'comments-big-picture-8',
        'bookmarkId': 'bookmark-id-8'
    }
];

let follower = [
    {
        'name': 'klauskarl',
        'picture': 'img/person17_optimized.jpg',
        'followId': 'follow-id-1',
        'following': 'false'
    },

    {
        'name': 'mayerhilde',
        'picture': 'img/person18_optimized.jpg',
        'followId': 'follow-id-2',
        'following': 'false'
    },

    {
        'name': 'l_uisa',
        'picture': 'img/person19_optimized.jpg',
        'followId': 'follow-id-3',
        'following': 'false'
    },

    {
        'name': 'luna_anna',
        'picture': 'img/person20_optimized.jpg',
        'followId': 'follow-id-4',
        'following': 'false'
    }
]


let postLikes = posts['likes'];


let newLike = Intl.NumberFormat('en-US');


let commentValue;


let storyProfilPictures = ["img/person1_optimized.jpg", "img/person2_optimized.jpg", "img/person3_optimized.jpg",
    "img/person4_optimized.jpg", "img/person5_optimized.jpg", "img/person6_optimized.jpg",
    "img/person7_optimized.jpg", "img/person8_optimized.jpg"]


let storyProfilNames = ["Lana Marianovic", "Diego Serino", "Peter Lustig",
    "Siegfried Mayer", "James Cameron", "Sarah Marris",
    "Thomas Kainz", "Max Anton"]


function loadPage() {
    loadStorys();
    loadPosts();
    loadFollower();
}


function loadStorys() {
    document.getElementById('storys').innerHTML = '';
    for (i = 0; i < storyProfilPictures.length; i++) {
        const storyPicture = storyProfilPictures[i];
        const storyName = storyProfilNames[i];

        document.getElementById('storys').innerHTML += /*html*/ `
        <div class="story-pic-name">
            <img class="profil-picture-story" src=${storyPicture} alt="profil-picture">
            <p class="story-name">${storyName}</p>
        </div>`;
    }

    showArrowsScroll();
}


function loadPosts() {
    document.getElementById('all-posts').innerHTML = '';

    for (i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('all-posts').innerHTML += postTemplate(post, i);

        showHowMuchComments(i);
    }
}


function loadFollower() {
    document.getElementById('right-side-follower').innerHTML = '';

    for (i = 0; i < follower.length; i++) {
        const follow = follower[i];

        document.getElementById('right-side-follower').innerHTML += followerTemplate(i);
    }
}


function showBigPictureAndComments(heartIconId, likes, likesId, bookmarkId, i) {
    document.getElementById('overlay-whole-page').classList.add('overlay-picture-comment');
    document.getElementById('overlay-whole-page').classList.remove('d-none');

    document.getElementById('overlay-whole-page').innerHTML = bigPictureAndComments(heartIconId, likes, likesId, bookmarkId, i);
    showComments(i);

    redHeartFalseOrTrue(i);

    bookmarkFalseOrTrue(i);

    like(heartIconId, likes, likesId, i);

    markPost(bookmarkId, i);
}


function showArrowsScroll() {
    document.getElementById('storys').innerHTML += /*html*/ `
    <div class="story-arrow-container">
        <img onclick="scrollToRight()" id="left-arrow" class="arrow-left-transparent" src="img/icons/circle-chevron-left-solid.svg" alt="arrow-left">
        <img onclick="scrollToLeft()" id="right-arrow" class="arrow-right" src="img/icons/circle-chevron-right-solid.svg" alt="arrow-right">
    </div>`;
}


function showHowMuchComments(i) {
    const post = posts[i];

    if (post['comments'].length == 1) {
        document.getElementById(post['commentId']).innerHTML = '';
        document.getElementById(post['commentId']).innerHTML += /*html*/ `
        <span id="amount-comments">${post['comments'].length} Kommentar</span>`;
    }

    else {
        document.getElementById(post['commentId']).innerHTML = '';
        document.getElementById(post['commentId']).innerHTML += /*html*/ `
        <span id="amount-comments">${post['comments'].length} Kommentare</span>`;
    }
}


function redHeartFalseOrTrue(i) {
    if (posts[i].redHeart == 'false') {
        posts[i].redHeart = 'true';
    }

    else {
        posts[i].redHeart = 'false';
    }
}


function bookmarkFalseOrTrue(i) {
    if (posts[i].bookmark == 'false') {
        posts[i].bookmark = 'true';
    }

    else {
        posts[i].bookmark = 'false';
    }
}


function closeOverlay(heartIconId, likes, likesId, bookmarkId, i) {
    removeAndAddClassCloseOverlay();

    redHeartFalseOrTrue(i);

    bookmarkFalseOrTrue(i);

    like(heartIconId, likes, likesId, i);
    markPost(bookmarkId, i);
}


function removeAndAddClassCloseOverlay() {
    document.getElementById('header').classList.remove('header');
    document.getElementById('header').classList.add('header-without-zindex');
    document.getElementById('overlay-whole-page').classList.remove('overlay-picture-comment');
    document.getElementById('overlay-whole-page').classList.add('d-none');

    document.getElementById('overlay-whole-page').innerHTML = '';
    document.getElementById('header').classList.remove('header-without-zindex');
    document.getElementById('header').classList.add('header');
}


function showComments(i) {
    document.getElementById(posts[i].commentsBigPictureId).innerHTML = '';

    for (c = 0; c < posts[i].comments.length; c++) {
        commentsTemplate(i, c);
    }
}


function search() {
    document.getElementById('close-icon-header').classList.remove('d-none');
    document.getElementById('search-icon-header').classList.add('d-none');
    document.getElementById('overlay-whole-page').classList.remove('d-none');
}


function closeSearchFunction() {
    let searchIcon = document.getElementById('search-icon-header');
    if (searchIcon.classList.contains('d-none')) {
        document.getElementById('close-icon-header').classList.add('d-none');
        document.getElementById('search-icon-header').classList.remove('d-none');
        document.getElementById('overlay-whole-page').classList.add('d-none');
        document.getElementById('input-search').value = '';
    }
}


function like(heartIconId, likes, likesId, i) {
    document.getElementById(heartIconId).innerHTML = '';
    document.getElementById(likesId).innerHTML = '';

    if (posts[i].redHeart == 'false') {
        showRedHeart(heartIconId, likes, likesId, i);
    }
    else {
        showWhiteHeart(heartIconId, likes, likesId, i);
    }
}


function showRedHeart(heartIconId, likes, likesId, i) {
    document.getElementById(heartIconId).innerHTML = /*html*/ `
        <img onclick="like('${heartIconId}', '${likes}', '${likesId}', '${i}')" id="${heartIconId}" class="heart-icon" src="img/icons/red-heart_optimized.png" alt="heart-icon">
        <img onclick="focusComment(${i})" src="img/icons/bubble-chat_optimized.png" alt="comment-icon">
        <img src="img/icons/send_optimized.png" alt="send-icon">`;

    parseInt(likes);
    likes++;
    likesWithPoint = newLike.format(likes);
    document.getElementById(likesId).innerHTML = /*html*/ `
    <span class="likes">Gefällt ${likesWithPoint} Mal</span>`;
    posts[i].redHeart = 'true';
}


function showWhiteHeart(heartIconId, likes, likesId, i) {
    document.getElementById(heartIconId).innerHTML = /*html*/ `
        <img onclick="like('${heartIconId}', '${likes}', '${likesId}', '${i}')" id="${heartIconId}" class="heart-icon" src="img/icons/heart_optimized.png" alt="heart-icon">
        <img onclick="focusComment(${i})" src="img/icons/bubble-chat_optimized.png" alt="comment-icon">
        <img src="img/icons/send_optimized.png" alt="send-icon">`;

    likesWithPoint = newLike.format(likes);
    document.getElementById(likesId).innerHTML = /*html*/ `
    <span class="likes">Gefällt ${likesWithPoint} Mal</span>`;
    posts[i].redHeart = 'false';
}


function markPost(bookmarkId, i) {
    document.getElementById(bookmarkId).innerHTML = '';
    if (posts[i].bookmark == 'false') {
        showBlackBookmark(bookmarkId, i);
    }

    else {
        showWhiteBookmark(bookmarkId, i);
    }
}


function showBlackBookmark(bookmarkId, i) {
    document.getElementById(bookmarkId).innerHTML = /*html*/ `
        <img onclick="markPost('${bookmarkId}', '${i}')" src="img/icons/bookmark-solid.svg" alt="mark-icon">`;

    posts[i].bookmark = 'true';
}


function showWhiteBookmark(bookmarkId, i) {
    document.getElementById(bookmarkId).innerHTML = /*html*/ `
        <img onclick="markPost('${bookmarkId}', '${i}')" src="img/icons/bookmark-regular.svg" alt="mark-icon">`;

    posts[i].bookmark = 'false';
}


function pushToCommentListBigPicture(i, writenCommentId) {
    commentValue = document.getElementById(writenCommentId).value;
    if (commentValue.length >= 1) {
        posts[i].comments.push(commentValue);
        showHowMuchComments(i);

        showComments(i);

        document.getElementById(writenCommentId).value = '';
    }

    else {
        alert('Kommentar muss mindestens ein Zeichen lang sein.');
    }
}


function removeComment(i, c) {
    const allComments = posts[i].comments[c];
    deletedComment = posts[i].comments.indexOf(allComments);
    posts[i].comments.splice(deletedComment, 1);
    showComments(i);

    showHowMuchComments(i);
}


function pushToCommentList(i, writenCommentId) {
    commentValue = document.getElementById(writenCommentId).value;
    if (commentValue.length >= 1) {
        posts[i].comments.push(commentValue);
        showHowMuchComments(i);

        document.getElementById(writenCommentId).value = '';
    }

    else {
        alert('Kommentar muss mindestens ein Zeichen lang sein.');
    }
}


function changeFollow(followId, i) {
    if (follower[i].following == 'false') {
        document.getElementById(followId).innerHTML = /*html*/ `
            <span onclick="changeFollow('${followId}', '${i}')" class="followed">Gefolgt</span>`;

        follower[i].following = 'true';
    }

    else {
        document.getElementById(followId).innerHTML = /*html*/`
            <span onclick="changeFollow('${followId}', '${i}')" class="follow">Folgen</span>`;

        follower[i].following = 'false';
    }
}


function focusComment(i) {
    document.getElementById(posts[i].writenCommentId).focus();
}


function scrollToLeft() {
    let left = document.getElementById('storys');
    left.scrollLeft += 90;

    if (left.scrollLeft >= 0) {
        document.getElementById('left-arrow').classList.remove('arrow-left-transparent');
        document.getElementById('left-arrow').classList.add('arrow-left');
    }

    if (left.scrollLeft >= 180) {
        document.getElementById('left-arrow').classList.remove('arrow-right');
        document.getElementById('right-arrow').classList.add('arrow-right-transparent');
    }
}


function scrollToRight() {
    let right = document.getElementById('storys');
    right.scrollLeft -= 90;

    if (right.scrollLeft <= 0) {
        document.getElementById('left-arrow').classList.remove('arrow-left');
        document.getElementById('left-arrow').classList.add('arrow-left-transparent');
    }

    if (right.scrollLeft <= 180) {
        document.getElementById('right-arrow').classList.remove('arrow-right-transparent');
        document.getElementById('right-arrow').classList.add('arrow-right');
    }
}


function commentInputPost(i) {
    if (document.getElementById(posts[i].writenCommentId).value < 1) {
        document.getElementById(posts[i].writenCommentId).classList.remove('posten-button');
        document.getElementById(posts[i].writenCommentId).classList.add('posten-button-no-input');

    }
}


//----------------------------------------HTML Templates-----------------------------------------------------------------------------
function bigPictureAndComments(heartIconId, likes, likesId, bookmarkId, i) {
    document.getElementById('header').classList.remove('header');
    document.getElementById('header').classList.add('header-without-zindex');
    return /*html*/ `
    <img onclick="closeOverlay('${heartIconId}', '${likes}', '${likesId}', '${bookmarkId}', '${i}')" class="close-icon-big" src="img/icons/close.svg" alt="close">

    <div class="picture-and-comment">

        <div class="big-picture-container">
            <img class="big-picture" src="${posts[i].image}" alt="post-picture">
        </div>

        <div class="big-comment">

            <div>
                <div class="header-post">
                    <div class="name-and-picture-container">
                        <img class="little-profil-picture" src="${posts[i].author}" alt="profil-picture">
                        <div class="name-and-location">
                            <span class="name">${posts[i].authorName}</span>
                            <span class="location">${posts[i].location}</span>
                        </div>
                    </div>
                    <img class="option-icon" src="img/icons/option_optimized.png" alt="option-icon">
                </div>
            </div>

            <div id="${posts[i].commentsBigPictureId}" class="all-comments">

            </div>

            <div class="flex-end">
                <div class="icon-section-post">
                    <div id="${heartIconId}" class="icons-left">
                        <img onclick="like('${heartIconId}', '${likes}', '${likesId}', '${i}')" 
                        id="${heartIconId}" class="heart-icon" src="img/icons/heart_optimized.png" alt="heart-icon">
                        <img onclick="focusComment(${i})" src="img/icons/bubble-chat_optimized.png" alt="comment-icon">
                        <img src="img/icons/send_optimized.png" alt="send-icon">
                    </div>

                    <div id="${bookmarkId}" class="icon-right">
                        <img onclick="markPost('${bookmarkId}', '${i}')" src="img/icons/bookmark-regular.svg" alt="mark-icon">
                    </div>
                </div>

                <div id="${likesId}" class="likes-container">
                    <span class="likes">Gefällt ${newLike.format(likes)} Mal</span>
                </div>

                <div class="post-description-container">
                    <span class="post-description">
                        <b>${posts[i].authorName}</b>
                        ${posts[i].description}
                    </span>
                </div>

                <div class="post-time-container">
                    <span class="post-time">${posts[i].time}</span>
                </div>
                
                <div class="comment-section">
                    <img class="smile-icon" src="img/icons/face-smile-regular.svg" alt="smile-icon">
                    <input id="${posts[i].writenCommentId}" class="write-comment" placeholder="Kommentieren...">
                    <span onclick="pushToCommentListBigPicture('${i}', '${posts[i].writenCommentId}')" class="posten-button">Posten</span>
                </div>
            </div>
        </div>
    </div>`;
}


function postTemplate(post, i) {
    return /*html*/ ` 
    <div class="post-container">
        <div class="header-post">
            <div class="name-and-picture-container">
                <img class="little-profil-picture" src="${post['author']}" alt="profil-picture">
                <div class="name-and-location">
                    <span class="name">${post['authorName']}</span>
                    <span class="location">${post['location']}</span>
                </div>
            </div>

            <img class="option-icon" src="img/icons/option_optimized.png" alt="option-icon">
        </div>

        <div>
            <img class="post-image" src="${post['image']}" alt="post-picture">
        </div>

        <div class="icon-section-post">
            <div id="${post['heartIconId']}" class="icons-left">
                <img onclick="like('${post['heartIconId']}', '${post['likes']}', '${post['likesId']}', '${i}')" 
                id="${post['heartIconId']}" class="heart-icon" src="img/icons/heart_optimized.png" alt="heart-icon">
                <img onclick="focusComment(${i})" src="img/icons/bubble-chat_optimized.png" alt="comment-icon">
                <img src="img/icons/send_optimized.png" alt="send-icon">
            </div>

            <div id="${post['bookmarkId']}" class="icon-right">
                <img onclick="markPost('${post['bookmarkId']}', '${i}')" src="img/icons/bookmark-regular.svg" alt="mark-icon">
            </div>
        </div>

        <div id="${post['likesId']}" class="likes-container">
            <span class="likes">Gefällt ${newLike.format(post['likes'])} Mal</span>
        </div>

        <div class="post-description-container">
            <span class="post-description">
                <b>${post['authorName']}</b>
                ${post['description']}
            </span>
        </div>

        <div onclick="showBigPictureAndComments('${post['heartIconId']}', '${post['likes']}', '${post['likesId']}', '${post['bookmarkId']}', '${i}')" id="${post['commentId']}" class="comments">
            
        </div>

        <div class="post-time-container">
            <span class="post-time">${post['time']}</span>
        </div>

        <div class="comment-section">
            <img class="smile-icon" src="img/icons/face-smile-regular.svg" alt="smile-icon">
            <input id="${post['writenCommentId']}" class="write-comment" placeholder="Kommentieren...">
            <span onclick="pushToCommentList('${i}', '${post['writenCommentId']}')" class="posten-button">Posten</span>
        </div>
    </div>`;
}


function followerTemplate(i) {
    return /*html*/ `
    <div class="space-between">
        <div class="my-profil">
            <img class="person-follow-profil-picture" src="${follower[i].picture}" alt="profile-picture">
            <div class="column-flex-start">
                <span class="user-name-follower">${follower[i].name}</span>
                <span class="follows-you">folgt dir</span>
            </div>
        </div>
        <div id="${follower[i].followId}" class="change-container">
            <span onclick="changeFollow('${follower[i].followId}', '${i}')" class="follow">Folgen</span>
        </div>
    </div>`;
}


function commentsTemplate(i, c) {
    const allComments = posts[i].comments[c];

    document.getElementById(posts[i].commentsBigPictureId).innerHTML += /*html*/ `
        <div class="post-comments-with-trash">
            <span class="comment-description">
                <b>Matthias Mulzet</b>
                ${allComments}
            </span>
            <img onclick="removeComment(${i}, ${c})" class="trash-icon" src="img/icons/trash-can-solid.svg" alt="trash">
        </div>`;
}