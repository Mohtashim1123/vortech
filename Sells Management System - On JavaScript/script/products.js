const productsContainer = document.querySelector('.product-list-wrapper');
const logOutbtn = document.getElementById('logout-btn');
    
const renderProduct = ({ pid, name, description, images }) => {
    productsContainer.innerHTML += `<div class="card" id="${pid}" style="width: 18rem;">
                                        <img class="card-img-top" src="${images}" alt="${name}">
                                        <div class="card-body">
                                            <p class="card-text">
                                            ${description}
                                            </p>
                                        </div>
                                        <button class="btn btn-primary" onclick="saleProduct(${pid})">Sale</button>
                                    </div>`;
};

const renderAllProducts = () => {
    const products = JSON.parse(localStorage.getItem('products'));

    products && products.map((products) => {
        renderProduct(products);
    });
};

const saleProduct = (pid) => {
    const product = document.getElementById(pid);
    const products = JSON.parse(localStorage.getItem('products'));

    const remainingProducts = products && products.filter((p) => p.pid !== pid);
    localStorage.setItem('products', JSON.stringify(remainingProducts));
    product.remove();
}

logOutbtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
});

renderAllProducts();
