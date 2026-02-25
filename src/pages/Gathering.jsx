import { useState } from "react";
import "./Gathering.css";
import '../App.css';

const photos = [
  { id: 1, src: "/images/gathering1.jpg", caption: "2024 봄 정기모임" },
  { id: 2, src: "/images/gathering2.jpg", caption: "영화 감상 세션" },
  { id: 3, src: "/images/gathering3.jpg", caption: "촬영 워크샵" },
  { id: 4, src: "/images/gathering4.jpg", caption: "2024 여름 상영회" },
  { id: 5, src: "/images/gathering5.jpg", caption: "시나리오 피드백" },
  { id: 6, src: "/images/gathering6.jpg", caption: "편집 스터디" },
  { id: 7, src: "/images/gathering7.jpg", caption: "2024 가을 정기모임" },
  { id: 8, src: "/images/gathering8.jpg", caption: "종강 파티" },
  { id: 9, src: "/images/gathering1.jpg", caption: "2024 봄 정기모임" },
  { id: 10, src: "/images/gathering2.jpg", caption: "영화 감상 세션" },
  { id: 11, src: "/images/gathering3.jpg", caption: "촬영 워크샵" },
  { id: 12, src: "/images/gathering4.jpg", caption: "2024 여름 상영회" },
  { id: 13, src: "/images/gathering5.jpg", caption: "시나리오 피드백" },
  { id: 14, src: "/images/gathering6.jpg", caption: "편집 스터디" },
  { id: 15, src: "src/assets/TheFall.jpg", caption: "더 폴" }
];

export default function Gathering() {
  const [selected, setSelected] = useState(null);

  const openModal = (photo) => setSelected(photo);
  const closeModal = () => setSelected(null);

  return (
    <div className="gathering-page">
      <div className="gathering-hero">
        <p className="gathering-subtitle">스핀오프 6기의 발제 내용입니다.</p>
        <p className="gathering-subtitle">이미지를 클릭하면 해당 영화의 발제 게시물로 이동됩니다.</p>
        <div className="gathering-title-line" />
      </div>

      <div className="gathering-gallery">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-item"
            onClick={() => openModal(photo)}
          >
            <div className="gallery-img-wrap">
              <img src={photo.src} alt={photo.caption} />
              <div className="gallery-overlay">
                <span className="gallery-caption">{photo.caption}</span>
                <span className="gallery-zoom">＋</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <img src={selected.src} alt={selected.alt} />
            <p className="modal-caption">{selected.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}