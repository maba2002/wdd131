
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const gallery = document.querySelector(".res-grid");
    const mainContent = document.getElementById('main-content');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
        mainContent.style.marginTop = navLinks.classList.contains('show') ? '40%' : '0';
    });

    const temples = [
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
          },
          {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
          },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
        }
    ];

    createTempleCard(temples);

    const filters = {
        home: () => temples,
        old: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900),
        new: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000),
        large: () => temples.filter(temple => temple.area > 90000),
        small: () => temples.filter(temple => temple.area < 10000)
    };

    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = link.getAttribute('data-filter');
            clearTempleCards();
            createTempleCard(filters[filter]());
        });
    });

    function createTempleCard(filteredTemples) {
        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            gallery.appendChild(card);
        });
    }

    function clearTempleCards() {
        gallery.innerHTML = "";
    }

    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            mainContent.style.marginTop = "80px";
        }
    });
});