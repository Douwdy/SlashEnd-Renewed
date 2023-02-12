// Parallax effect for the images on the home page
  function createParallax(imageId) {
    // Get the image element by its id
    const image = document.getElementById(imageId);

    // If the image element does not exist in the document, log an error and return
    if (!image) {
      console.error(`No element with ID "${imageId}" was found in the document.`);
      return;
    }

    // Event handler for mouse move
    function handleMouseMove(e) {
      // The speed of the parallax effect
      let speed = 150;

      // Calculate the x-axis rotation
      let xAxis = (window.innerWidth - e.pageX) / speed;

      // Calculate the y-axis rotation
      let yAxis = (window.innerHeight - e.pageY) / speed;

      // Apply the transform to the image element
      image.style.transform = `perspective(500px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

      // Disable transition
      image.style.transition = 'none';
    }

    // Event handler for mouse enter
    function handleMouseEnter() {
      // Add the mouse move event listener to the document
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Event handler for mouse leave
    function handleMouseLeave() {
      // Remove the mouse move event listener from the document
      document.removeEventListener('mousemove', handleMouseMove);

      // Reset the transform
      image.style.transform = '';

      // Add a smooth transition when leaving
      image.style.transition = 'transform 0.5s ease-out, scale 0.5s ease-out';
    }

    // Add the mouse enter and mouse leave event listeners to the image element
    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mouseleave', handleMouseLeave);
  }

  // Call the createParallax function and pass the image id
  createParallax('image1');
  createParallax('image2');
  createParallax('image3');