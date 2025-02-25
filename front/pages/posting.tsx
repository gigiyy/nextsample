import { useState } from "react";
import Button from "../components/Button"; // Import the Button component
import CashPosting from "@/components/CashPosting";
import axios from "axios";

export default function Home({}) {
  const [data, setData] = useState({
    message: "Please choose a date",
    cobDate: "",
    triggerFlag: "",
  });
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleRefresh = async () => {
    axios
      .get("/api/dtr/cashPosting", {
        params: { cobDate: date },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(err.response.data);
      });
  };

  const getCsrfToken = async () => {
    return await axios
      .get("/csrf", {
        withCredentials: true,
      })
      .then((res) => res.data.token)
      .catch(() => "");
  };

  const handleSubmit = async () => {
    const csrfToken = await getCsrfToken();
    axios
      .put("/api/dtr/cashPosting", null, {
        params: { cobDate: date },
        headers: { "X-CSRF-Token": csrfToken },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(err.response.data);
      });
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
