# Gallery Video Support - CSS Addition

Add this CSS to your `static/css/custom.css` file to style the video play icon:

```css
/* Video Gallery Styles */
.video-gallery {
    position: relative;
}

.video-gallery .video-play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    background: rgba(255, 142, 1, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
}

.video-gallery .video-play-icon i {
    color: #fff;
    font-size: 24px;
    margin-left: 4px;
}

.video-gallery:hover .video-play-icon {
    background: rgba(255, 142, 1, 1);
    transform: translate(-50%, -50%) scale(1.1);
}

.video-gallery figure {
    position: relative;
}

.video-gallery figure::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.video-gallery:hover figure::after {
    background: rgba(0, 0, 0, 0.4);
}
```

This will add a play button overlay on video thumbnails.
