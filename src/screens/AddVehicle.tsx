import React, { useState, ChangeEvent } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface VehicleDetails {
  vehicleCode: string;
  vehicleType: string;
  vehicleNo: string;
  vehicleOwner: string;
  driverName: string;
  driverContact: string;
}

const vehicleData: VehicleDetails[] = [
  {
    vehicleCode: "CIPL/01",
    vehicleType: "PICKUP",
    vehicleNo: "UK06CB4259",
    vehicleOwner: "SATPAL",
    driverName: "SANJAY",
    driverContact: "9917178439",
  },
  {
    vehicleCode: "CIPL/02",
    vehicleType: "PICKUP",
    vehicleNo: "UK06CB4274",
    vehicleOwner: "TARAK",
    driverName: "ROBIN",
    driverContact: "9837620519",
  },
  {
    vehicleCode: "CIPL/03",
    vehicleType: "PICKUP",
    vehicleNo: "UK06CB4484",
    vehicleOwner: "VICKY",
    driverName: "VICKY",
    driverContact: "8191096560",
  },
  {
    vehicleCode: "CIPL/04",
    vehicleType: "PICKUP",
    vehicleNo: "UK06CB2874",
    vehicleOwner: "TARSEM",
    driverName: "TARSEM",
    driverContact: "7818080061",
  },
  {
    vehicleCode: "CIPL/05",
    vehicleType: "PICKUP",
    vehicleNo: "UK06CB6771",
    vehicleOwner: "TARSEM",
    driverName: "DILIP",
    driverContact: "7818080061",
  },
];

const AddVehicle = () => {
  const [vehicleCode, setVehicleCode] = useState<string>("");
  const [details, setDetails] = useState<VehicleDetails>({
    vehicleCode: "",
    vehicleType: "",
    vehicleNo: "",
    vehicleOwner: "",
    driverName: "",
    driverContact: "",
  });

  const handleVehicleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase();
    setVehicleCode(code);

    const vehicleDetail = vehicleData.find(
      (vehicle) => vehicle.vehicleCode === code
    );

    if (vehicleDetail) {
      setDetails(vehicleDetail);
    } else {
      setDetails({
        vehicleCode: "",
        vehicleType: "",
        vehicleNo: "",
        vehicleOwner: "",
        driverName: "",
        driverContact: "",
      });
    }
  };
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [vehicleDetail, setVehicleDetail] = useState("");

  const handleDetailChange = (event:any) => {
    setVehicleDetail(event.target.value);
  };
  const handlePriceChange = (event:any) => {
    setVehiclePrice(event.target.value);
  };
 
  return (
    <div className=" p-4 md:p-0">
      <div className="mx-auto rounded-md p-4 md:p-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <p
            style={{ color: "#107D9F" }}
            className="text-2xl leading-6 md:text-[24px] md:leading-[48px] font-bold text-[#2A333E]"
          >
            Vehicle Details
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <div className="w-full md:w-auto">
            <p>Vehicle Type</p>
            {/* <div>
              <input
                className="w-full md:w-24 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                value={details.vehicleType}
                type="text"
                readOnly
              />
            </div>  */}
            <div className="min-w-[120px]">
              <div className="w-full">
                <select
                  id="detail-select"
                  value={vehicleDetail}
                  onChange={handleDetailChange}
                  className="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value={10}>Choose</option>
                  <option value={20}>Tuk Tuk</option>
                  <option value={30}>Chota Hathi</option>
                  <option value={40}>Pickup</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Vehicle Code</p>
            <div className="d-flex">
              <input
                className="mt-1 w-full md:w-24 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                type="text"
                value={vehicleCode}
                onChange={handleVehicleCodeChange}
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Vehicle No</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.vehicleNo}
                type="text"
                // readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Vehicle Owner</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.vehicleOwner}
                type="text"
                // readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Driver Name</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.driverName}
                type="text"
                // readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Driver Contact</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.driverContact}
                type="text"
                // readOnly
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center"></div>
        <p
          style={{ color: "#107D9F" }}
          className="mt-4 text-2xl leading-6 md:text-[24px] md:leading-[48px] font-bold text-[#2A333E]"
        >
          Vehicle Price
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <div className="w-full md:w-auto">
            <p>Vehicle Type </p>
             <div className="min-w-[120px]">
              <div className="w-full">
                <select
                  id="vehicle-price-select"
                  value={vehiclePrice}
                  onChange={handlePriceChange}
                  className="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value={10}>Choose</option>
                  <option value={20}>Tuk Tuk</option>
                  <option value={30}>Chota Hathi</option>
                  <option value={40}>Pickup</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Driver Freight </p>
            <div>
              <input
                className="mt-1 w-full md:w-24 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                type="text"
                // value={vehicleCode}
                // onChange={handleVehicleCodeChange}
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Customer Freight</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.vehicleType}
                type="text"
                // readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Over Weight </p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.vehicleNo}
                type="text"
                // readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <p>Capacity</p>
            <div>
              <input
                className="mt-1 w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                // value={details.vehicleOwner}
                type="text"
                // readOnly
              />
            </div>
          </div>
        </div>
        <button
          style={{ color: "#107D9F" }}
          className="mt-8 md:mt-12 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          + Add New Base Price
        </button>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="    w-full md:w-auto">
            <p>Range</p>
            <div className="flex items-center ">
              <input
                className="w-full md:w-16 p-1 h-10 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder="Km"
                type="number"
              />
              <i className="fas fa-chevron-down p-2 border border-gray-300 bg-gray-100 rounded-r-md"></i>
            </div>
          </div>
          <p className="hidden md:block">to</p>
          <div className="  w-full md:w-auto mt-2 md:mt-0">
            <div className="flex items-center mt-6">
              <input
                className="w-full md:w-16 p-1 h-10 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder="Km"
                type="number"
              />
              <i className="fas fa-chevron-down p-2 border border-gray-300 bg-gray-100 rounded-r-md"></i>
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Overload Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Driver Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Customer Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="  w-full md:w-auto">
            <p>Range</p>
            <div className="flex items-center">
              <input
                className="w-full md:w-16 p-1 h-10 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder="Km"
                type="number"
              />
              <i className="fas fa-chevron-down p-2 border border-gray-300 bg-gray-100 rounded-r-md"></i>
            </div>
          </div>
          <p className="hidden md:block">to</p>
          <div className="  w-full md:w-auto mt-2 md:mt-0">
            <div className="flex items-center mt-6">
              <input
                className="w-full md:w-16 p-1 h-10 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder="Km"
                type="number"
              />
              <i className="fas fa-chevron-down p-2 border border-gray-300 bg-gray-100 rounded-r-md"></i>
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Overload Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Driver Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
          <div className="  w-full md:w-auto">
            <p>Customer Base Price</p>
            <div>
              <input
                className="w-full md:w-28 h-10 flex gap-2 items-center p-1 text-sm leading-5 font-medium border border-solid border-[#9797AA38] rounded-md focus:outline-none"
                placeholder=""
                type="number"
              />
            </div>
          </div>
        </div>
        <button
          style={{ color: "#ffffff", background: "#107D9F" }}
          className="mt-8 md:mt-12 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
        >
          ✔ Add Vehicle
        </button>
      </div>
    </div>
  );
};

export default AddVehicle;

