
    const slider = document.querySelector(".slider");
    const indicators = document.querySelector(".indicators");
    let currentIndex = 0;
    let autoSlideInterval;
    let isTransitioning = false;

    for (let i = 0; i < 5; i++) {
        const dot = document.createElement("div");
        dot.classList.add("indicator");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(i, true);
            resetAutoSlide();
        });
        indicators.appendChild(dot);
    }

    function goToSlide(index, instant = false) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = index;
        slider.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${index * 100}vw)`;
        updateIndicators();
        setTimeout(() => isTransitioning = false, 500);
    }

    function nextSlide() {
        if (currentIndex === 5) {
            slider.style.transition = "none";
            slider.style.transform = "translateX(0vw)";
            currentIndex = 0;
            setTimeout(() => nextSlide(), 50);
        } else {
            goToSlide(currentIndex + 1);
        }
        resetAutoSlide();
    }

    function prevSlide() {
        if (currentIndex === 0) {
            slider.style.transition = "none";
            slider.style.transform = "translateX(-500vw)";
            currentIndex = 5;
            setTimeout(() => prevSlide(), 50);
        } else {
            goToSlide(currentIndex - 1);
        }
        resetAutoSlide();
    }

    function updateIndicators() {
        document.querySelectorAll(".indicator").forEach((dot, i) => {
            dot.classList.toggle("active", i === (currentIndex % 5));
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    });

    document.querySelector(".right").addEventListener("click", nextSlide);
    document.querySelector(".left").addEventListener("click", prevSlide);

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
// وظيفة لتطبيق التأثير عندما يصبح العنصر مرئيًا

  const elements = document.querySelectorAll('.slide-from-left, .slide-from-right');

  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-on-scroll');
      }
    });
}, { threshold: 0.3 });

  elements.forEach(el => scrollObserver.observe(el));
  document.getElementById('goTopag1').addEventListener('click', function(event) {
    event.preventDefault(); // منع الرابط من التمرير الفوري

    // إضافة تأخير (3 ثواني على سبيل المثال) قبل التمرير
    setTimeout(function() {
        // التمرير إلى القسم الأول
        document.getElementById('pag1').scrollIntoView({ behavior: 'smooth' });
    }, 3000); // تأخير 3 ثواني
});