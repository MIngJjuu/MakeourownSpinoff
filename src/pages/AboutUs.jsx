import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
// 1. 슬라이드 당 카드 개수를 상태로 관리 (기본값 4)
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  const activities = [
    { id: 1, image: '/images/OT.jpg', title: 'OT', description: '학기 초, 모든 회원들이 모여 OT를 진행합니다.', type: 'activity' },
    { id: 2, image: '/images/발제2.jpg', title: '발제 및 토론', description: '발제자의 영화 발제자료를 기반으로 월요일 19~22시까지 토론을 진행합니다.', type: 'activity' },
    { id: 3, image: '/images/발제자료.jpeg', title: '발제 안내', description: '발제자는 질문을 발제자료로 제작해 배포합니다.', type: 'activity' },
    { id: 4, image: '/images/MT.jpg', title: 'MT', description: '학기 중 진행되는 MT에서는 친목을 도모할 수 있습니다.', type: 'activity' },
    { id: 5, image: '/images/번개.jpg', title: '번개모임', description: 'GV, 특별 상영회 등을 함께할 수 있습니다.', type: 'activity' },
    { id: 6, image: '/images/종강총회.jpg', title: '종강총회', description: '모든 발제 종료 후 종강총회를 진행합니다.', type: 'activity' },
    { id: 7, image: '/images/5th_magazine.png', title: '웹매거진', description: '웹매거진을 발행하여 활동을 기록합니다.', type: 'magazine', link: 'https://drive.google.com/...' },
    { id: 8, image: '/images/logo_2.png', title: '더 많은 활동 보러가기', description: '클릭 시 6기 발제 게시물로 이동됩니다.', type: 'cta', link: '/gathering' },
  ];

// 2. 화면 너비에 따라 cardsPerSlide 변경하는 Effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(4);
      }
      // 화면 크기가 변할 때 인덱스 오류 방지를 위해 첫 슬라이드로 리셋 (선택사항)
      setCurrentSlide(0);
    };

    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. 변경된 cardsPerSlide를 기준으로 슬라이드 나누기
  const slides = [];
  for (let i = 0; i < activities.length; i += cardsPerSlide) {
    slides.push(activities.slice(i, i + cardsPerSlide));
  }

  const handleClick = (activity) => {
    if (activity.type === 'magazine' && activity.link) {
      window.open(activity.link, '_blank');
    }
  };

  const renderCard = (activity) => {
    const isCTA = activity.type === 'cta';
    const CardTag = isCTA ? Link : 'div';
    const cardProps = isCTA ? { to: activity.link } : { onClick: () => handleClick(activity) };

    return (
      <CardTag
        key={activity.id}
        {...cardProps}
        className={`activity-card ${isCTA ? 'activity-card-cta' : ''}`}
        onMouseEnter={() => setHoveredId(activity.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className={`activity-front ${hoveredId === activity.id ? 'hide' : ''}`}>
          <div className="activity-image">
            <img src={activity.image} alt={activity.title} />
          </div>
          <div className="activity-title">
            <h3>{activity.title}</h3>
          </div>
        </div>
        <div className={`activity-back ${isCTA ? 'activity-back-cta' : ''} ${hoveredId === activity.id ? 'show' : ''}`}>
          <div className="activity-description">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        </div>
      </CardTag>
    );
  };

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

        {/* 하단: 활동 갤러리 */}
        <div className="about-section section-gallery">
          <h2 className="section-title">활동 소개</h2>

          {/* 슬라이더 래퍼 */}
          <div className="gallery-slider-wrapper">
            <div
              className="activity-gallery"
              style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 24}px))` }}
            >
              {slides.map((slideCards, slideIndex) => (
                <div key={slideIndex} className="gallery-slide">
                  {slideCards.map((activity) => renderCard(activity))}
                </div>
              ))}
            </div>
          </div>

          {/* dot 버튼 */}
          <div className="gallery-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;