import { useState } from "react";
import Button from "../components/Button"; // Import the Button component
import CashPosting from "@/components/CashPosting";

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
      `/api/dtr/cashPosting?cobDate=${encodeURIComponent(date)}`,
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

  const getCsrfToken = async () => {
    const res = await fetch("/csrf", {
      credentials: 'include',
    });
    if (!res.ok) {
      return "";
    }
    const data = await res.json();
    return data.token;
  }

  const handleSubmit = async () => {
    const csrfToken = await getCsrfToken();

    console.log(date);
    const res = await fetch(
      `/api/dtr/cashPosting?cobDate=${encodeURIComponent(date)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken ?? "",
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
