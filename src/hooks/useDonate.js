import { useEffect, useState } from "react";

const useDonate = () => {
  const [donets, setDonets] = useState([]);

  useEffect(() => {
    const localDonate = JSON.parse(localStorage.getItem("donates"));
    if (localDonate) {
      setDonets(localDonate);
    }
  }, []);

  useEffect(() => {
    if (donets.length > 0) {
      localStorage.setItem("donates", JSON.stringify(donets));
    }
  }, [donets]);

  const setDonate = (value) => {
    const findDonate = donets?.find((item) => item.id === value.id);

    if (!findDonate) {
      setDonets((prev) => [...prev, value]);
      return;
    }
  };

  return [donets, setDonate];
};

export default useDonate;
