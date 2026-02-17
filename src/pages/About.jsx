import "./About.css";
import activityImg from "../assets/activity1.jpg"; // 이미지 파일 경로

function About() {
  return (
    <div className="about-container">

      {/* 동아리 소개 섹션 */}
      <section className="about-section">
        <h2>Make our own Spinoff</h2>
        <p>
          여기에 동아리 소개 문구를 작성하시면 됩니다. <br />
          (예: 우리 동아리는 창작, 기획, 기술, 스토리텔링을 기반으로
          새로운 스핀오프 콘텐츠를 만들어가는 창작 동아리입니다.)
        </p>
      </section>

      {/* 활동 내역 섹션 */}
      <section className="about-section">
        <h2>활동 내역</h2>

        <div className="activity-box">
          <img src={activityImg} alt="동아리 활동 이미지" />
          <p>
            여기에 활동 설명을 작성하세요. <br />
            (예: 프로젝트 기반 스터디, 협업 콘텐츠 제작, 외부 연계 활동 등)
          </p>
        </div>
      </section>

      {/* 링크 섹션 */}
      <section className="about-section">
        <h2>바로가기</h2>

        <ul className="link-list">
          <li>
            <a href="https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw%3D%3D" target="_blank" rel="noopener noreferrer">
              📎 스핀오프 인스타그램
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/18Wun2QRtT2tsKKCFk-wgP2698ck27qCb/view">
              📎 5기 매거진
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw%3D%3D" target="_blank" rel="noopener noreferrer">
              📎 4기 매거진
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default About;