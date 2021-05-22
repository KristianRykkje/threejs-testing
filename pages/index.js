import ThreeTest from "@/components/ThreeTest/ThreeTest";
import { useCallback, useState } from "react";

export default function Index() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = useCallback(() => {
    setClicked(prev => !prev);
    console.log("clicked", clicked);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <ThreeTest handleClicked={handleClicked} />
    </div>
  );
}
