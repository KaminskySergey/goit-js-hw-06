const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  
  const listEl = document.querySelector('.gallery');

  const galleryItemCreate = ({url, alt}) => 
  `<li><img src="${url}" alt="${alt}" width ="350" height ="200"></li>`;

  const markupItem = images.reduce((acc, item) => {
return acc + galleryItemCreate(item);

  }, "");

  listEl.insertAdjacentHTML('afterbegin', markupItem); 
  listEl.setAttribute("style", "display:flex; justify-content: center; align-items: center; list-style: none;");
//   просто захотелось так=================
  listEl.style.backgroundColor = "teal";
// ========================================
