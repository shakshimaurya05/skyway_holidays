import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft, faCalendarDays, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function BookingCard() {
  const [showTraveller, setShowTraveller] = useState(false);
  const travellerRef = useRef(null);
  const popupRef = useRef(null);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const [travelClass, setTravelClass] = useState("Economy");

  useEffect(() => {
    if (showTraveller && travellerRef.current) {
      travellerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [showTraveller]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowTraveller(false);
      }
    }

    if (showTraveller) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTraveller]);

  return (
    <>
      {showTraveller && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
      )}

     <div className="absolute left-1/2 -translate-x-1/2 top-[40vh] sm:top-[35vh] md:top-[33vh] lg:top-[33vh] w-[95%] sm:w-[90%] lg:w-[85%] z-30">

        <div className="rounded-2xl shadow-xl">

          <div className="h-10 bg-blue-900"></div>

          <div className="bg-[#eaf4ff] px-4 sm:px-6 lg:px-8 py-8 lg:py-10 min-h-[200px]">

            <div className="flex flex-col lg:flex-row gap-6 h-full">

              {/* FROM */}
              <div className="flex flex-col justify-center flex-1 lg:border-r pr-0 lg:pr-8 relative">
                <span className="text-sm sm:text-base text-gray-500">
                  Departure From
                </span>

                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                  New Delhi
                </span>

                <span className="text-xs sm:text-sm text-gray-500">
                  DEL, Indira Gandhi International
                </span>

                <button className="absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100">
                  <FontAwesomeIcon icon={faRightLeft} />
                </button>
              </div>

              {/* TO */}
              <div className="flex flex-col justify-center flex-1 lg:border-r pr-0 lg:pr-8 lg:pl-6">
                <span className="text-sm sm:text-base text-gray-500">
                  Going To
                </span>

                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                  Mumbai
                </span>

                <span className="text-xs sm:text-sm text-gray-500">
                  BOM, Chhatrapati Shivaji Intl
                </span>
              </div>

              {/* DEPARTURE DATE */}
              <div className="flex flex-col justify-center flex-1 lg:border-r pr-0 lg:pr-6 relative">
                <span className="text-sm sm:text-base text-gray-500 flex items-center justify-between">
                  Departure Date
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-gray-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("departureDate").showPicker()
                    }
                  />
                </span>

                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold cursor-pointer"
                  onClick={() =>
                    document.getElementById("departureDate").showPicker()
                  }
                >
                  15 Mar'26
                </span>

                <span className="text-xs sm:text-sm text-gray-500">
                  Sunday
                </span>

                <input
                  type="date"
                  id="departureDate"
                  className="absolute opacity-0 pointer-events-none"
                />
              </div>

              {/* RETURN DATE */}
              <div className="flex flex-col justify-center flex-1 lg:border-r pr-0 lg:pr-6 relative">
                <span className="text-sm sm:text-base text-gray-500 flex items-center justify-between">
                  Return Date
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-gray-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("returnDate").showPicker()
                    }
                  />
                </span>

                <span
                  className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 cursor-pointer"
                  onClick={() =>
                    document.getElementById("returnDate").showPicker()
                  }
                >
                  Add Return
                </span>

                <span className="text-xs text-gray-500">
                  Save more on round trip
                </span>

                <input
                  type="date"
                  id="returnDate"
                  className="absolute opacity-0 pointer-events-none"
                />
              </div>

              {/* TRAVELLERS */}
              <div
                ref={travellerRef}
                onClick={() => setShowTraveller(!showTraveller)}
                className="flex flex-col justify-center flex-1 lg:border-r pr-0 lg:pr-6 relative cursor-pointer"
              >
                <span className="text-sm sm:text-base text-gray-500 flex items-center justify-between">
                  Travellers & Class
                  <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 text-sm" />
                </span>

                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {adult + child + infant} Traveller
                </span>

                <span className="text-xs sm:text-sm text-gray-500">
                  {travelClass}
                </span>

                {showTraveller && (
                  <div
                    className="absolute top-[90px] left-1/2 -translate-x-1/2 bg-white w-[90vw] sm:w-[360px] rounded-xl shadow-xl p-6 z-50"
                    onClick={(e) => e.stopPropagation()}
                    ref={popupRef}
                  >

                    {/* Adult */}
                    <div className="flex justify-between items-center mb-4">
                      <span>Adult (13yrs+)</span>

                      <div className="flex items-center gap-3">
                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (adult > 1) setAdult(adult - 1);
                          }}
                        >
                          -
                        </button>

                        <span>{adult}</span>

                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdult(adult + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Child */}
                    <div className="flex justify-between items-center mb-4">
                      <span>Child (2-11 yrs)</span>

                      <div className="flex items-center gap-3">
                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (child > 0) setChild(child - 1);
                          }}
                        >
                          -
                        </button>

                        <span>{child}</span>

                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            setChild(child + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Infant */}
                    <div className="flex justify-between items-center mb-4">
                      <span>Infant (0-2 yrs)</span>

                      <div className="flex items-center gap-3">
                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (infant > 0) setInfant(infant - 1);
                          }}
                        >
                          -
                        </button>

                        <span>{infant}</span>

                        <button
                          className="px-3 py-1 bg-gray-200 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            setInfant(infant + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* CLASS OPTIONS */}
                    <div className="mt-6 space-y-2">

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={travelClass === "Economy"}
                          onChange={() => setTravelClass("Economy")}
                        />
                        Economy
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={travelClass === "Business"}
                          onChange={() => setTravelClass("Business")}
                        />
                        Business
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={travelClass === "First Class"}
                          onChange={() => setTravelClass("First Class")}
                        />
                        First Class
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={travelClass === "Premium Economy"}
                          onChange={() => setTravelClass("Premium Economy")}
                        />
                        Premium Economy
                      </label>

                    </div>

                    <button
                      className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowTraveller(false);
                      }}
                    >
                      Done
                    </button>

                  </div>
                )}
              </div>

              {/* SEARCH */}
              <div className="flex items-center justify-center w-full lg:w-auto">
                <button className="bg-blue-900 text-white px-6 lg:px-8 py-3 rounded-xl text-base lg:text-xl font-semibold hover:bg-blue-800 w-full lg:w-auto">
                  Search
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookingCard;