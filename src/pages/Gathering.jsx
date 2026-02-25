import { useState } from "react";
import "./Gathering.css";

const photos = [
  { id: 1, src: "/images/gathering1.jpg", alt: "모임 사진 1", caption: "2024 봄 정기모임" },
  { id: 2, src: "/images/gathering2.jpg", alt: "모임 사진 2", caption: "영화 감상 세션" },
  { id: 3, src: "/images/gathering3.jpg", alt: "모임 사진 3", caption: "촬영 워크샵" },
  { id: 4, src: "/images/gathering4.jpg", alt: "모임 사진 4", caption: "2024 여름 상영회" },
  { id: 5, src: "/images/gathering5.jpg", alt: "모임 사진 5", caption: "시나리오 피드백" },
  { id: 6, src: "/images/gathering6.jpg", alt: "모임 사진 6", caption: "편집 스터디" },
  { id: 7, src: "/images/gathering7.jpg", alt: "모임 사진 7", caption: "2024 가을 정기모임" },
  { id: 8, src: "/images/gathering8.jpg", alt: "모임 사진 8", caption: "종강 파티" },
];

export default function Gathering() {
  const [selected, setSelected] = useState(null);

  const openModal = (photo) => setSelected(photo);
  const closeModal = () => setSelected(null);

  return (
    <div className="gathering-page">
      <div className="gathering-hero">
        <h1 className="gathering-title">Gathering</h1>
        <p className="gathering-subtitle">스핀오프의 모임 현장을 만나보세요</p>
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
              <img src={photo.src} alt={photo.alt} />
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