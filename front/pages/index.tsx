import { useState } from "react";
import Button from "../components/Button"; // Import the Button component
import CashPosting from "@/components/CashPosting";
import Link from "next/link";

export default function Home({}) {
  const [data, setData] = useState({
    message: "Please choose a date",
    cobDate: "",
    triggerFlag: "",
  });
  const [date, setDate] = useState("");

  const handleRefresh = async () => {
    console.log(date);
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]);
    }
    const res = await fetch(
      `http://localhost:8080/dtr/cashPosting?cobDate=${encodeURIComponent(
        date
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newData = await res.json();
    setData(newData);
  };
  const handleSubmit = async () => {
    console.log(date);
    const res = await fetch(
      `http://localhost:8080/dtr/cashPosting?cobDate=${encodeURIComponent(
        date
      )}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newData = await res.json();
    setData(newData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Cash Position Trigger Flag Update
      </h1>
      <Link href="/hello" className="text-blue-500">
        Hello
      </Link>
      <div className="p-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 text-lg border border-gray-300 rounded mr-2" // Tailwind CSS classes
        />
        <Button onClick={handleRefresh}>Get Current</Button>
        <Button onClick={handleSubmit}>Enable Cash Posting</Button>
      </div>
      <CashPosting {...data} />
    </div>
  );
}
