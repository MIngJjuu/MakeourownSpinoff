import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const CARDS_PER_SLIDE = 4;

  const activities = [
    { 
      id: 1, 
      image: '/images/activity_ot.jpg', 
      title: 'OT',
      description: '학기 초, 모든 회원들이 모여 OT를 진행합니다.(참여가 어려울 시 활동이 제한될 수 있습니다.)',
      type: 'activity'
    },
    { 
      id: 2, 
      image: '/images/activity_presentation1.jpg', 
      title: '발제 및 토론',
      description: '발제자의 영화 발제자료를 기반으로 월요일 19~22시까지 토론을 진행합니다.',
      type: 'activity'
    },
    { 
      id: 3, 
      image: '/images/activity_presentation2.jpg', 
      title: '발제 및 토론',
      description: '영화에 대한 깊이 있는 분석과 토론을 통해 다양한 관점을 공유합니다.',
      type: 'activity'
    },
    { 
      id: 4, 
      image: '/images/activity_mt.jpg', 
      title: 'MT',
      description: '영화 게임 등을 통해 부원들과 즐거운 시간을 보냅니다.',
      type: 'activity'
    },
    { 
      id: 5, 
      image: '/images/activity_lightning.jpg', 
      title: '번개모임',
      description: 'GV, 특별 상영회 등 함께하고 싶은 순간을 부원들과 함께할 수 있습니다.',
      type: 'activity'
    },
    { 
      id: 6, 
      image: '/images/activity_closing.jpg', 
      title: '종강총회',
      description: '모든 발제 종료 후 동아리원들과 함께하는 종강총회를 진행합니다.',
      type: 'activity'
    },
    { 
      id: 7, 
      image: '/images/5th_magazine.png', 
      title: '웹매거진',
      description: '웹매거진을 발행하여 한 기수 동안의 활동을 기록하고 공유합니다.',
      type: 'magazine',
      link: 'https://drive.google.com/file/d/18Wun2QRtT2tsKKCFk-wgP2698ck27qCb/view?usp=sharing'
    },
    { 
      id: 8, 
      image: '/images/gathering-preview.jpg', 
      title: '더 많은 활동 보러가기',
      description: '클릭 시 6기 발제 게시물로 이동됩니다.',
      type: 'cta',
      link: '/gathering'
    },
  ];

  // 카드 4개씩 슬라이드 단위로 나누기
  const slides = [];
  for (let i = 0; i < activities.length; i += CARDS_PER_SLIDE) {
    slides.push(activities.slice(i, i + CARDS_PER_SLIDE));
  }

  const handleClick = (activity) => {
    if (activity.type === 'magazine' && activity.link) {
      window.open(activity.link, '_blank');
    }
  };

  const renderCard = (activity) => {
    if (activity.type === 'cta') {
      return (
        <Link
          key={activity.id}
          to={activity.link}
          className="activity-card activity-card-cta"
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
          <div className={`activity-back activity-back-cta ${hoveredId === activity.id ? 'show' : ''}`}>
            <div className="activity-description">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        </Link>
      );
    }

    return (
      <div
        key={activity.id}
        className="activity-card"
        onClick={() => handleClick(activity)}
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
        <div className={`activity-back ${hoveredId === activity.id ? 'show' : ''}`}>
          <div className="activity-description">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        </div>
      </div>
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