import { motion } from "framer-motion";
import "./Services.css";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="title">
          <img src="/public/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </motion.div>
        <div className="title">
          <h1>
            <b>Four Your</b> Business.
          </h1>
          <motion.button
            whileHover={{ background: "lightgray", color: "black" }}
          >
            What We Do ?
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, at!
            Reiciendis repellat deserunt dolores blanditiis harum. Ab ducimus
            amet,
          </p>
          <motion.button whileHover={{ background: "black", color: "#fff" }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, at!
            Reiciendis repellat deserunt dolores blanditiis harum. Ab ducimus
            amet,
          </p>
          <motion.button whileHover={{ background: "black", color: "#fff" }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, at!
            Reiciendis repellat deserunt dolores blanditiis harum. Ab ducimus
            amet,
          </p>
          <motion.button whileHover={{ background: "black", color: "#fff" }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, at!
            Reiciendis repellat deserunt dolores blanditiis harum. Ab ducimus
            amet,
          </p>
          <motion.button whileHover={{ background: "black", color: "#fff" }}>
            Go
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
