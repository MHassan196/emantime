import React from "react";

function ReviewCard({ para, dp, name, country }) {
  return (
    <div className="py-10 px-8 bg-white rounded-xl min-[1128px]:w-[340px] lg:w-[440px] md:w-[350px] w-11/12 h-96 md:mx-auto mx-2">
      <div className="flex flex-col gap-6">
        <div>
          <svg
            className="sm:w-20 sm:h-20 w-16 h-16 text-quoteColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
        <div className="h-24 w-full">
          <p className="text-lg lg:line-clamp-4 line-clamp-3">{para}</p>
        </div>
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="border-4 border-white rounded-full shadow-xl">
            <img src={dp} alt="" className="rounded-full sm:h-20 sm:w-20 h-16 w-16" />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-xl font-bold">{name}</p>
            </div>
            <div>
              <p className="text-sm font-thin text-gray-400">{country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
