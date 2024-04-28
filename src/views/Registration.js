
export function Registration() {
  const section = document.createElement("section");
section.classList.add('form-container')
  section.innerHTML = `
  <div class="wrapper">
        <h1 class="header">Registration</h1>
        <form action="#">
            <div clss="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Name">
            </div>
            <div clss="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
            </div>
            <div clss="form-group">
                <label for="password">Name</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-primary" id="save">Submit</button>
            </div>
        </form>
    <div class="wrapper">
    `;

const btn = document.querySelector('button#save.btn.btn-primary')

  return section;
}

