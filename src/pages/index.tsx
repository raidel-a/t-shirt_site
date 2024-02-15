import { Figtree } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  LiaChevronCircleDownSolid as Chev,
  LiaCcAmex,
  LiaCcDiscover,
  LiaCcMastercard,
  LiaCcVisa,
  LiaChevronLeftSolid,
  LiaChevronRightSolid,
  LiaCookieBiteSolid,
  LiaDirectionsSolid,
  LiaMoneyBillWaveSolid,
  LiaOdnoklassniki,
  LiaPhoneSolid,
} from "react-icons/lia";
import { LuMail } from "react-icons/lu";
import longSleeveWhite from "/public/assets/longSleeve-white.png";
import shortSleeveWhite from "/public/assets/shirt-white.png";
import sleevelessWhite from "/public/assets/sleeveless-white.png";

const font = Figtree({ subsets: ["latin"] });

export default function Home() {
  const [shipHidden, setshipIsHidden] = useState(false);
  const [payHidden, setpayIsHidden] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");

  const [showAlert, setShowAlert] = useState(true);

  const [selectedMonth, setSelectedMonth] = useState("Expiration Month");
  const [selectedYear, setSelectedYear] = useState("Expiration Year");

  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);
  const [large, setLarge] = useState(0);
  const [xLarge, setXLarge] = useState(0);
  const [expressShipping, setExpressShipping] = useState(false);

  const numOfShirts = small + medium + large + xLarge;
  const orderTotal = numOfShirts * 10 + (expressShipping ? 10 : 0);

  const months = [
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December",
  ];

  const years = ["2024", "2025", "2026", "2027", "2028", "2029"];

  const handleAccept = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Head>
        <title>T-shirt Order Site</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${font.className} to-slate-[] flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-slate-900/80`}
      >
        <div className="navbar bg-base-300 top-2 rounded-b-3xl ">
          <div className=" flex-1 lg:flex-none">
            <a className="ps-2 text-lg font-bold">
              Easter Egg Hunt Team Shirts
            </a>
          </div>
          <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch">
              <a className="btn btn-ghost rounded-btn">Clear Form</a>
              <div className="divider divider-horizontal" />
              <a className="btn btn-ghost rounded-btn">Exit</a>
            </div>
          </div>
        </div>
        <div className="w-full items-start justify-center overflow-hidden bg-gradient-to-t via-black px-2 py-10 md:flex md:px-6 2xl:px-0">
          <div className="carousel max-w-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                width={700}
                height={700}
                alt="Woman wearing a white t-shirt"
                src={shortSleeveWhite}
                className="w-full rounded-lg"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  <LiaChevronLeftSolid size={25} color="gold" />
                </a>
                <a href="#slide2" className="btn btn-circle">
                  <LiaChevronRightSolid size={25} color="gold" />
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image
                width={700}
                height={700}
                alt="Man wearing a white long sleeve t-shirt"
                src={longSleeveWhite}
                className="w-full rounded-lg"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  <LiaChevronLeftSolid size={25} color="gold" />
                </a>
                <a href="#slide3" className="btn btn-circle">
                  <LiaChevronRightSolid size={25} color="gold" />
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image
                width={700}
                height={700}
                alt="White sleeveless shirt"
                src={sleevelessWhite}
                className="w-full rounded-lg"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  <LiaChevronLeftSolid size={25} color="gold" />
                </a>
                <a href="#slide1" className="btn btn-circle">
                  <LiaChevronRightSolid size={25} color="gold" />
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[300px] md:ml-6 md:w-1/2 lg:ml-8">
            <div className="border-b border-gray-400 p-7">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Team Name"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4">
              <p className="text-base font-semibold leading-4 text-gray-300">
                Colour
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="form-control ">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-neutral-300">
                      White
                    </span>
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio checked:bg-white"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-neutral-300">
                      Gold
                    </span>
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio checked:bg-amber-400"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-neutral-300">
                      Blue
                    </span>
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 ">
              <p className="text-base font-semibold leading-3 text-gray-300 ">
                Sizes
              </p>
              <div className="textarea-sm flex gap-0 font-thin">
                <span className="mx-2">
                  Small{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                    onChange={(e) => setSmall(Number(e.target.value))}
                  />
                </span>
                <span className="mx-2">
                  Medium{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                    onChange={(e) => setMedium(Number(e.target.value))}
                  />
                </span>
                <span className="mx-2">
                  Large{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                    onChange={(e) => setLarge(Number(e.target.value))}
                  />
                </span>
                <span className="mx-2">
                  XLarge{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                    onChange={(e) => setXLarge(Number(e.target.value))}
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 ">
              <p className="text-base font-semibold leading-3 text-gray-300 ">
                Style
              </p>
              <div className=" textarea-sm flex font-thin">
                <span className="mx-3">
                  T-Shirt{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                  />
                </span>
                <span className="mx-3">
                  Sleeved{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                  />
                </span>
                <span className="mx-3">
                  Tank Top{" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 "
                  />
                </span>
              </div>
            </div>
            <div className="border-b border-gray-200 py-4">
              <div>
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setshipIsHidden(!shipHidden)}
                >
                  <p className="text-base font-bold leading-4 text-gray-300">
                    Customer Information
                  </p>
                  <button
                    className="cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    aria-label="show or hide"
                  >
                    <Chev size={25} color="neutral-400" />
                  </button>
                </div>
                <div
                  className={`pt-3 text-base leading-normal text-gray-500 ${shipHidden ? "hidden" : ""}`}
                >
                  <div className="flex-wrap p-1">
                    <label className="input input-bordered flex items-center">
                      <LiaOdnoklassniki size={25} />
                      <input
                        type="text"
                        className="label-text grow"
                        placeholder="Full Name"
                      />
                    </label>
                    <label className="input input-bordered mt-2 flex items-center">
                      <LuMail size={25} />
                      <input
                        type="text"
                        className="label-text grow"
                        placeholder=" E-mail"
                      />
                    </label>
                    <label className="input input-bordered mt-2 flex items-center">
                      <LiaPhoneSolid size={25} />
                      <input
                        type="text"
                        className="label-text grow"
                        placeholder=" Phone Number"
                      />
                    </label>
                    <div className="divider " />
                    <span className="flex gap-2">
                      <label className="input input-bordered flex w-3/4 items-center">
                        <LiaDirectionsSolid size={25} />
                        <input
                          type="text"
                          className="label-text grow"
                          placeholder=" Address"
                        />
                      </label>
                      <label className="input input-bordered flex w-1/4 items-center">
                        <input
                          type="text"
                          className="label-text grow"
                          placeholder=" State"
                        />
                      </label>
                    </span>
                    <span className="flex gap-2">
                      <label className="input input-bordered mt-2 flex w-3/5 items-center">
                        <input
                          type="text"
                          className="label-text grow"
                          placeholder=" City"
                        />
                      </label>
                      <label className="input input-bordered mt-2 flex w-2/5 items-center">
                        <input
                          type="text"
                          className="label-text grow"
                          placeholder=" Zip Code"
                        />
                      </label>
                    </span>
                  </div>{" "}
                  <div className="form-control items-stretch justify-center ">
                    <label className="label cursor-pointer">
                      <span className="label-text">Express Shipping</span>
                      <span className="flex">
                        +$10
                        <input
                          type="checkbox"
                          className="checkbox checkbox-warning ml-2"
                          onChange={(e) => setExpressShipping(e.target.checked)}
                        />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="border-b border-gray-200 py-4">
              <div>
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setpayIsHidden(!payHidden)}
                >
                  <p className="text-base font-bold leading-4 text-gray-300">
                    Payment & Delivery
                  </p>
                  <button
                    className="cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    aria-label="show or hide"
                  >
                    <Chev size={25} color="neutral-400" />
                  </button>
                </div>
                <div
                  className={`pt-3 text-base leading-normal text-gray-500 ${payHidden ? "hidden" : ""}`}
                >
                  <div className="flex-wrap  p-1">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Pick-Up</span>
                        <input
                          type="radio"
                          name="radio-2"
                          id="Pick-Up"
                          className="radio checked:bg-white-500"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Delivery</span>
                        <input
                          type="radio"
                          name="radio-2"
                          id="Delivery"
                          className="radio checked:bg-white-500"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="divider" />
                  <div className=" -mx-2 mb-3 flex justify-end">
                    <div className="form control px-2 ">
                      <label className="label cursor-pointer gap-2">
                        <input
                          type="radio"
                          name="radio-3"
                          id="Card"
                          className="radio radio-sm checked:bg-white-500 "
                          onChange={(e) => setPaymentMethod(e.target.id)}
                        />
                        <LiaCcVisa size={36} />
                        <LiaCcMastercard size={36} />
                        <LiaCcDiscover size={36} />
                        <LiaCcAmex size={36} />
                      </label>
                    </div>

                    <div className="form control px-2">
                      <label className="label cursor-pointer gap-2">
                        <input
                          type="radio"
                          className="radio radio-sm checked:bg-white-500"
                          name="radio-3"
                          id="Cash"
                          onChange={(e) => setPaymentMethod(e.target.id)}
                        />
                        <LiaMoneyBillWaveSolid size={36} />
                      </label>
                    </div>
                  </div>
                  {paymentMethod === "Card" && (
                    <div id="card info">
                      <div className="mb-3">
                        <label className="input input-bordered flex items-center ">
                          Name on card
                          <div>
                            <input
                              placeholder="John Smith"
                              type="text"
                              className="label-text mx-4 grow"
                            />
                          </div>
                        </label>
                      </div>
                      <div className="mb-3">
                        <label className="input input-bordered flex items-center ">
                          Card number
                          <div>
                            <input
                              className="hide-arrow label-text mx-4 min-w-[155px] grow"
                              placeholder="0000 0000 0000 0000"
                              type="number"
                            />
                          </div>
                        </label>
                      </div>
                      <div className="mb-3 flex">
                        <div className="w-1/3 ">
                          <details className="dropdown dropdown-top">
                            <summary className="btn m-1">
                              {selectedMonth}
                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                              {months.map((month) => (
                                <li key={month}>
                                  <a onClick={() => setSelectedMonth(month)}>
                                    {month}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </div>
                        <div className="w-1/3 px-2">
                          <details className="dropdown dropdown-top">
                            <summary className="btn m-1">
                              {selectedYear}
                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                              {years.map((year) => (
                                <li key={year}>
                                  <a onClick={() => setSelectedYear(year)}>
                                    {year}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </div>
                        <div className="w-1/3 ">
                          <label className="input input-bordered flex items-center ">
                            <div>
                              <input
                                placeholder="Security Code"
                                type="number"
                                className="hide-arrow label-text mx-4 grow"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {paymentMethod === "Cash" && (
                    <p className="flex justify-center text-2xl">
                      Please pay via mail or in person
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 ">
              <p className="text-base font-semibold leading-3 text-gray-300 ">
                Order Total
              </p>
              <p className="text-sm">
                $10 x {numOfShirts} {expressShipping && "+ $10"}
              </p>
              <p className="text-lg">$ {orderTotal}</p>
            </div>
            <button className="btn mt-7 w-full bg-yellow-600 text-2xl font-black text-slate-300 hover:bg-yellow-700 active:scale-95 active:text-black">
              Order Shirts
            </button>
          </div>
        </div>

        <div className="fixed bottom-2">
          {showAlert && (
            <div role="alert" className="alert">
              <LiaCookieBiteSolid size={28} />
              <span>we use cookies for no reason.</span>

              <button className="btn btn-sm" onClick={handleAccept}>
                Accept
              </button>
              <button className="btn btn-sm btn-primary" onClick={handleAccept}>
                Accept
              </button>
            </div>
          )}
        </div>
        <div className="flex h-20 w-full items-center justify-center bg-gradient-to-t from-black via-65% via-transparent ">
          <p className="text-center text-lg text-neutral-400/70 font-sans font-semibold">
            Made with TypeScript, Tailwind, and React
            <br />
            <a className="underline decoration-wavy decoration-teal-600" href="raidel.dev">raidel.dev</a>
          </p>
        </div>
      </main>
    </>
  );
}
