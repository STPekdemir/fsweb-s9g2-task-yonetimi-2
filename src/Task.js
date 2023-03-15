import React from "react";
import { differenceInDays, differenceInHours } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const kalanGun = differenceInDays(new Date(taskObj.deadline), new Date());

  const kalanSaat = differenceInHours(new Date(taskObj.deadline), new Date());
  let deadline;
  if (kalanGun > 3) {
    deadline = (
      <span className="inline-block px-2 py-[3px] rounded-sm bg-[#ffd9d4]">
        {kalanGun} gün sonra{" "}
      </span>
    );
  } else if (kalanGun <= 3 && kalanGun > 1) {
    deadline = (
      <span className="inline-block px-2 py-[3px] rounded-sm bg-[#d4d7ff]">
        {" "}
        {kalanGun} gün sonra
      </span>
    );
  } else {
    deadline = (
      <span className="inline-block px-2 py-[3px] rounded-sm bg-[#d4d7ff]">
        {kalanSaat} saat sonra
      </span>
    );
  }

  return (
    <div className="bg-white leading-normal shadow-[0_4px_5px_0_rgb(0_0_0_/_10%)] mt-4 p-6 rounded-[5px]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: {deadline}</div>
      <p className="text-sm text-[#444] pt-2 pb-3 px-0">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block text-sm border mr-1 mb-1.5 px-3 py-[5px] rounded-[30px] border-solid border-[#ccc]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0_0_0_/_5%)] cursor-pointer ml-auto px-3 py-2 rounded-[3px] border-0"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
