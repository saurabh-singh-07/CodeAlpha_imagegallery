let currentIndex = 0;
    let images = [];

    function openLightbox(imgElement) {
      images = Array.from(document.querySelectorAll('.image-item:not([style*="display: none"]) img'));
      currentIndex = images.indexOf(imgElement);
      document.getElementById("lightbox").style.display = "block";
      document.getElementById("lightboxImage").src = imgElement.src;
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }

    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      document.getElementById("lightboxImage").src = images[currentIndex].src;
    }

    function filterImages(category) {
      const allImages = document.querySelectorAll(".image-item");

      allImages.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }