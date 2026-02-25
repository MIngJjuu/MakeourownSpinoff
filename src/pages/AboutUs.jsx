import React, { useState } from 'react';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  // 갤러리 이미지 더미 데이터 (실제 이미지로 교체 필요)
  const galleryImages = [
    { id: 1, src: 'https://via.placeholder.com/200x150', alt: '활동 사진 1' },
    { id: 2, src: 'https://via.placeholder.com/200x150', alt: '활동 사진 2' },
    { id: 3, src: 'https://via.placeholder.com/200x150', alt: '활동 사진 3' },
    { id: 4, src: 'https://via.placeholder.com/200x150', alt: '활동 사진 4' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
     <main className="about-main">
        <div className="about-grid">
          {/* 1사분면: 동아리 소개글 */}
          <section className="quadrant quadrant-1">
            <h2 className="quadrant-title">스핀오프는요,</h2>
            <div className="intro-text-box">
              <p>
                SPINOFF는 영화를 사랑하는 사람들이 모여 함께 영화를 감상하고, 
                토론하며, 영화에 대한 깊이 있는 이해를 나누는 영화감상토론동아리입니다.
              </p>
              <p>
                우리는 매주 선정된 영화를 함께 보고, 발제를 통해 영화의 주제, 연출, 
                스토리 등을 다각도로 분석합니다. 영화를 단순히 보는 것을 넘어서, 
                영화가 담고 있는 메시지와 예술적 가치를 함께 탐구합니다.
              </p>
              <p>
                다양한 장르와 시대의 영화를 접하며, 영화에 대한 안목을 키우고 
                동료들과의 깊이 있는 대화를 통해 성장하는 것이 우리의 목표입니다.
              </p>
            </div>
          </section>

          {/* 2사분면: 동아리 로고 */}
          <section className="quadrant quadrant-2">
            <div className="logo-container">
              <img 
                src="/images/logo.png" 
                alt="Spinoff Logo" 
                className="club-logo"
              />
            </div>
          </section>

          {/* 3사분면: 활동 소개 (리스트) */}
          <section className="quadrant quadrant-3">
            <h2 className="quadrant-title">활동 소개</h2>
            <ul className="activity-list">
              <li>
                <strong>오리엔테이션</strong>
                <p>학기 초, 모든 회원들이 모여 간단한 오리엔테이션을 진행합니다.</p>
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
                <p>학기 종료 시, 모든 동아리원들과 함께하는 종강총회를 진행합니다.</p>
              </li>
            </ul>
          </section>

          {/* 4사분면: 활동 사진 (포토 갤러리) */}
          <section className="quadrant quadrant-4">
            <h2 className="quadrant-title">활동 사진</h2>
            <div className="photo-gallery-grid">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 이미지 확대 모달 */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button className="modal-close" onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
  );
}

export default AboutUs;