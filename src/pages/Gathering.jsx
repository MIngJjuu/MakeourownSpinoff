import { useState } from "react";
import "./Gathering.css";
import '../App.css';

const photos = [
  { id: 1, src: "src/assets/melancholia.jpg", caption: "멜랑콜리아" },
  { id: 2, src: "src/assets/kimsvideo.jpg", caption: "킴스비디오" },
  { id: 3, src: "src/assets/kirishima.jpg", caption: "키리시마가 동아리활동 그만둔대" },
  { id: 4, src: "src/assets/her.jpg", caption: "그녀" },
  { id: 5, src: "src/assets/monster.jpg", caption: "괴물" },
  { id: 6, src: "src/assets/In the Mood for Love.jpg", caption: "화양연화" },
  { id: 7, src: "src/assets/minari.jpg", caption: "미나리" },
  { id: 8, src: "src/assets/The Phantom of Baker Street.png", caption: "명탐정 코난:베이커 가의 망령" },
  { id: 9, src: "src/assets/Anatomy of a fall.png", caption: "추락의 해부" },
  { id: 10, src: "src/assets/singstreet.png", caption: "싱 스트리트" },
  { id: 11, src: "src/assets/Comrades.png", caption: "첨밀밀" },
  { id: 12, src: "src/assets/getout.png", caption: "겟 아웃" },
  { id: 13, src: "src/assets/Decision To Leave.png", caption: "헤어질 결심" },
  { id: 14, src: "src/assets/BeauisAfraid.webp", caption: "보 이즈 어프레이드" },
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