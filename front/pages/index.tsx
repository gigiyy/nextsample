import { useState } from "react";
import localFont from "next/font/local";
import Button from "../components/Button"; // Import the Button component

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
      <h1 className="text-2xl font-bold mb-4">
        Cash Position Trigger Flag Update
      </h1>
      {data.message && (
        <p className={`text-lg mb-2 text-amber-400 ${geistMono.className}`}>
          {data.message}
        </p>
      )}
      {data.cobDate && (
        <div>
          <table className="min-w-5 divide-y divide-gray-200">
            <tbody>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  COB Date
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.cobDate}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Current Trigger Flag
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.triggerFlag}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 text-lg border border-gray-300 rounded mr-2" // Tailwind CSS classes
        />
        <Button onClick={handleRefresh}>Get Current</Button>
        <Button onClick={handleSubmit}>Enable Cash Posting</Button>
      </div>
    </div>
  );
}
