import React from "react";

const Recovertable = ({ rItem, idx }) => {
  const {
    postId,
    recoveredLocation,
    userName,
    email,
    receiverName,
    receiverEmail,
    handoverDate,
    title,
    img,
  } = rItem;
  return (
    <>
    <tr>
              <td className="text-blue-950 font-bold">{idx + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar  border-2 border-red-700 rounded-full">
                    <div className="mask  mask-squircle h-12 w-12">
                      <img className="" src={img} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                  </div>
                </div>
              </td>
              {/* Apply conditional color */}
              <td className="font-bold text-gray-500">{recoveredLocation}</td>
              <td>{handoverDate}</td>
              <td>
              <div>
                    <div className="font-bold">{receiverName}</div>
                    <div className="text-sm opacity-50">{receiverEmail}</div>
                  </div>
              </td>
              <td>
              <div>
                    <div className="font-bold">{userName}</div>
                    <div className="text-sm opacity-50">{email}</div>
                  </div>
              </td>
            </tr>
    </>
  );
};

export default Recovertable;
