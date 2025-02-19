const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        'avg-rating': 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        'avg-rating': 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        'avg-rating': 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        'avg-rating': 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        'avg-rating': 5.0
    }
];

window.onload = () => {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // Call updateFooterContent inside onload
    updateFooterContent();
};

function updateFooterContent() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}
