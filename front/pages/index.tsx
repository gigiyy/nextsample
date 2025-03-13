import { useSearchParams } from "next/navigation";
import router from "next/router";
import { useEffect } from "react";

export default function Home({}) {
  const searchParams = useSearchParams();
  const denied = searchParams.get("denied");

  useEffect(() => {
    if (denied) {
      alert("You denied the request");
      router.push("/index");
    }
  }, [denied]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
    </div>
  );
}
