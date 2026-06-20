// Показать окно логина
function showLogin() {
    const name = prompt('👋 Введите ваше имя:', 'Гость');
    if (name && name.trim() !== '') {
        alert(`Добро пожаловать, ${name}! 🍳`);
    } else if (name !== null) {
        alert('Вход не выполнен. Вы можете продолжить как гость.');
    }
}

// Отправить форму обратной связи
function submitFeedback(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        alert('⚠️ Пожалуйста, заполните все поля формы!');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('⚠️ Пожалуйста, введите корректный email!');
        return;
    }
    
    alert(`✉️ Спасибо, ${name}! Ваше сообщение отправлено.\n\nОтвет придёт на ${email}`);
    form.reset();
}

// Показать информацию о рецепте
function showRecipe(name, description) {
    alert(`🍽 ${name}\n\n${description}\n\nХотите приготовить? Следите за обновлениями!`);
}

// Показать статью
function showArticle(title) {
    alert(`📖 ${title}\n\nПолная версия статьи появится в ближайшее время.\nСледите за обновлениями!`);
}

// Поиск по статьям (простая демонстрация)
function searchArticles(query) {
    const cards = document.querySelectorAll('.article-card');
    const searchText = query.toLowerCase().trim();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (searchText === '') {
            card.style.display = 'block';
        } else if (text.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Показать уведомление при клике на тег
document.addEventListener('DOMContentLoaded', function() {
    // Клик на теги
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            alert(`🏷️ Вы выбрали тег: ${this.textContent}`);
        });
    });
    
    // Клик на подборки
    const collections = document.querySelectorAll('.collection-list li');
    collections.forEach(item => {
        item.addEventListener('click', function() {
            alert(`📚 Вы выбрали подборку: ${this.textContent}`);
        });
    });
    
    // Клик на категории
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(cat => {
        cat.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`📂 Вы выбрали категорию: ${this.textContent.trim()}`);
        });
    });
    
    // Клик на соцсети
    const socials = document.querySelectorAll('.social span');
    socials.forEach(social => {
        social.addEventListener('click', function() {
            alert('🌐 Мы в социальных сетях! Следите за нами.');
        });
    });
});