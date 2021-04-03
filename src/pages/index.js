import React from 'react';

function Home() {
    return (
        <div id="home">
            <div className="cr-hero-section section">
                <div className="container">
                    <div className="row">
                        <div className="co-hero-slide-content-1 cr-hero-content txt-center">
                            <h4>Welcome Home</h4>
                            <h1>Home for those who Believe</h1>
                            <a href="#intro" className="btn btn-border-white btn-hover-cr">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="overlay" />
            </div>

            <div id="about-me" className="mp-about-section section pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="mp-section-title text-center col-12 mb-60" data-name="Weemar">
                            <h1 className="m2-txt2 text-primary">About me</h1>
                        </div>

                        <div className="mb-about-content text-center col-md-10 col-md-offset-1 col-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non facilisis tortor. Donec euismod libero eget ipsum ultricies, vel tincidunt turpis auctor. Etiam lorem ex, cursus vel lacinia vel, cursus ut felis. Pellentesque id libero sollicitudin, sagittis quam sit amet, congue tortor. Aliquam mollis, eros vitae varius dapibus, ligula odio fermentum magna,</p>
                        </div>

                    </div>
                </div>
            </div>

            <div id="intro" className="co3-feature-project-section section pt-130 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="co3-feature-project-content col-md-6 col-12 mb-50">
                            <h4 className="m2-txt2 text-primary">For those who believe</h4>
                            <p> Meyakini sesuatu adalah keniscayaan. Sebuah keharusan untuk kita bisa meniti hidup ini dengan nafas lega. Dan kelak meninggalkannya pun dengan hati yang rela.</p>
                            <p>Entah kalian seorang atheist, agnostic, atau believer, kita punya satu hal yang sama : kita tidak mau meyakini sesuatu yang salah. Kita ingin membuktikan apa yang kita ikuti ini benar.</p>
                            <p>Dan karena itulah saya berbagi cerita. Cerita tentang diri kita semua : dulu, kini dan nanti.</p>
                        </div>

                        <div className="col-md-6 col-12 mb-50">
                            <div className="cr-about-video">
                                <img src="/assets/img/teaser_thumbnail.jpg" alt="" />
                                <a href="/assets/videos/teaser_youtube.mp4" className="video-popup">
                                    <i className="fa fa-play-circle"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="video" className="co-portfolio-section-1 section pt-130 pb-110 bg-gray">
                <div className="container">
                    <div className="row" style={{ display: "block" }}>
                        <div className="col-xs-12 text-center mb-70">
                            <div className="co-section-title-2">
                                <h1>QnA</h1>
                                <p>Nam eget urna nec lectus feugiat bibendum quis at quam. Aliquam id congue tellus, et tempus lacus. Curabitur convallis faucibus ex, a congue.</p>
                            </div>
                        </div>
                    </div>

                    <div className="co-isotop-grid-1 isotop-grid row">
                        <div className="co-isotop-item-1 isotop-item branding web col-md-4 col-sm-6 col-xs-12 mb-30">
                            <a href="/assets/videos/teaser_youtube.mp4" className="video-popup">
                                <img src="/assets/img/teaser_thumbnail.jpg" alt="" />
                                <span className="content">
                                    <i className="fa fa-play-circle"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
