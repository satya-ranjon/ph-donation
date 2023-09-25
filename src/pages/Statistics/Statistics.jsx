import { Chart } from "react-google-charts";
import useDonate from "../../hooks/useDonate";
import { useEffect, useLayoutEffect, useState } from "react";

const Statistics = () => {
  const [donets] = useDonate();
  const donation = (100 * parseInt(donets.length)) / 12;
  const totalDonation = 100 - donation;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fontSize, setFontSize] = useState(12);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 700) {
      setFontSize(12);
    } else if (windowWidth > 700) {
      setFontSize(22);
    } else if (windowWidth > 1200) {
      setFontSize(32);
    } else if (windowWidth > 1800) {
      setFontSize(42);
    }
  }, [windowWidth]);

  const options = {
    legend: "none",
    pieStartAngle: 160,
    tooltip: { trigger: "none" },
    fontSize: fontSize,
    position: "top",
    slices: {
      0: { color: "#FF444A" },
      1: { color: "#00C49F" },
    },
  };
  const data = [
    ["Donation", "Your average donation"],
    ["Total Donation", totalDonation],
    ["Donation", donation],
  ];

  return (
    <div className="container mx-auto px-5 sm:px-10">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-20 w-full justify-center items-center">
        <div className="flex justify-start gap-10 items-center">
          <p>Your Donation</p>
          <div className="h-2 w-16 bg-[#00C49F]"></div>
        </div>
        <div className="flex justify-start gap-10 items-center">
          <p>Total Donation</p>
          <div className="h-2 w-16 bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
