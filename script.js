document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");
  const categories = document.querySelectorAll(".categories > li > h3");
  const langButtons = document.querySelectorAll(".lang-btn");
  
  let currentLanguage = "en";
  let currentSection = null;

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("data-section");
      
      // Update active link styling
      updateActiveLink(e.target);
      
      // Load content
      currentSection = section;
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

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-lang");
      if (selectedLang === currentLanguage) return;
      setLanguage(selectedLang);
    });
  });

  function setLanguage(lang) {
    currentLanguage = lang;
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Reload current section in the chosen language
    if (currentSection) {
      loadContent(currentSection);
    }
  }

  function loadContent(section) {
    // Add loading state
    content.classList.add('loading');
    
    const primaryPath = `sections/${currentLanguage}/${section}.html`;
    const fallbackPath = `sections/en/${section}.html`;

    fetch(primaryPath)
      .then((response) => {
        if (!response.ok) {
          if (currentLanguage !== "en") {
            return fetch(fallbackPath);
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
      })
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

  // Global functions for interactive elements in loaded content
  window.showTab = function(tabId, clickedElement) {
    // Hide all tab contents in the current content area
    document.querySelectorAll('#content .tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Remove active from all tabs in the current content area
    document.querySelectorAll('#content .nav-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Show selected tab and mark as active
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
    
    // Mark the clicked tab as active if element is provided
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  window.toggleExpand = function(header) {
    const content = header.nextElementSibling;
    const isExpanded = content.classList.contains('show');
    
    if (isExpanded) {
      content.classList.remove('show');
      header.classList.add('collapsed');
    } else {
      content.classList.add('show');
      header.classList.remove('collapsed');
    }
  };

  // Event delegation for dynamically loaded content
  document.addEventListener('click', function(e) {
    // Handle expandable headers
    if (e.target.classList.contains('expandable-header')) {
      e.preventDefault();
      window.toggleExpand(e.target);
    }
    
    // Handle nav tabs (look for onclick attribute with showTab)
    if (e.target.classList.contains('nav-tab')) {
      e.preventDefault();
      const onclickAttr = e.target.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes('showTab')) {
        // Extract tab ID from onclick attribute
        const match = onclickAttr.match(/showTab\('([^']+)'\)/);
        if (match) {
          window.showTab(match[1], e.target);
        }
      }
    }
  });
});
