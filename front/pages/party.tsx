import { useState } from "react";
import axios from "axios";

export default function Home({}) {
  const [data, setData] = useState({
    success: [],
    failure: [],
  });
  const [customerId, setCustomerId] = useState("");
  const [accountId, setAccountId] = useState("");

  const getCsrfToken = async () => {
    return await axios
      .get("/api/csrf", {
        withCredentials: true,
      })
      .then((res) => res.data.token)
      .catch(() => "");
  };

  const handleSubmit = async (e) => {
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
      <div className="mt-4 max-w-lg">
        {data && data.success && data.success.length > 0 && (
          <div className="bg-green-100 p-4 rounded mb-4">
            <h2 className="text-lg font-bold mb-2">Success</h2>
            <ul>
              {data.success.map((message, index) => (
                <li key={index} className="text-green-700">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        )}
        {data && data.failure && data.failure.length > 0 && (
          <div className="bg-red-100 p-4 rounded">
            <h2 className="text-lg font-bold mb-2">Failure</h2>
            <ul>
              {data.failure.map((message, index) => (
                <li key={index} className="text-red-700">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
