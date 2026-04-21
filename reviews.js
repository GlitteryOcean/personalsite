const movieReviews = [
    
  {
    id: 1,
    title: "Ready or Not",
    date: "April 2025",
    rating: 10,
    description: "It is a great thriller with a good dose of comedy. It doesn't set out to be taken seriously, it is just a great hour and a half of fun. Just a great watch. Give it a chance; I would love to watch more titles like this one. It doesn't waste time with useless background, we all know what we need right from the start and that's it. After that, it's just a fun ride.",
    image: "https://preview.redd.it/ready-or-not-2019-official-poster-samara-weaving-adam-brody-v0-be7wtch2yx431.jpg?width=1080&crop=smart&auto=webp&s=b64b91ac748728d5bf181963cb019776d55e38d0",
    videoUrl: "https://www.google.com/search?q=ready+or+not+movie&oq=ready+or+no&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5Mg0IAhAAGIMBGLEDGIAEMggIAxBFGCcYOzINCAQQLhiDARixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDIyOTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    tags: ["horror", "thriller"],
    visible: true
    
},
 {
    id: 2,
    title: "Final Destination",
    date: "May 2026",
    rating: 10,
    description: "King's novel succeeded in large part due to the nostalgic immersion into Baby Boomer cultural touchstones. The filmmakers decision to update the setting to the late 1980's is understandable in the sense that the follow-up, featuring the adult versions of the characters, will now chronologically fit with modern times. The filmmakers also decide to forgo any excessive wallowing in 1980's pop iconography, with a movie poster here and a song there the only references. That boils the story down to the horror film essentials, and while there's nothing original in the mix, it is well presented, and features a handful of memorable scare moments. The special effects are also largely successful, and Skarsgard is good as the monstrous clown. The filmmakers also made the interesting decision to not explain Pennywise, perhaps leaving that for the sequel. I'd be curious what a first time viewer, with no knowledge of the source novel or the previous 1990 TV mini-series version, thought of the story.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetCo5DsOk1FqPIJLcIEC1yZ93J0v6adIimg&s",
    videoUrl: "https://www.google.com/search?q=final+destination+2000&sca_esv=208b7340aaa9f1e9&sxsrf=ANbL-n4BcCMwn9DbXLnhKIPmhwbfi_p9rA%3A1776704033994&ei=IVrmacWePNyVxc8PiPXKmQ8&biw=1396&bih=670&ved=0ahUKEwiFs8Sm8vyTAxXcSvEDHYi6MvMQ4dUDCBE&uact=5&oq=final+destination+2000&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmZpbmFsIGRlc3RpbmF0aW9uIDIwMDAyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIOEAAYsAMY5AIY1gTYAQEyFxAuGLADGNgCGLgGGMgDGNoGGNwG2AEBMhcQLhiwAxi4BhjYAhjIAxjaBhjcBtgBATIXEC4YsAMY2AIYuAYYyAMY2gYY3AbYAQEyFxAuGLADGLgGGNgCGMgDGNoGGNwG2AEBSO0HUMkGWMkGcAF4AZABAJgBAKABAKoBALgBA8gBAPgBAZgCAaACB5gDAIgGAZAGEboGBggBEAEYCZIHATGgBwCyBwC4BwDCBwMyLTHIBwaACAA&sclient=gws-wiz-serp",
    tags: ["horror", "thriller"],
    visible: true
    
},
{
    id: 3,
    title: "IT 2017",
    date: "May 2017",
    rating: 10,
    description: "As someone who is a huge fan of the book and the themes within. I think this is a great way of showing the book's true in your face horror. Whereas the old film was more about the seeping paranoïa. Overall the true core of the story is portrayed pretty okay, but the insane setpieces get a little more attention. The overal creativity of those scenes however managed to make mind less about that. If the second chapter gives characters like mike a tad more attention, it'll feel a bit more balanced, cause you sort of notice there's some stuff that got cut.Overall I'm amazed. And it was beautiful to see little scares steamroll into a giant screen popping scare every time IT got another big moment. It's horrific and beautiful to look at at he same time.Really happy with the film, very curious to see where it'll go.",
    image: "https://media.themoviedb.org/t/p/w440_and_h660_face/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    videoUrl: "https://www.google.com/search?q=it+2017&oq=it+2017&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI1MDlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    tags: ["horror", "thriller"],
    visible: true
    
}



    // ADD MORE MOVIES HERE - just duplicate the object above and change the details
];

let currentReviewIndex = 0;

function initReviewSystem() {
    displayReview(0);
    updatePagination();
    // Make tape section clickable
    document.querySelector('.tape-section').onclick = nextReview;
    document.querySelector('.tape-section').style.cursor = 'pointer';
}

function displayReview(index) {
    if (index < 0 || index >= movieReviews.length) return;
    
    currentReviewIndex = index;
    const review = movieReviews[index];
    
    const titleEl = document.querySelector('.movie-title');
    const posterEl = document.querySelector('.poster');
    const reviewEl = document.querySelector('.review');
    
    if (titleEl) titleEl.textContent = review.title;
    if (posterEl) {
        posterEl.src = review.image;
        posterEl.alt = review.title;
        posterEl.onclick = () => window.open(review.videoUrl, '_blank');
        posterEl.style.cursor = 'pointer';
    }
    if (reviewEl) {
        reviewEl.innerHTML = `<p><strong>${review.title}</strong> (${review.date})<br><br>${review.description}</p>`;
    }
    
    updatePagination();
}

function nextReview() {
    if (currentReviewIndex < movieReviews.length - 1) {
        displayReview(currentReviewIndex + 1);
    } else {
        displayReview(0); // loops back to first
    }
}

function previousReview() {
    if (currentReviewIndex > 0) {
        displayReview(currentReviewIndex - 1);
    }
}

function updatePagination() {
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;
    
    pagination.innerHTML = '';
    
    if (movieReviews.length === 1) {
        pagination.innerHTML = '<span class="page-dot">•</span>';
    } else {
        movieReviews.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'page-dot';
            dot.textContent = (index + 1);
            dot.style.cursor = 'pointer';
            if (index === currentReviewIndex) {
                dot.style.fontWeight = 'bold';
                dot.style.fontSize = '2.2rem';
            }
            dot.addEventListener('click', () => displayReview(index));
            pagination.appendChild(dot);
        });
    }
}
