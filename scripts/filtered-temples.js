const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// display temples

const templesElement = document.querySelector('.container');
const h2 = document.querySelector('h2');

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
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
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, December, 9",
      area: 25300,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },
    {
      templeName: "Calgary Alberta Temple",
      location: "Calgary, Canada",
      dedicated: "2012, October, 28",
      area: 33000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },
    {
      templeName: "Sapporo Japan Temple",
      location: "Sapporo, Japan",
      dedicated: "2016, August, 21",
      area: 48480,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    },
    {
      templeName: "The Hague Netherlands",
      location: "Zoetermeer, Netherlands",
      dedicated: "2019, September, 8",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
    },
    {
      templeName: "St. George Utah",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6",
      area: 142000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149536-wallpaper.jpg"
    }
  ];

const old = document.querySelector("#old");
old.addEventListener("click", () => {
  const templesBefore1900 = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0], 10);
    return year < 1900;
  });
  displayTemples(templesBefore1900);
  h2.textContent = "Old Temples";
})

const newT = document.querySelector("#new");
newT.addEventListener("click", () => {
  const templesAfter2000 = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0], 10);
    return year > 2000;
  });
  displayTemples(templesAfter2000);
  h2.textContent = "New Temples";
})

const large = document.querySelector("#large");
large.addEventListener("click", () => {
  displayTemples(temples.filter(temple => temple.area > 90000 ));
  h2.textContent = "Large Temples";
  });

const small = document.querySelector("#small");
small.addEventListener("click", () => {
  displayTemples(temples.filter(temple => temple.area < 10000 ));
  h2.textContent = "Small Temples";
  }); 

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  displayTemples(temples);
  h2.textContent = "Home";
  }); 

  


const displayTemples = (templesList) => {
  templesElement.innerHTML = "";
    templesList.forEach(temple => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
      const location = document.createElement('p');
      const dedicated = document.createElement('p');
      const size = document.createElement('p');
      const img = document.createElement('img');

      const sLocation = `<span class="data-temple">Location:</span>
      <span class="temple-value">${temple.location}</span>`;
      const sDedicated = `<span class="data-temple">Dedicated:</span>
      <span class="temple-value">${temple.dedicated}</span>`;
      const sSize = `<span class="data-temple">Size:</span>
      <span class="temple-value">${temple.area} sq ft</span>`;

      location.innerHTML = sLocation;
      dedicated.innerHTML = sDedicated;
      size.innerHTML = sSize;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.location);
      img.setAttribute("loading", "lazy");

      article.appendChild(h3);
      article.appendChild(location);
      article.appendChild(dedicated)
      article.appendChild(size);
      article.appendChild(img);
      templesElement.appendChild(article)
    });

}

document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
});
  