import MessagesDiv from "@/components/messages";
import { getCsrfToken } from "@/services/csrfService";
import axios from "axios";
import { FormEvent, useState } from "react";

export default function Home({}) {
  const [data, setData] = useState({
    messages: [],
  });
  const [customerId, setCustomerId] = useState("");
  const [accountId, setAccountId] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const csrfToken = await getCsrfToken();
    axios
      .post(
        "/api/car/counterParty",
        { customerId, accountId },
        {
          headers: { "X-CSRF-Token": csrfToken },
        }
      )
      .then((res) => {
        setData(res.data);
        setCustomerId("");
        setAccountId("");
      })
      .catch((err) => {
        setData(err.response.data);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Counter Party Info</h1>
      <form className="w-min" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm font-semibold" htmlFor="customerId">
            Customer ID
          </label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="p-1 border border-gray-300 rounded mb-2"
          />
        </div>
        <div>
          <label className="text-sm font-semibold" htmlFor="accountId">
            Account ID
          </label>
          <input
            type="text"
            id="accountId"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            className="p-1 border border-gray-300 rounded mb-2"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      <MessagesDiv messages={data.messages} />
    </div>
  );
}
