document.getElementById('quantity').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const itemList = document.getElementById('item-list');
    
    itemList.innerHTML = '';
    
    const loading = document.createElement('div');
    loading.textContent = 'Loading...';
    loading.classList.add('loading');
    itemList.appendChild(loading);

    setTimeout(function() {
        itemList.removeChild(loading);

        for (let i = 1; i <= quantity; i++) {
            const listItem = document.createElement('li');
            
            const circle = document.createElement('div');
            circle.classList.add('circle');
            listItem.appendChild(circle);
            
            const text = document.createElement('span');
            text.textContent = `${i}`;
            circle.appendChild(text);
            
            itemList.appendChild(listItem);
        }
    }, 100);
});
