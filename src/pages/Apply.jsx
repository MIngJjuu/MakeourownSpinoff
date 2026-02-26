import { useState } from "react";
import "./Apply.css";
import '../App.css';

const GOOGLE_FORM_URL = "https://forms.gle/c6qJUrf8Gqp4ZWz99";
const OPENCHAT_URL = "https://open.kakao.com/o/snixfWhi";
const INSTAGRAM_URL = "https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw==";

const POSTER_SRC = "/images/7th_recruiting.png";

const faqs = [ //자주 묻는 질문 정리
  {
    q: "지원 자격이 어떻게 되나요?",
    a: "대학 재학생, 휴학생 및 수료생에 한해 지원 가능합니다.(졸업생은 지원받고 있지 않습니다)",
  },
  {
    q: "최소 참석 횟수가 있나요? 수료 조건이 어떻게 되나요?",
    a: "OT는 신규 부원 필참이며, 발제 3회 이상 참여 필수입니다. 수료 조건은 발제 3회 이상 참여 및 웹매거진 발행입니다.",
  },
  {
    q: "영화에 대해 잘 알지 못해도 괜찮나요?",
    a: "스핀오프에서는 영화에 대한 흥미가 가장 중요합니다. 영화에 대한 지식이 필수는 아닙니다.",
  },
  {
    q: "발제 영화는 종류가 제한되어있나요?",
    a: "장르 제한 없이 자유롭게 발제 가능합니다.",
  },
  {
    q: "발제 시간이 정해져있나요?",
    a: "매주 월요일 19~22시에 발제가 진행됩니다, 시험 2주 전부터는 활동 휴식기입니다.",
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
        <span className="contact-label">문의 : </span>
        <a href={OPENCHAT_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
          오픈채팅
        </a>
        <span className="contact-sep">, </span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
          인스타그램
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