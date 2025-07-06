const zemsSlider_basic = (data= false) => {
    const masterSlider = document.querySelectorAll('.zems_slider');

    var slideInterval = 3000; // 3 seconds
    masterSlider.forEach(mainSlider => {
        const slider = mainSlider.querySelector('.zems_slider_container');
        const slides = slider.querySelectorAll('.zems_slide');
        // console.log(mainSlider.dataset);
        let currentSlideIndex = 0;
        var slidesPerPage = 3;
        var slideSetting = {slideWidth:0, slideGap:0}
        if(mainSlider.dataset.timeout){
            slideInterval = mainSlider.dataset.timeout
        } else {
            slideInterval = 3000;
        }
        if(mainSlider.dataset.slide){
            slidesPerPage = mainSlider.dataset.slide
            slideSetting.slideWidth = mainSlider.offsetWidth / slidesPerPage
        }
        var slideGap = 0
        if(mainSlider.dataset.gap){
            slideGap = mainSlider.dataset.gap
            slideSetting.slideWidth = (mainSlider.offsetWidth / slidesPerPage) - slideGap
        }
        slider.style.gap = slideGap+"px"
        var slidePager = document.createElement('div')
        slidePager.className = 'zems_slide_pager'
        slides.forEach((element, i) => {
            element.style.width = slideSetting.slideWidth+"px"
            const slideDot = document.createElement('li')
            slidePager.appendChild(slideDot)
        })
        function showSlide(index) {
            const translateX = -index * (slides[0].offsetWidth + parseInt(slideGap));
            slider.style.transform = `translateX(${translateX}px)`;
        }
        function prevSlide() {
            console.log(currentSlideIndex);
            currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - slidesPerPage;
            const translateX = -currentSlideIndex * (slides[0].offsetWidth + parseInt(slideGap));
            slider.style.transform = `translateX(${translateX}px)`;
        }
        function nextSlide() {

            currentSlideIndex = (currentSlideIndex < slides.length - slidesPerPage) ? currentSlideIndex + 1 : 0;
            showSlide(currentSlideIndex);
        }
        if(mainSlider.dataset.play && mainSlider.dataset.play == 'on'){
            // Start autoplay
            let autoplayTimer = setInterval(nextSlide, slideInterval);
        }
        if(mainSlider.dataset.control && mainSlider.dataset.control == 'on'){
            const pagerControl = document.createElement('div')
            pagerControl.className = 'zems_control'
            const pre = document.createElement('div')
            pre.className = 'prev-btn'
            const preContent = document.createTextNode('←')
            pre.appendChild(preContent)
            pre.addEventListener('click', ()=>{
                prevSlide()
            })
            pagerControl.appendChild(pre)
            const next = document.createElement('div')
            next.className = 'next-btn'
            const nextContent = document.createTextNode('→')
            next.appendChild(nextContent)
            next.addEventListener('click', () => {
                nextSlide()
            });
            pagerControl.appendChild(next)
            mainSlider.insertBefore(pagerControl, mainSlider.childNodes[0])
        }
        if(mainSlider.dataset.pager && mainSlider.dataset.pager == 'on'){
            mainSlider.insertBefore(slidePager, mainSlider.childNodes[0])
        }
        showSlide(currentSlideIndex);
    })
}
export { zemsSlider_basic}
