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

export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);
  const [date, setDate] = useState("");

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
      <h1>Data from Spring Boot</h1>
      {data.message && <p>{data.message}</p>}
      {data.cobDate && (
        <div>
          <p>COB Date {data.cobDate}</p>
          <p>Current Trigger Flag {data.triggerFlag}</p>
        </div>
      )}
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/dtr/cashPosting");
  const initialData = await res.json();

  return {
    props: {
      initialData,
    },
  };
}
