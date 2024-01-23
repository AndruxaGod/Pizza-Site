import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-deep_orange-100 flex flex-col font-inter items-center justify-end mx-auto pt-3.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar1 className="!sticky !w-[301px] bg-gray-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[30px] top-[0]" />
          <div className="flex flex-1 flex-col gap-[46px] items-center justify-start mb-[445px] md:ml-[0] ml-[239px] md:mt-0 mt-[189px] md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
              size="txtInterBold36"
            >
              Авторизація
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-red-200 text-xl"
                size="txtInterBold20Red200"
              >
                E-mail
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col gap-[30px] h-[200px] items-center justify-end pr-2 py-2 w-full"
                style={{ backgroundImage: "url('images/img_group48.svg')" }}
              >
                <Text
                  className="mt-[68px] text-red-200 text-xl"
                  size="txtInterBold20Red200"
                >
                  Пароль
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[200px] text-base text-center"
                  shape="round"
                  color="gray_800"
                  size="xs"
                  variant="fill"
                >
                  Продовжити
                </Button>
              </div>
              <Text
                className="common-pointer md:ml-[0] ml-[93px] mt-[7px] text-black-900 text-center text-xl"
                size="txtInterBold20"
                onClick={() => navigate("/")}
              >
                Немає аккаунта?{" "}
              </Text>
              <Text
                className="common-pointer md:ml-[0] ml-[123px] text-center text-pink-600 text-xl"
                size="txtInterBold20Pink600"
                onClick={() => navigate("/")}
              >
                Реєстрація
              </Text>
            </div>
          </div>
          <Img
            className="h-[356px] md:h-auto md:ml-[0] ml-[183px] md:mt-0 mt-[653px] object-cover rounded-[10px] w-[356px]"
            src="images/img__356x356.png"
            alt="Thirteen"
          />
        </div>
      </div>
    </>
  );
};

export default Page1;
