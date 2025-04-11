document.addEventListener('DOMContentLoaded', function() {
    // Carrusel de imágenes
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-avance del carrusel cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Mostrar/ocultar recursos
    const toggleBtn = document.getElementById('toggle-resources');
    const resources = document.getElementById('resources');
    
    toggleBtn.addEventListener('click', function() {
        resources.classList.toggle('hidden');
        toggleBtn.textContent = resources.classList.contains('hidden') ? 
            'Mostrar recursos adicionales' : 'Ocultar recursos';
    });
    
    // Efecto de scroll suave para las secciones
    document.querySelectorAll('article h3').forEach(heading => {
        heading.addEventListener('click', function() {
            this.parentElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Animación al cargar
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // Estilos iniciales para la animación
    articles.forEach(article => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});