const productsContainer = document.querySelector('.product-list-wrapper');
const name = document.getElementById('name');
const image = document.getElementById('image');
const description = document.getElementById('description');
const createbtn = document.getElementById('create-btn');
const logOutbtn = document.getElementById('logout-btn');
let isEditMode = false;

const renderProduct = ({ pid, name, description, images }) => {
    productsContainer.innerHTML += `<div class="card" id="${pid}" style="width: 18rem;">
                                        <img class="card-img-top" src="${images}" alt="${name}">
                                        <div class="card-body">
                                            <h3>${name}</h3>
                                            <p class="card-text">
                                            ${description}
                                            </p>
                                        </div>
                                        <button class="btn btn-success" onclick="editProduct(${pid})">Edit</button>
                                        <button class="btn btn-danger" onclick="deleteProduct(${pid})">Delete</button>
                                    </div>`;
};

const modifyNode = ({ pid, name, description, images })  => {
    return (
            `<img class="card-img-top" src="${images}" alt="${name}">
            <div class="card-body">
                <h3>${name}</h3>
                <p class="card-text">
                ${description}
                </p>
            </div>
            <button class="btn btn-success" onclick="editProduct(${pid})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${pid})">Delete</button>`
    )
}

const renderAllProducts = () => {
    const products = JSON.parse(localStorage.getItem('products'));

    products && products.map((products) => {
        renderProduct(products);
    });
};

const deleteProduct = (pid) => {
    const product = document.getElementById(pid);
    const products = JSON.parse(localStorage.getItem('products'));

    const remainingProducts = products && products.filter((p) => p.pid !== pid);
    localStorage.setItem('products', JSON.stringify(remainingProducts));
    product.remove();
}

const editProduct = (id) => {
    isEditMode = true;

    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.filter((p) => p.pid === id);

    if (product) {
        name.value = product[0].name;
        image.value = product[0].images;
        description.value = product[0].description;
        createbtn.dataset.edit = true;
        createbtn.dataset.id = id;
    }
}

createbtn.addEventListener('click', (e) => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (isEditMode) {
        const id = parseInt(e.target.dataset.id);
        products.map((p, index) => {
            if (p.pid === id) {
                p.name = name.value;
                p.description = description.value;
                p.images = image.value;
            }
        });

        localStorage.setItem('products', JSON.stringify(products));
        const productNode = document.getElementById(id);
        productNode.innerHTML = modifyNode({ pid: id, name: name.value, description: description.value, images: image.value })
        isEditMode = false;
        name.value = '';
        description.value = '';
        image.value = ''
    } else {
        const newproduct = {
            name: name.value,
            description: description.value,
            images: image.value,
            pid: new Date().getMilliseconds()
        }

        products.push(newproduct);
        localStorage.setItem('products', JSON.stringify(products));
        renderProduct(newproduct)
    }
});

logOutbtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
});

renderAllProducts();
