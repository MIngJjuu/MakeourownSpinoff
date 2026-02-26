import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  // 슬라이드 자동 넘김을 위한 state
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/images/activity1.jpg', title: '정기 상영회' },
    { id: 2, image: '/images/activity2.jpg', title: '발제 및 토론' },
    { id: 3, image: '/images/activity3.jpg', title: 'MT & 친목' },
    { id: 4, image: '/images/activity4.jpg', title: '번개 모임' },
  ];

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="about-main">
      <div className="about-grid">
        {/* 상단: 소개글 */}
        <div className="about-section section-intro">
          <h2 className="section-title">스핀오프는요</h2>
          <div className="intro-text-box">
            <p>
              SPINOFF는 영화를 사랑하는 사람들이 모여 함께 영화를 감상하고, 
              토론하며, 영화에 대한 깊이 있는 이해를 나누는 영화감상토론동아리입니다.
            </p>
            <p>
              "Spinoff"는 '원작에서 파생된 영화나 드라마'를 뜻하는 용어로 
              작품에 대한 다양한 해석을 공유하며 영화에 대해 깊이 이해하고, 
              동아리 부원 각자의 스핀오프를 만들어내는 것을 목표로 삼고 있습니다.
            </p>
            <p>
              자발적이고 자유로운 토론 문화를 추구하며, 영화를 다양한 시각에서 비평하는 것을 지향하므로 
              뚜렷한 주관과, 타인을 존중하는 태도를 겸비하신 분과 함께하고 싶습니다.
            </p>
          </div>
        </div>

        {/* 중단 2열 */}
        <div className="about-middle-row">
          {/* 좌중단: 슬라이드 이미지 */}
          <div className="about-section section-left">
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-title">
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              ))}

              {/* 인디케이터 (점) */}
              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 우중단: 활동 내용 */}
          <div className="about-section section-right">
            <h2 className="section-title">활동 소개</h2>
            <ul className="activity-list">
              <li>
                <strong>OT</strong>
                <p>학기 초, 모든 회원들이 모여 OT를 진행합니다.(참여가 어려울 시 활동이 제한될 수 있습니다.)</p>
              </li>
              <li>
                <strong>발제 및 토론</strong>
                <p>발제자의 영화 발제자료를 기반으로 월요일 19~22시까지 토론을 진행합니다.</p>
              </li>
              <li>
                <strong>MT</strong>
                <p>영화 게임 등을 통해 부원들과 즐거운 시간을 보냅니다.</p>
              </li>
              <li>
                <strong>번개모임</strong>
                <p>GV, 특별 상영회 등 함께하고 싶은 순간을 부원들과 함께할 수 있습니다.</p>
              </li>
              <li>
                <strong>종강총회</strong>
                <p>모든 발제 종료 후 동아리원들과 함께하는 종강총회를 진행합니다.</p>
              </li>
              <li>
                <strong>매거진 발행</strong>
                <p>웹매거진을 발행하여 한 기수 동안의 활동을 기록하고 공유합니다.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단: 추가 정보 섹션 */}
        <div className="about-section section-bottom">
          <h2 className="section-title">활동 확인하기</h2>
          
          <div className="bottom-content">
            <div className="magazine-cards-wrapper">
              <a 
                href="https://drive.google.com/file/d/18Wun2QRtT2tsKKCFk-wgP2698ck27qCb/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-card"
              >
                <div className="info-card-image">
                  <img src="/images/5th_magazine.png" alt="5기 매거진" />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">5기 매거진 보러가기</h3>
                  <p className="info-card-desc">5기 활동 기록과 발제 내용을 담은 매거진입니다.</p>
                </div>
              </a>
              
              <a 
                href="https://magazine-link-2.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-card"
              >
                <div className="info-card-image">
                  <img src="/images/magazine2.jpg" alt="6기 매거진" />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">6기 매거진</h3>
                  <p className="info-card-desc">6기 매거진은 업데이트 예정입니다.</p>
                </div>
              </a>

              <Link to="/gathering" className="info-card info-card-cta">
                <div className="info-card-image">
                  <img src="/images/gathering-preview.jpg" alt="발제 게시물" />
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">발제 게시물 보러가기</h3>
                  <p className="info-card-desc">회원들의 영화 발제를 둘러보세요.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;