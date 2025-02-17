import React from 'react';

interface CashPostingProps {
  message: string;
  cobDate: string;
  triggerFlag: string;
}

const CashPosting: React.FC<CashPostingProps> = ({ message, cobDate, triggerFlag }) => {
  return (
    <div>
      {message && (
        <p className="text-lg mb-2 text-amber-400 font-mono">
          {message}
        </p>
      )}
      {cobDate && (
        <div>
          <table className="min-w-full divide-y divide-gray-100">
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
    </div>
  );
};

export default CashPosting;