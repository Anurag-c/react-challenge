import React, { useEffect, useState, Children } from "react";

function recursiveSum(root) {
  const numChild = Children.count(root);
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;

  Children.forEach(root, (child) => {
    let r, g, b;
    if (child.props.name === "BlendedColor") {
      ({ r, g, b } = recursiveSum(child.props.children));
    } else {
      ({ r, g, b } = child.props);
    }

    totalR += r;
    totalG += g;
    totalB += b;
  });

  if (numChild > 0) {
    return {
      r: Math.round(totalR / numChild),
      g: Math.round(totalG / numChild),
      b: Math.round(totalB / numChild),
    };
  }

  return { r: 0, g: 0, b: 0 };
}

function BlendedColor({ children }) {
  const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 });

  useEffect(() => {
    const { r, g, b } = recursiveSum(children);
    setRgb({ r, g, b });
  }, [children]);

  return (
    <div
      style={{
        backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        padding: "40px",
      }}
    >
      {children}
    </div>
  );
}

export default BlendedColor;
