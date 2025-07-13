document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");
  const categories = document.querySelectorAll(".categories > li > h3");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("data-section");
      
      // Update active link styling
      updateActiveLink(e.target);
      
      // Load content
      loadContent(section);
    });
  });

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const subMenu = category.nextElementSibling;
      subMenu.style.display =
        subMenu.style.display === "block" ? "none" : "block";
    });
  });

  function loadContent(section) {
    // Add loading state
    content.classList.add('loading');
    
    fetch(`sections/${section}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        content.innerHTML = html;
        content.classList.remove('loading'); // Remove loading state
        Prism.highlightAll(); // Apply syntax highlighting
        
        // Small delay to ensure content is rendered before scrolling
        setTimeout(() => {
          scrollToContent();
        }, 100);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        content.innerHTML = `
          <div class="box">
            <h2>Error Loading Content</h2>
            <p>Sorry, the content for "${section}" could not be loaded.</p>
            <p>Error: ${error.message}</p>
          </div>
        `;
        content.classList.remove('loading'); // Remove loading state
        
        // Still scroll to show the error message
        setTimeout(() => {
          scrollToContent();
        }, 100);
      });
  }

  function scrollToContent() {
    // Get the content element
    const contentElement = document.getElementById("content");
    
    if (contentElement) {
      // Calculate offset for better positioning (accounting for any fixed headers)
      const offset = 20; // 20px from top for some breathing room
      const elementPosition = contentElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll to the content
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  function updateActiveLink(clickedLink) {
    // Remove current-section class from all links
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('current-section');
    });
    
    // Add current-section class to clicked link
    clickedLink.classList.add('current-section');
  }
});
