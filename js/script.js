document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Logic ---
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/80', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-white/80');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) toggleMenu();
        });
    });

    const teamGrid = document.getElementById('team-grid');
    const modal = document.getElementById('team-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');

    const teamData = {
        "1": { name: "Satyam Patil", role: "Chair", img: "https://ui-avatars.com/api/?name=Satyam+Patil&background=1e3a8a&color=fff&size=500" },
        "2": { name: "Prasad Chitnis", role: "Vice-chair", img: "https://ui-avatars.com/api/?name=Prasad+Chitnis&background=3b82f6&color=fff&size=500" },
        "3": { name: "Sahil Patil", role: "Secretary", img: "https://ui-avatars.com/api/?name=Sahil+Patil&background=f59e0b&color=fff&size=500" },
        "4": { name: "Prajol Hundre", role: "Treasurer", img: "https://ui-avatars.com/api/?name=Prajol+Hundre&background=10b981&color=fff&size=500" },
        "5": { name: "Sakshi Natakle", role: "Web Master", img: "https://ui-avatars.com/api/?name=Sakshi+Natakle&background=8b5cf6&color=fff&size=500" },
        "6": { name: "Yadnesh Shivpuje", role: "Web Team", img: "https://ui-avatars.com/api/?name=Yadnesh+Shivpuje&background=6b7280&color=fff&size=500" },
        "7": { name: "Swaranjali Jadhav", role: "Web Team", img: "https://ui-avatars.com/api/?name=Swaranjali+Jadhav&background=6b7280&color=fff&size=500" },
        "8": { name: "Abhijeet Patil", role: "Social Media (Lead)", img: "https://ui-avatars.com/api/?name=Abhijeet+Patil&background=ef4444&color=fff&size=500" },
        "9": { name: "Durwank Mahajan", role: "Public Relation (Lead)", img: "https://ui-avatars.com/api/?name=Durwank+Mahajan&background=06b6d4&color=fff&size=500" },
        "10": { name: "Riya Kamble", role: "PR Team", img: "https://ui-avatars.com/api/?name=Riya+Kamble&background=0ea5e9&color=fff&size=500" },
        "11": { name: "Shreya Ranade", role: "PR Team", img: "https://ui-avatars.com/api/?name=Shreya+Ranade&background=0ea5e9&color=fff&size=500" },
        "12": { name: "Mrunal Patil", role: "Management (Lead)", img: "https://ui-avatars.com/api/?name=Mrunal+Patil&background=f97316&color=fff&size=500" },
        "13": { name: "Sonali Patil", role: "Management Team", img: "https://ui-avatars.com/api/?name=Sonali+Patil&background=fbbf24&color=fff&size=500" },
        "14": { name: "Shubhada Bahirat", role: "Management Team", img: "https://ui-avatars.com/api/?name=Shubhada+Bahirat&background=fbbf24&color=fff&size=500" }
    };

    // Render team grid
    let delay = 100;
    for (const [id, member] of Object.entries(teamData)) {
        const cardHTML = `
            <div class="team-card cursor-pointer group reveal-up active" data-member="${id}" style="transition-delay: ${delay}ms;">
                <div class="aspect-square rounded-3xl overflow-hidden bg-gray-200 mb-4 relative shadow-md group-hover:shadow-xl transition-all duration-500 anti-gravity-card">
                    <img src="${member.img}" alt="${member.role}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span class="text-white text-sm font-medium">View Profile</span>
                    </div>
                </div>
                <div class="text-center">
                    <h4 class="font-bold text-gray-900 text-lg">${member.name}</h4>
                    <p class="text-secondary text-sm font-medium">${member.role}</p>
                </div>
            </div>
        `;
        teamGrid.insertAdjacentHTML('beforeend', cardHTML);
        delay += 50;
        if (delay > 400) delay = 100;
    }

    const teamCards = document.querySelectorAll('.team-card');

    const openModal = (id) => {
        const data = teamData[id];
        if (!data) return;

        modalImg.src = data.img;
        modalName.textContent = data.name;
        modalRole.textContent = data.role;

        modal.classList.remove('pointer-events-none');
        document.body.classList.add('modal-open');

        requestAnimationFrame(() => {
            modalBackdrop.classList.remove('opacity-0');
            modalBackdrop.classList.add('opacity-100');
            
            modalContent.classList.remove('translate-y-full', 'md:translate-y-8', 'md:scale-95', 'opacity-0');
            modalContent.classList.add('translate-y-0', 'md:scale-100', 'opacity-100');
        });
    };

    const closeModal = () => {
        modalBackdrop.classList.remove('opacity-100');
        modalBackdrop.classList.add('opacity-0');
        
        modalContent.classList.remove('translate-y-0', 'md:scale-100', 'opacity-100');
        modalContent.classList.add('translate-y-full', 'md:translate-y-8', 'md:scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('pointer-events-none');
            document.body.classList.remove('modal-open');
        }, 400);
    };

    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-member');
            openModal(id);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
});
