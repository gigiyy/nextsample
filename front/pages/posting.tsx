import Button from "@/components/Button";
import CashPosting from "@/components/CashPosting";
import MessagesDiv from "@/components/messages";
import { getCsrfToken } from "@/services/csrfService";
import { warn } from "@/types/message";
import axios from "axios";
import { useState } from "react";

export default function Home({}) {
  const [data, setData] = useState({
    messages: [warn("Please choose a date")],
    cobDate: "",
    triggerFlag: "",
  });
  const [date, setDate] = useState("");

  const handleRefresh = async (selected: string) => {
    if (!selected) return;
    setDate(selected);
    axios
      .get("/api/dtr/cashPosting", {
        params: { cobDate: selected },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(err.response.data);
      });
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
          onChange={(e) => handleRefresh(e.target.value)}
          className="p-2 text-lg border border-gray-300 rounded mr-2" // Tailwind CSS classes
        />
        <Button onClick={handleSubmit}>Enable Cash Posting</Button>
      </div>
      <CashPosting {...data} />
      <MessagesDiv messages={data?.messages} />
    </div>
  );
}
