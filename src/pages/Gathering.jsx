import { useState } from "react";
import "./Gathering.css";
import '../App.css';

const photos = [
  { id: 1, src: "src/assets/melancholia.jpg", caption: "멜랑콜리아", link: "https://www.instagram.com/p/DU7zR1SE75z/" },
  { id: 2, src: "src/assets/kimsvideo.jpg", caption: "킴스비디오", link: "https://www.instagram.com/p/DU7y_4ok3V9/" },
  { id: 3, src: "src/assets/kirishima.jpg", caption: "키리시마가 동아리활동 그만둔대", link: "https://www.instagram.com/p/DT9umkSEzHY/" },
  { id: 4, src: "src/assets/her.jpg", caption: "그녀", link: "https://www.instagram.com/p/DT9uMPmk4CN/" },
  { id: 5, src: "src/assets/monster.jpg", caption: "괴물", link: "https://www.instagram.com/p/DT9tjGWk9p0/" },
  { id: 6, src: "src/assets/In the Mood for Love.jpg", caption: "화양연화", link: "https://www.instagram.com/p/DT9snIZkwEI/" },
  { id: 7, src: "src/assets/minari.jpg", caption: "미나리", link: "https://www.instagram.com/p/DT9r39XEyfc/" },
  { id: 8, src: "src/assets/The Phantom of Baker Street.png", caption: "명탐정 코난:베이커 가의 망령", link: "https://www.instagram.com/p/DT9rmk9E-FM/" },
  { id: 9, src: "src/assets/Anatomy of a fall.png", caption: "추락의 해부", link: "https://www.instagram.com/p/DT9rfpBk5XJ/" },
  { id: 10, src: "src/assets/singstreet.png", caption: "싱 스트리트", link: "https://www.instagram.com/p/DT9rE3QExva/" },
  { id: 11, src: "src/assets/Comrades.png", caption: "첨밀밀", link: "https://www.instagram.com/p/DT9qfVwE-9L/" },
  { id: 12, src: "src/assets/getout.png", caption: "겟 아웃", link: "https://www.instagram.com/p/DT9qfVwE-9L/" },
  { id: 13, src: "src/assets/Decision To Leave.png", caption: "헤어질 결심", link: "https://www.instagram.com/p/DT9qN5qE_LQ/" },
  { id: 14, src: "src/assets/BeauisAfraid.webp", caption: "보 이즈 어프레이드", link: "https://www.instagram.com/p/DT9pp_wE69h/" },
  { id: 15, src: "src/assets/TheFall.jpg", caption: "더 폴", link: "https://www.instagram.com/p/DT9o44KEy6r/" }
];

export default function Gathering() {
  const [selected, setSelected] = useState(null);

  const handleClick = (photo) => {
    if (photo.link) {
      window.open(photo.link, '_blank'); // 새 탭에서 열기
    }
  };

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
          >
            <a 
              href={photo.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="gallery-link"
         >
              <div className="gallery-img-wrap">
                 <img src={photo.src} alt={photo.caption} />
                 <div className="gallery-overlay">
                   <span className="gallery-caption">{photo.caption}</span>
                   <span className="gallery-zoom">+</span>
              </div>
            </div>
         </a>
        </div>
        ))}
      </div>
    </div>
  );
}