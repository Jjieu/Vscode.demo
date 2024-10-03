window.addEventListener('scroll', () => {
    const button = document.querySelector('.animation');
    const rect = button.getBoundingClientRect();
    /*화면에 3/4 이상 보이면 visible 클래스 추가 */
    if (rect.top < window.innerHeight * 0.75) {
        button.classList.add('visible');
    }
});

const menuItems = document.querySelectorAll('.menu-item');

        // 클릭 이벤트 리스너 추가
        menuItems.forEach(item => {
            item.addEventListener('click', function(event) {
                // 기본 링크 클릭 동작 방지
                event.preventDefault();

                // 모든 메뉴 항목에서 active 클래스 제거
                menuItems.forEach(link => link.classList.remove('active'));

                // 클릭한 메뉴 항목에 active 클래스 추가
                this.classList.add('active');
            });
        });