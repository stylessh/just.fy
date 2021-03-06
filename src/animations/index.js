import gsap from "gsap";

export const closeMenu = (node1, node2, node3) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });

  gsap.to(node3, {
    duration: 1,
    css: { display: "none" },
  });
};

export const openMenu = (node1, node2, node3) => {
  gsap.to(node1, {
    duration: 0,
    css: { display: "block" },
  });

  gsap.to([node2, node3], {
    duration: 0,
    opacity: 1,
    skewY: 0,
    height: "100%",
  });
};

export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right",
    skewY: 2,
    ease: "power2.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    ease: "powe3.inOut",
  });
};

export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    opacity: 0,
    delay: 0.6,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const handleCity = (city, node) => {
  gsap.to(node, {
    duration: 0,
    background: `url(${city}) center center`,
    backgroundSize: '50% 50%'
  });
  gsap.to(node, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(node, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "left top",
  });
};

export const handleCityReturn = (node) => {
  gsap.to(node, {
    duration: 0.4,
    opacity: 0,
  });
};

export default null;
