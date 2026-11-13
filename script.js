
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.car-image img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        this.parentElement.style.background = '#ddd';
    });
});

const cars = [
    { name: 'Toyota Camry', type: 'รถเก๋งหรู', price: '2,500', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900' },
    { name: 'Mercedes-Benz C-Class', type: 'รถยนต์พรีเมียม', price: '4,500', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900' },
    { name: 'BMW Series 5', type: 'รถยนต์หรู', price: '5,000', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900' },
    { name: 'Toyota Fortuner', type: 'รถ SUV', price: '3,500', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900' },
    { name: 'Toyota Yaris Ativ', type: 'รถเก๋งอีโคคาร์', price: '1,200', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900' },
    { name: 'Honda City', type: 'รถเก๋งซับคอมแพ็กต์', price: '1,300', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900' },
    { name: 'Nissan Almera', type: 'รถเก๋งอีโคคาร์', price: '1,200', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=900' },
    { name: 'Mazda 2', type: 'รถเก๋งซับคอมแพ็กต์', price: '1,400', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900' },
    { name: 'Toyota Corolla Altis', type: 'รถเก๋งซีดาน', price: '1,800', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900' },
    { name: 'Honda Civic', type: 'รถเก๋งซีดาน', price: '2,200', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=900' },
    { name: 'Mazda 3', type: 'รถเก๋งซีดาน', price: '2,200', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900' },
    { name: 'Honda Accord', type: 'รถเก๋งขนาดใหญ่', price: '3,500', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900' },
    { name: 'BMW Series 3', type: 'รถยนต์พรีเมียม', price: '4,500', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900' },
    { name: 'Toyota Yaris Cross', type: 'รถ SUV ครอสโอเวอร์', price: '2,000', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900' },
    { name: 'Toyota Corolla Cross', type: 'รถ SUV ครอสโอเวอร์', price: '2,200', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900' },
    { name: 'Honda HR-V', type: 'รถ SUV ครอสโอเวอร์', price: '2,000', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900' },
    { name: 'Honda CR-V', type: 'รถ SUV ครอบครัว', price: '3,000', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900' },
    { name: 'Mazda CX-30', type: 'รถ SUV ครอสโอเวอร์', price: '2,000', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900' },
    { name: 'Mazda CX-5', type: 'รถ SUV ครอบครัว', price: '2,800', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900' },
    { name: 'Isuzu MU-X', type: 'รถ PPV 7 ที่นั่ง', price: '3,200', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900' },
    { name: 'Mitsubishi Pajero Sport', type: 'รถ PPV 7 ที่นั่ง', price: '3,200', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900' },
    { name: 'Toyota Hilux Revo', type: 'รถกระบะ', price: '2,500', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900' },
    { name: 'Isuzu D-Max', type: 'รถกระบะ', price: '2,300', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900' },
    { name: 'Mitsubishi Triton', type: 'รถกระบะ', price: '2,300', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900' },
    { name: 'Suzuki Swift', type: 'รถแฮตช์แบ็ก', price: '1,200', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900' },
    { name: 'Suzuki XL7', type: 'รถครอบครัว 7 ที่นั่ง', price: '1,900', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900' },
    { name: 'BYD Dolphin', type: 'รถยนต์ไฟฟ้า', price: '1,800', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900' },
    { name: 'BYD Atto 3', type: 'รถ SUV ไฟฟ้า', price: '2,500', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900' },
    { name: 'MG4 Electric', type: 'รถแฮตช์แบ็กไฟฟ้า', price: '2,200', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900' },
    { name: 'Toyota Alphard', type: 'รถ MPV หรู 7 ที่นั่ง', price: '8,500', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900' }
];

function renderCars(container, carList) {
    if (!container) {
        return;
    }

    carList.forEach(car => {
        const card = document.createElement('article');
        card.className = 'car-card';

        const imageArea = document.createElement('div');
        imageArea.className = 'car-image';

        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.name;
        image.loading = 'lazy';
        image.addEventListener('error', function() {
            this.style.display = 'none';
            this.parentElement.style.background = '#ddd';
        });

        const tag = document.createElement('span');
        tag.className = 'car-tag';
        tag.textContent = car.type;
        imageArea.append(image, tag);

        const info = document.createElement('div');
        info.className = 'car-info';

        const name = document.createElement('h3');
        name.textContent = car.name;

        const bottom = document.createElement('div');
        bottom.className = 'car-bottom';

        const price = document.createElement('p');
        const amount = document.createElement('strong');
        amount.textContent = car.price;
        price.append(amount, document.createTextNode(' บาท '));

        const perDay = document.createElement('small');
        perDay.textContent = '/ วัน';
        price.append(perDay);

        const contact = document.createElement('a');
        contact.href = `contact.html?car=${encodeURIComponent(car.name)}`;
        contact.textContent = 'ดูรายละเอียด →';

        bottom.append(price, contact);
        info.append(name, bottom);
        card.append(imageArea, info);
        container.append(card);
    });
}

renderCars(document.querySelector('#featured-cars'), cars.slice(0, 4));
renderCars(document.querySelector('#all-cars'), cars);

const selectedCar = new URLSearchParams(window.location.search).get('car');
const selectedCarMessage = document.querySelector('#selected-car');
const selectedCarCard = document.querySelector('#selected-car-card');
const car = cars.find(item => item.name === selectedCar);

if (selectedCarMessage && selectedCarCard && car) {
    selectedCarMessage.textContent = 'รายละเอียดรถที่สนใจ';
    document.querySelector('#selected-car-image').src = car.image;
    document.querySelector('#selected-car-image').alt = selectedCar;
    document.querySelector('#selected-car-name').textContent = selectedCar;
    document.querySelector('#selected-car-type').textContent = car.type;
    document.querySelector('#selected-car-price').textContent = car.price;
    selectedCarCard.hidden = false;
}