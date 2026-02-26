import React, { useState } from 'react';
import '../App.css';
import './AboutUs.css';

function AboutUs() {
  // 갤러리 이미지 더미 데이터 (사용하지 않으면 제거 가능)
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
        {/* 상단: 소개글 */}
        <div className="about-section section-intro">
          <h2 className="section-title">스핀오프는요,</h2>
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
        </div>

        {/* 중단 2열 */}
        <div className="about-middle-row">
          {/* 좌중단: 이미지 */}
          <div className="about-section section-left">
            <div className="image-container">
              <img src="/images/club-image.jpg" alt="Club" className="section-image" />
            </div>
          </div>

          {/* 우중단: 활동 내용 */}
          <div className="about-section section-right">
            <h2 className="section-title">활동 소개</h2>
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
          </div>
        </div>

        {/* 하단: 추가 소개 섹션 */}
        <div className="about-section section-bottom">
          <h2 className="section-title">추가 정보</h2>
          <div className="intro-text-box">
            <p>추가 소개 내용...</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;