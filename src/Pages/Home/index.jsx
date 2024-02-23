import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
function Home() {
  const [items, setItems] = useState(null);
  const url = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>

      {items?.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </>
    )
}

export { Home };
