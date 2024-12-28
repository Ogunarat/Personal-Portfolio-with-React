import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.css";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Todo-App",
    img: "https://images.pexels.com/photos/5723941/pexels-photo-5723941.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "TodoApp with react",
    href: "https://todo-app-react1234.netlify.app",
  },
  {
    id: 2,
    title: "Personal-Portfolio",
    img: "https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-suslemelerle-senlikli-noel-suslemeleri.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Personal-Portfolio with Html Css and Javascript and responsive",
    href: "https://personal-website-app12.netlify.app",
  },
  {
    id: 3,
    title: "Food Site",
    img: "https://images.pexels.com/photos/14635526/pexels-photo-14635526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Food-Site Html,Css,Javascript and responsive",
    href: "https://food-site-basic1234.netlify.app",
  },
  {
    id: 4,
    title: "E-commerce Website",
    img: "https://images.pexels.com/photos/28993103/pexels-photo-28993103/free-photo-of-roma-daki-roma-forumu-nun-zamansiz-harabeleri.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "e-commerce-basic-html-css-javascript and responsive",
    href: "https://e-commerce-basic-html-css-javascript.netlify.app",
  },
  {
    id: 5,
    title: "Movie-App",
    img: "https://images.pexels.com/photos/5723941/pexels-photo-5723941.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Movie-App with react and redux-tolkit",
    href: "https://movie-app-basic123.netlify.app",
  },
  {
    id: 6,
    title: "E-commerce with react",
    img: "https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-suslemelerle-senlikli-noel-suslemeleri.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "E-commerce with react and redux-tolkit",
    href: "https://e-commerce-basic-app1234.netlify.app",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
