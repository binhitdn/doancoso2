import "./scss/HandBook.scss"
function HandBook() {
    return (
        <div class="handbook-page">
            <div class="handbook-page__content">
                <div class="handbook-page__content__title">
                    <h4 class="title">Cẩm Nang</h4>
                    <p class="description">Nơi chúng tôi tổng hợp những cẩm nang,chia sẻ bổ ích giúp cuộc sống của mọi người trở nên khỏe mạnh hạnh phúc hơn.</p>
                </div>
                <div class="handbook-page__content__list">
                    <div class="handbook-page__content__list__item">
                        
                        <div class="item-content-b">
                        <div class="item__content">
                            <h6 class="item__content__title">Cách giúp cuộc sống trở nên tốt đẹp hơn</h6>
                            <p class="item__content__description">Cuộc sống mà</p>
                            <div class="item__content__button">
                                <button class="btn btn-primary">Xem chi tiết</button>
                            </div>
                        </div>
                        <div class="item__image">
                            <img src="https://img4.thuthuatphanmem.vn/uploads/2019/11/17/hinh-anh-hanh-phuc-trong-tinh-yeu_113632807.jpg" alt="" />
                        </div>
                        </div>
                        <div class="interaction">
                            <span class="view interaction-item">24 <i class="fa-duotone fa-eye"></i></span>
                            <span class="comment interaction-item">3 <i class="fa-duotone fa-comments"></i></span>
                            <span class="time interaction-item">1 ngày trước <i class="fa-duotone fa-timer"></i></span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    

    );
}
export default HandBook;