import React from "react";
import FailureMessages from "./failure";

interface CashPostingProps {
  message: string;
  cobDate: string;
  triggerFlag: string;
}

const CashPosting: React.FC<CashPostingProps> = ({
  message,
  cobDate,
  triggerFlag,
}) => {
  return (
    <div className="p-2">
      {cobDate && (
        <div>
          <table className="min-w-40 divide-y divide-gray-100">
            <tbody>
              <tr className="bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  COB Date
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {cobDate}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Trigger Flag
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {triggerFlag}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4 max-w-lg">
      {message && <FailureMessages messages={[message]} />}
      </div>
    </div>
  );
};

export default CashPosting;
