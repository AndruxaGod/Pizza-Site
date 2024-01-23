import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="common-pointer bg-deep_orange-100 flex flex-col font-inter items-center justify-end mx-auto pt-3.5 w-full"
        onClick={() => navigate(-1)}
      >
        <div className="flex flex-col justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-end md:ml-[0] ml-[1019px] md:px-5 w-[29%] md:w-full">
            <Text
              className="text-black-900 text-center text-xl"
              size="txtInterBold20"
            >
              Вже є аккаунт?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[200px] text-base text-center"
              onClick={() => navigate("/page1")}
              shape="round"
              color="gray_800"
              size="xs"
              variant="fill"
            >
              Авторизація
            </Button>
          </div>
          <Text
            className="md:ml-[0] ml-[505px] mt-[127px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 text-shadow-ts"
            size="txtInterBold36"
          >
            Реєстрація
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-11 w-full">
            <Img
              className="h-[301px] md:h-auto md:mt-0 mt-[428px] object-cover rounded-[10px] w-[301px]"
              src="images/img_.png"
              alt="Three"
            />
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[239px] pb-[200px] md:px-5 w-1/4 md:w-full">
              <Input
                name="Four"
                placeholder="Ваш ПІБ"
                className="font-bold leading-[normal] p-0 placeholder:text-red-200 text-left text-red-200 text-xl w-full"
                wrapClassName="w-[23%]"
              ></Input>
              <div className="md:h-[397px] h-[401px] relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[73px] py-[73px] w-full"
                  style={{ backgroundImage: "url('images/img_group50.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-6 w-3/5 md:w-full">
                    <Input
                      name="email"
                      placeholder="E-mail"
                      className="font-bold leading-[normal] p-0 placeholder:text-red-200 text-left text-red-200 text-xl w-full"
                      wrapClassName="w-[37%]"
                      type="email"
                    ></Input>
                    <Input
                      name="Five"
                      placeholder="Пароль"
                      className="font-bold leading-[normal] p-0 placeholder:text-red-200 text-left text-red-200 text-xl w-full"
                      wrapClassName="mt-[77px] w-[45%]"
                    ></Input>
                    <Input
                      name="Six"
                      placeholder="Номер телефона"
                      className="font-bold leading-[normal] p-0 placeholder:text-red-200 text-left text-red-200 text-xl w-full"
                      wrapClassName="mt-[75px] w-full"
                    ></Input>
                  </div>
                </div>
                <Input
                  name="Seven"
                  placeholder="Адреса"
                  className="font-bold leading-[normal] p-0 placeholder:text-red-200 text-left text-red-200 text-xl w-full"
                  wrapClassName="absolute bottom-[0] left-[0] w-[22%]"
                ></Input>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[200px] ml-20 md:ml-[0] mt-[42px] text-base text-center"
                onClick={() => navigate("/page1")}
                shape="round"
                color="gray_800"
                size="xs"
                variant="fill"
              >
                Продовжити
              </Button>
            </div>
            <Img
              className="h-[356px] md:h-auto md:ml-[0] ml-[183px] md:mt-0 mt-[372px] object-cover rounded-[10px] w-[356px]"
              src="images/img__356x356.png"
              alt="Eight"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
