import { Figtree } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  LiaChevronCircleDownSolid as Chev,
  LiaChevronLeftSolid,
  LiaChevronRightSolid,
  LiaCookieBiteSolid,
  LiaDirectionsSolid,
  LiaOdnoklassniki,
  LiaPhoneSolid,
} from "react-icons/lia";
import { LuMail } from "react-icons/lu";
import longSleeveWhite from "/public/assets/longSleeve-white.png";
import shortSleeveWhite from "/public/assets/shirt-white.png";
import sleevelessWhite from "/public/assets/sleeveless-white.png";

const font = Figtree({ subsets: ["latin"] });

export default function Home() {
  const [isHidden, setIsHidden] = useState(false);
  const handleAccept = () => {
    setShowAlert(false);
  };
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Head>
        <title>T-shirt Order Site</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${font.className} flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-slate-900/80 to-slate-800/80`}
      >
        <div className="navbar bg-base-300 rounded-box ">
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
          <div className="carousel min-w-[400px] max-w-[600px] ">
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
          <div className="md:ml-6 md:w-1/2 lg:ml-8">
            <div className="border-b border-gray-400 pb-7">
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
              <div className="flex items-center justify-center gap-9 ">
                <div className="form-control ">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-neutral-300">
                      White
                    </span>
                    <input
                      type="radio"
                      name="radio-10"
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
                      name="radio-10"
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
                      name="radio-10"
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
              <div className=" textarea-sm  flex pr-0 font-thin">
                <span className="ms-3">
                  Small
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
                <span className="ms-3">
                  Medium
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
                <span className="ms-3">
                  Large
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
                <span className="ms-3">
                  XLarge
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 ">
              <p className="text-base font-semibold leading-3 text-gray-300 ">
                Style
              </p>
              <div className=" textarea-sm  flex pr-0 font-thin">
                <span className="ms-3">
                  Short Sleeve
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
                <span className="ms-3">
                  Long Sleeve
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
                <span className="ms-3">
                  Sleeveless
                  <input
                    type="number"
                    placeholder="0"
                    className="input input-bordered h-10 w-11 sm:ms-1"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 ">
              <p className="text-base font-semibold leading-3 text-gray-300 ">
                Order Total
              </p>
              <p className="text-sm">$10 x numOfShirts</p>
              <p className="text-lg">$ orderTotal</p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <div>
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setIsHidden(!isHidden)}
                >
                  <p className="text-base font-bold leading-4 text-gray-300">
                    Shipping Information
                  </p>
                  <button
                    className="
          cursor-pointer
          rounded focus:outline-none focus:ring-2 focus:ring-gray-400
          focus:ring-offset-2
        "
                    aria-label="show or hide"
                  >
                    <Chev size={25} color="neutral-400" />
                  </button>
                </div>
                <div
                  className={`pt-3 text-base leading-normal text-gray-500 ${isHidden ? "hidden" : ""}`}
                >
                  <div className="flex-wrap  p-1">
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
                  </div>
                </div>
              </div>
            </div>
            <button className="btn mt-7 w-full bg-amber-500 text-xl font-extrabold text-blue-900 hover:bg-amber-600">
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
      </main>
    </>
  );
}
