
const items = document.querySelectorAll('.item');
let currentIndex = 0; 


function showItem(index) {
    
    items.forEach(item => item.classList.remove('active'));

    
    items[index].classList.add('active');
}


function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;

    showItem(currentIndex);
}


function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; 

    showItem(currentIndex);
}


document.getElementById('next').addEventListener('click', nextItem);
document.getElementById('prev').addEventListener('click', prevItem);


showItem(currentIndex);
