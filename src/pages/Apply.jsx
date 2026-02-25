import { useState } from "react";
import "./Apply.css";

// ⬇️ 실제 링크로 교체하세요
const GOOGLE_FORM_URL = "https://forms.gle/c6qJUrf8Gqp4ZWz99";
const OPENCHAT_URL = "https://open.kakao.com/o/snixfWhi";
const INSTAGRAM_URL = "https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw==";

// ⬇️ 지원 포스터 이미지 경로
const POSTER_SRC = "/src/assets/7th_recruiting.png";

const faqs = [
  {
    q: "성비",
    a: "성비 제한 없이 누구나 지원 가능합니다.",
  },
  {
    q: "최소 참석 횟수",
    a: "정기모임 기준 월 2회 이상 참석을 권장합니다.",
  },
  {
    q: "영화 관심 정도",
    a: "영화를 좋아하는 마음만 있으면 충분합니다. 전공 무관.",
  },
  {
    q: "발제 영화 종류",
    a: "장르 제한 없이 자유롭게 추천 가능합니다.",
  },
];

export default function Apply() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="apply-page">
      {/* 메인 2컬럼 섹션 */}
      <div className="apply-main">
        {/* 좌측: FAQ */}
        <div className="apply-faq">
          <h2 className="faq-heading">자주 묻는 질문</h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div className="faq-item" key={i}>
                <p className="faq-q">
                  <span className="faq-qnum">Q{i + 1}.</span> {item.q}
                </p>
                <p className="faq-a">
                  <span className="faq-anum">A{i + 1}.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 포스터 */}
        <div className="apply-poster-col">
          <div
            className="apply-poster"
            onClick={() => setModalOpen(true)}
            title="클릭하여 확대"
          >
            <img src={POSTER_SRC} alt="지원 포스터" />
            <div className="poster-overlay">
              <p>지원 포스터</p>
              <p>클릭 시 사진 확대</p>
              <p>접속 QR 제공</p>
              <p>구글폼 하이퍼링크는 하단에 따로</p>
            </div>
          </div>

          {/* 구글 폼 버튼 */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="poster-form-btn"
          >
            구글폼으로 지원하기 →
          </a>
        </div>
      </div>

      {/* 하단: 기타 문의 */}
      <div className="apply-contact">
        <span className="contact-label">그 외 질문 : </span>
        <a href={OPENCHAT_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
          오픈채팅 연결
        </a>
        <span className="contact-sep">, </span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
          인스타 연결
        </a>
      </div>

      {/* 포스터 모달 */}
      {modalOpen && (
        <div className="poster-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="poster-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="poster-modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <img src={POSTER_SRC} alt="지원 포스터 확대" />
          </div>
        </div>
      )}
    </div>
  );
}