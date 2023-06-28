import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousels.css";
import { Link } from "react-router-dom";

const content = [
  {
    title: "트렌디한 그녀만의 데일리룩",
    description:
      "요즘은 이렇게 입어요! 그녀는 트렌디한 그녀만의 데일리룩으로 오늘은 유니크한 프린트 티셔츠를 선택했어요.나를 따라와, 패션의 새로운 지평을 열어보자!",
    button: "Read More",
    image:
      "https://images.unsplash.com/photo-1683093092507-928bd670af33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    path: "/products/women",
  },
  {
    title: "여기가 올 시즌 코디 맛집",
    description:
      "이곳은 올 시즌 코디 맛집으로 손꼽히는 곳이에요! 여기에서는 다양한 스타일과 트렌드를 만나볼 수 있어요. 패션의 신세계에 발을 들이다, 지금 여기서 트렌드의 맛을 봐보세요!",
    button: "Discover",
    image:
      "https://images.unsplash.com/photo-1680519599725-86765c3dc9f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    path: "/products/men",
  },
  {
    title: "취향은 담은 데일리 웨어",
    description:
      "그녀는 자신의 취향을 담은 데일리 웨어로 오늘도 멋스러움을 발산하고 있어요. 내 스타일, 나의 자유! 이 데일리 웨어로 나만의 패션을 완성해보세요!",
    button: "Buy now",
    image:
      "https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    path: "/products/shoes",
  },
];

export default function Carousels() {
  return (
    <>
      <Slider className="slider-wrapper" autoplay="2000" infinite={true}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>
                <Link to={item.path}>{item.button}</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
