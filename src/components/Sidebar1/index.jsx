import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col gap-[26px] items-center justify-start ml-5 md:ml-[0] mr-[81px] w-[67%]">
          <Button
            className="cursor-pointer font-bold font-inter leading-[normal] min-w-[200px] text-base text-center"
            shape="round"
            color="gray_800"
            size="xs"
            variant="fill"
          >
            Клієнт
          </Button>
          <Button
            className="cursor-pointer font-bold font-inter leading-[normal] min-w-[200px] text-base text-center"
            shape="round"
            color="gray_800"
            size="xs"
            variant="fill"
          >
            Менеджер
          </Button>
        </div>
        <Img
          className="h-[301px] md:h-auto mt-[563px] object-cover rounded-[10px] w-[301px]"
          src="images/img_.png"
          alt="Fourteen"
        />
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
