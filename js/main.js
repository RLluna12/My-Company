// ============================================
// EFEITO DE GALÁXIA CRIATIVA COM FOGUETES
// ============================================


function createTwinklingStars() {
    createGalaxyBackground();
}

// ============================================
// SISTEMA PLANETÁRIO NA SEÇÃO DE PROMOÇÕES
// ============================================
function createPromoBackgroundAnimation() {
    const promoContainer = document.querySelector('.promo-canvas-container');
    if (!promoContainer) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.cssText = `
        display: block;
        width: 100%;
        height: 100%;
    `;

    promoContainer.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = promoContainer.offsetWidth;
        canvas.height = promoContainer.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ===== PLANETA CENTRAL =====
    const centralPlanet = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 40,
        color: '#06b6d4',
        rotation: 0,
        getX() { return this.x; },
        getY() { return this.y; }
    };

  

    // ===== PARTÍCULAS DE ENERGIA =====
    class EnergyParticle {
        constructor() {
            this.angle = Math.random() * Math.PI * 2;
            this.distance = Math.random() * 200 + 50;
            this.speed = Math.random() * 0.005 + 0.002;
            this.size = Math.random() * 2 + 1;
            this.opacity = 0.8;
            this.color = ['rgba(6, 182, 212,', 'rgba(236, 72, 153,', 'rgba(251, 191, 36,'][Math.floor(Math.random() * 3)];
        }

        update() {
            this.angle += this.speed;
            this.distance *= 0.98;
            this.opacity *= 0.95;
        }

        draw() {
            if (!ctx) return;
            const x = centralPlanet.x + Math.cos(this.angle) * this.distance;
            const y = centralPlanet.y + Math.sin(this.angle) * this.distance;

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 3);
            gradient.addColorStop(0, this.color + this.opacity + ')');
            gradient.addColorStop(1, this.color + '0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, this.size * 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = this.color + (this.opacity * 0.9) + ')';
            ctx.beginPath();
            ctx.arc(x, y, this.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
        }

        isAlive() {
            return this.opacity > 0.05;
        }
    }

    let energyParticles = [];

    // ===== CONSTRUTOR HOLOGRÁFICO =====
    class DataStream {
        constructor(fromX, fromY, toX, toY) {
            this.startX = fromX;
            this.startY = fromY;
            this.endX = toX;
            this.endY = toY;
            this.progress = 0;
            this.speed = Math.random() * 0.02 + 0.01;
        }

        update() {
            this.progress += this.speed;
        }

        draw() {
            if (!ctx) return;
            const gradient = ctx.createLinearGradient(this.startX, this.startY, this.endX, this.endY);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
            gradient.addColorStop(this.progress * 0.5, 'rgba(6, 182, 212, 0.8)');
            gradient.addColorStop(this.progress, 'rgba(236, 72, 153, 0.6)');
            gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(
                this.startX + (this.endX - this.startX) * this.progress,
                this.startY + (this.endY - this.startY) * this.progress
            );
            ctx.stroke();
        }

        isComplete() {
            return this.progress >= 1;
        }
    }

    let dataStreams = [];
    let streamCounter = 0;

    // ===== LOOP DE ANIMAÇÃO =====
    function animate() {
        // Background transparente para não cobrir o fundo amarelo
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Atualiza posição do planeta central (rotação visual)
        centralPlanet.rotation += 0.002;

        // ===== DESENHAR ÓRBITAS =====
        satellites.forEach(sat => {
            // Órbita estática
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centralPlanet.x, centralPlanet.y, sat.distance, 0, Math.PI * 2);
            ctx.stroke();
        });

      
        
        // ===== DESENHAR PLANETA CENTRAL =====
        // Glow externo
        const mainGlow = ctx.createRadialGradient(centralPlanet.x, centralPlanet.y, 0, centralPlanet.x, centralPlanet.y, centralPlanet.radius * 3.5);
        mainGlow.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
        mainGlow.addColorStop(0.5, 'rgba(6, 182, 212, 0.3)');
        mainGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = mainGlow;
        ctx.beginPath();
        ctx.arc(centralPlanet.x, centralPlanet.y, centralPlanet.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Planeta com gradiente
        const planetGradient = ctx.createRadialGradient(
            centralPlanet.x - 10, centralPlanet.y - 10, 0,
            centralPlanet.x, centralPlanet.y, centralPlanet.radius
        );
        planetGradient.addColorStop(0, 'rgba(6, 182, 212, 1)');
        planetGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.9)');
        planetGradient.addColorStop(1, 'rgba(124, 58, 237, 0.7)');

        ctx.fillStyle = planetGradient;
        ctx.beginPath();
        ctx.arc(centralPlanet.x, centralPlanet.y, centralPlanet.radius, 0, Math.PI * 2);
        ctx.fill();

        // Anéis rotativos
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
        ctx.lineWidth = 2;
        ctx.save();
        ctx.translate(centralPlanet.x, centralPlanet.y);
        ctx.rotate(centralPlanet.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, centralPlanet.radius * 2.5, centralPlanet.radius * 0.8, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Centro brilhante
        const coreGradient = ctx.createRadialGradient(centralPlanet.x, centralPlanet.y, 0, centralPlanet.x, centralPlanet.y, centralPlanet.radius * 0.3);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(centralPlanet.x, centralPlanet.y, centralPlanet.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // ===== DESENHAR STREAMS DE DADOS =====
        dataStreams = dataStreams.filter(stream => !stream.isComplete());
        dataStreams.forEach(stream => {
            stream.update();
            stream.draw();

            // Cria partículas ao longo do stream
            if (Math.random() < 0.5) {
                energyParticles.push(new EnergyParticle());
            }
        });

        // ===== DESENHAR PARTÍCULAS DE ENERGIA =====
        energyParticles = energyParticles.filter(p => p.isAlive());
        energyParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Inicia a animação de promoções quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        createPromoBackgroundAnimation();
    });
} else {
    createPromoBackgroundAnimation();
}

// Adiciona a animação de twinkle ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.2;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.3);
        }
    }

    @keyframes moonGlow {
        0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
        }
    }
`;
document.head.appendChild(style);

// Inicia o efeito de estrelas quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTwinklingStars);
} else {
    createTwinklingStars();
}

// ============================================
// FIM DO EFEITO DE ESTRELAS
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Animated counter for statistics
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Observe stat numbers for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.textContent === '0') {
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Service cards hover effect with tilt
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `translateY(-15px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const service = document.getElementById('service')?.value;
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        showMessage('Por favor, preencha todos os campos obrigatórios!', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Por favor, insira um email válido!', 'error');
        return;
    }

    if (phone && phone.length < 10) {
        showMessage('Por favor, insira um telefone válido!', 'error');
        return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('.btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
    submitBtn.disabled = true;

    // Traduzir nome do serviço
    const serviceNames = {
        'cardapio': 'Cardápio Digital',
        'site': 'Site Profissional',
        'loja': 'Loja Virtual',
        'agendamento': 'Sistema de Agendamento',
        'linkbio': 'Link Bio',
        'personalizado': 'Sistema Personalizado'
    };

    const serviceName = serviceNames[service] || service;

    // Criar mensagem para WhatsApp
    let whatsappMessage = `🚀 *SOLICITAÇÃO DE ORÇAMENTO*\n\n`;
    whatsappMessage += `👤 *Nome:* ${name}\n`;
    whatsappMessage += `📧 *Email:* ${email}\n`;
    whatsappMessage += `📱 *WhatsApp:* ${phone || 'Não informado'}\n`;
    whatsappMessage += `💼 *Serviço:* ${serviceName}\n\n`;
    whatsappMessage += `📝 *Mensagem:*\n${message}\n\n`;
    whatsappMessage += `_Enviado através do site DevLuna_`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp (formato: 55 + DDD + número)
    const whatsappNumber = '5511937701183';
    
    // Criar URL do WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Aguardar 1 segundo e redirecionar
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Mostrar mensagem de sucesso
        showMessage('✅ Redirecionando para o WhatsApp...', 'success');

        // Abrir WhatsApp em nova aba
        window.open(whatsappURL, '_blank');

        // Reset form após 2 segundos
        setTimeout(() => {
            contactForm.reset();
        }, 2000);

        // Track conversion (você pode adicionar Google Analytics aqui)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID',
                'value': 1.0,
                'currency': 'BRL'
            });
        }
    }, 1000);
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show message function
function showMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const message = document.createElement('div');
    message.className = type === 'success' ? 'success-message' : 'error-message';
    message.textContent = text;

    // Add error message styles if needed
    if (type === 'error') {
        message.style.background = '#ef4444';
    }

    document.body.appendChild(message);

    // Show message
    setTimeout(() => {
        message.classList.add('show');
    }, 100);

    // Hide message after 4 seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 4000);
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add cursor trail effect (optional - can be removed if too much)
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length === 0) {
    // Create cursor trail circles
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 9999;
        `;
        document.body.appendChild(circle);
    }
}

const allCircles = document.querySelectorAll('.circle');

allCircles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    allCircles.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.opacity = (20 - index) / 40;

        circle.x = x;
        circle.y = y;

        const nextCircle = allCircles[index + 1] || allCircles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// Console message for developers
console.log('%c🚀 DevLuna - Seu Negócio Online!', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c✨ Quer um site como este? Entre em contato!', 'color: #ec4899; font-size: 16px;');

// Promo Timer Countdown
// ============================================
// COMO ALTERAR A DATA DO CRONÔMETRO:
// 1. Abra este arquivo (js/main.js)
// 2. Encontre a linha: const endDate = new Date();
// 3. Logo abaixo dela está: endDate.setDate(endDate.getDate() + 3);
// 4. Altere o número "3" para quantos DIAS você quer adicionar
//    Exemplos:
//    - endDate.setDate(endDate.getDate() + 7);  = 7 dias
//    - endDate.setDate(endDate.getDate() + 14); = 14 dias
//    - endDate.setDate(endDate.getDate() + 1);  = 1 dia
// 5. Salve o arquivo e recarregue o site
// ============================================
function startPromoTimer() {
    // Define o tempo final (3 dias a partir de agora para exemplo)
    // ALTERE O NÚMERO "3" ABAIXO PARA MUDAR OS DIAS DA PROMOÇÃO
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);  // ← ALTERE ESTE NÚMERO
    endDate.setHours(23, 59, 59, 999);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            // Timer acabou - reinicia para mais 7 dias
            endDate.setDate(endDate.getDate() + 7);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza os elementos se existirem
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza imediatamente e depois a cada segundo
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Inicia o timer quando a página carregar
if (document.getElementById('days')) {
    startPromoTimer();
}

// Animate numbers on scroll for any counter
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = end.toLocaleString('pt-BR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        }
    }, 16);
}

// WhatsApp Float Button - adicionar classe quando rolar
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.pointerEvents = 'auto';
        }
    });
}

// Lazy load de imagens (se adicionar imagens reais depois)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll progress bar
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #ec4899);
        z-index: 9999;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Chamar função de progress bar
createScrollProgress();

// Adicionar animação de entrada suave nos cards de promoção
const promoCards = document.querySelectorAll('.promo-card');
promoCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});
