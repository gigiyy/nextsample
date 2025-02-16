import { useState } from "react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./Geist.ttf",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./GeistMono.ttf",
  variable: "--font-geist-mono",
});

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
    <div className={`${geistSans.className}`}>
      <h1 className="text-3xl font-bold mb-4">Data from Spring Boot</h1>
      {data.message && <p className="text-lg mb-2">{data.message}</p>}
      {data.cobDate && (
        <div>
          <p className="text-lg mb-2">COB Date {data.cobDate}</p>
          <p className="text-lg mb-2">Current Trigger Flag {data.triggerFlag}</p>
        </div>
      )}
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 text-lg border border-gray-300 rounded mr-2" // Tailwind CSS classes
        />
        <button onClick={handleRefresh} className="p-2 px-4 text-lg text-white bg-blue-500 border-none rounded cursor-pointer mr-2 hover:bg-blue-700">Refresh</button>
        <button onClick={handleSubmit} className="p-2 px-4 text-lg text-white bg-blue-500 border-none rounded cursor-pointer hover:bg-blue-700">Submit</button>
      </div>
    </div>
  );
}
