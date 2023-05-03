 const  testmonial = [
  {
    name: "- Muire C",
    photoUrl:
      "https://media.istockphoto.com/id/939108006/photo/portrait-of-cute-girl.jpg?b=1&s=170667a&w=0&k=20&c=zXyl6c_7vxHlgJOQ1YcvfndI6P4v1A3KQGkZy-yTtPg=",
    text: "If you want real marketing that works and effective implementation - dolly's got you covered. It's incredible.",
  },

  {
    name: "- Minerva N.",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Life is the most valuable business resource we have EVER purchased. If you want real marketing that works and effective implementation - life's got you covered. Life should be nominated for service of the year.",
  },

  {
    name: "- Lisha F.",
    photoUrl:
      "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "It's all good. I will refer everyone I know. Apple should be nominated for service of the year. Very easy to use.",
  },
];
const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const userName1 = document.querySelector(".username");

let idk = 0;
updateTestimonial()
function updateTestimonial() {
  const { name, photoUrl, text } = testmonial[idk];
//   console.log(testmonial);
  imgE1.src = photoUrl;
  textE1.innerText = text;
  idk++;
  userName1.innerText = name;
  if (idk === testmonial.length) {
    idk = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);

}

