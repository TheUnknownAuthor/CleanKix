// Make sure this is available in the same scope or imported correctly
const cardPlaceholder = document.getElementById('cardPlaceholder');

class Card {
  constructor(Title, id, img, prog) {
    this.Title = Title;
    this.id = id;
    this.img = img;
    this.prog = prog;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      '<div class="col">',
        '<div class="card" style="border: 2px solid black;">',
          '<div class="card-body">',
            `<img style = "width: 150px; height: 150px;" src="${img}" class="card-img-top" alt="User Image">`,
            `<h5 class="card-title">${Title}</h5>`,
            `<div class="progress" style="margin-bottom:5px;" role="progressbar" aria-label="Example with label" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100">`,
              `<div class="progress-bar progress-bar-striped" style="width:${prog}%;">${prog}%</div>`,
            `</div>`,
            `<a href="profile.html?user=${id}" class="btn btn-primary">Open</a>`,
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    cardPlaceholder.appendChild(wrapper);
  }
}

function createCard(title, id, img, prog) {
  new Card(title, id, img, prog);
}

for (const [id, shoe] of Object.entries(shoes)) {
  createCard(shoe.name, id, shoe.img, "50");  // shoe.img is Base64 string now
}





