function generateRandomData(numPoints) {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({
      x: i,
      y: Math.floor(Math.random() * 100),
    });
  }
  return data;
}

const generatePieChartData = (numPoints, tagMessage) => {
  const data = {};
  const label = [];
  const values = [];
  const colors = [];
  for (let i = 0; i < numPoints; i++) {
    label.push("Category_" + i);
    values.push(Math.floor(Math.random() * 100));
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255);
    const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
    const randomCssRgba = () =>
      `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(
        ","
      )})`;
    colors.push(randomCssRgba());
  }
  data.label = label;
  data.values = values;
  data.colors = colors;
  data.tagMessage = tagMessage;
  return data;
};
const generateRandomNumber = (numPoints, max, min) => {
  const data = [];
  while (numPoints--) {
    data.push(parseInt(Math.random() * (max - min) + min));
  }
  return data;
};

const generateLineChartData = (numPoints, label, max, min) => {
  const data = {};
  data.labels = generateRandomNumber(numPoints,max,min);
  data.datasets = [];
  data.datasets.push({
    label: label,
    data: generateRandomNumber(numPoints, max, min),
    borderColor: "rgba(49,140,231)",
    borderWidth: 2,
    pointBorderWidth: 1,
    backgroundColor: "rgba(49,140,231,0.4)",
    fill: true,
    legend: false,
  });

  return data;
};

export { generatePieChartData, generateRandomData, generateLineChartData };
