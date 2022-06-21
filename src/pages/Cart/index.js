import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Image, Text, Button, Line, Stack } from "components";

const CartPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/checkout");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="129:2"
        comWidth={1920}
        comHeight={1927}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="37"
          comWidth={1920}
          comHeight={97}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="196:25"
            comWidth={1920}
            comHeight={97}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 items-center justify-end lg:pl-[527px] xl:pl-[603px] 2xl:pl-[678px] 3xl:pl-[814px] pl-[904px] 2xl:pr-[108px] 3xl:pr-[129px] pr-[144px] lg:pr-[84px] xl:pr-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
              compId="36"
              comWidth={1920}
              comHeight={96}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-center lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] w-[6%]"
                compId="129:460"
                comWidth={111}
                comHeight={35}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group19_10.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                  compId="129:462"
                  comWidth={39}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group19"
                />
                <Text
                  className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="129:461"
                  comWidth={64}
                  comHeight={35}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Elliye`}</Text>
              </Row>
              <Image
                src={"images/img_icon_6.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[316px] xl:ml-[361px] 2xl:ml-[406px] 3xl:ml-[488px] ml-[542px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
                compId="129:465"
                comWidth={80}
                comHeight={24}
                compLeft={542}
                compRight={0}
                compType="Image"
                alt="icon"
              />
              <Button
                className="bg-gray_800 font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[6%]"
                compId="129:458"
                comWidth={107}
                comHeight={48}
                compLeft={32}
                compRight={0}
                compType="Button"
              >{`Login`}</Button>
            </Row>
            <Line
              className="bg-gray_50 h-[1px] mx-[auto] w-[85%]"
              compId="129:441"
              comWidth={1632}
              comHeight={1}
              compLeft={144}
              compRight={144}
              compType="Line"
            />
          </Column>
        </header>
        <Column
          className="items-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] xl:pr-[1032px] 2xl:pr-[1161px] 3xl:pr-[1394px] pr-[1548px] lg:pr-[903px] w-[100%]"
          compId="317"
          comWidth={1920}
          comHeight={27}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start w-[12%]"
            compId="139:507"
            comWidth={228}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="134:571"
              comWidth={53}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
              compId="134:573"
              comWidth={11}
              comHeight={27}
              compLeft={17}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="134:572"
              comWidth={131}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Shopping Cart`}</Text>
          </Row>
        </Column>
        <Text
          className="font-bold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
          compId="129:475"
          comWidth={268}
          comHeight={54}
          compLeft={826}
          compRight={826}
          compType="Text"
        >{`Shopping Cart`}</Text>
        <Row
          className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mr-[100px] xl:mr-[114px] 2xl:mr-[129px] 3xl:mr-[154px] mr-[172px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[84%]"
          compId="134:583"
          comWidth={1604}
          comHeight={56}
          compLeft={144}
          compRight={172}
          compType="Row"
        >
          <Row
            className="items-center justify-between w-[41%]"
            compId="315"
            comWidth={661}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="border-2 border-gray_800 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[21px] px-[24px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="33"
              comWidth={56}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`1`}</Text>
            <Text
              className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="129:476"
              comWidth={176}
              comHeight={36}
              compLeft={24}
              compRight={0}
              compType="Text"
            >{`Shopping Cart`}</Text>
            <Line
              className="bg-gray_800 h-[2px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[58%]"
              compId="129:482"
              comWidth={384}
              comHeight={2}
              compLeft={21}
              compRight={0}
              compType="Line"
            />
          </Row>
          <Row
            className="items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] w-[40%]"
            compId="273:18"
            comWidth={637}
            comHeight={56}
            compLeft={57}
            compRight={0}
            compType="Row"
          >
            <Row
              className="items-center justify-start w-[31%]"
              compId="129:488"
              comWidth={197}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="border-2 border-bluegray_100 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] px-[21px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-center lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="34"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`2`}</Text>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-left w-[auto]"
                compId="129:489"
                comWidth={117}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Checkout`}</Text>
            </Row>
            <Line
              className="bg-bluegray_100 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[60%]"
              compId="129:483"
              comWidth={384}
              comHeight={2}
              compLeft={56}
              compRight={0}
              compType="Line"
            />
          </Row>
          <Row
            className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[14%]"
            compId="129:492"
            comWidth={217}
            comHeight={56}
            compLeft={32}
            compRight={0}
            compType="Row"
          >
            <Text
              className="border-2 border-bluegray_100 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] px-[21px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-center lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="35"
              comWidth={56}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`3`}</Text>
            <Text
              className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-left w-[auto]"
              compId="129:493"
              comWidth={137}
              comHeight={36}
              compLeft={24}
              compRight={0}
              compType="Text"
            >{`Completed`}</Text>
          </Row>
        </Row>
        <div
          className="lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[85%]"
          compId="273:24"
          comWidth={1632}
          comHeight={591}
          compLeft={144}
          compRight={144}
          compType="table"
        >
          <div
            className="w-[100%]"
            compId="273:21"
            comWidth={1632}
            comHeight={64}
            compLeft={0}
            compRight={0}
            compType="TableHeader"
          >
            <Row
              className="items-start justify-between lg:mr-[197px] xl:mr-[225px] 2xl:mr-[253px] 3xl:mr-[304px] mr-[338px] w-[79%]"
              compId="134:584"
              comWidth={1294}
              comHeight={31}
              compLeft={0}
              compRight={338}
              compType="Row"
            >
              <Text
                className="font-medium xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="129:484"
                comWidth={71}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Row
                className="items-center justify-between lg:ml-[344px] xl:ml-[393px] 2xl:ml-[442px] 3xl:ml-[531px] ml-[590px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[49%]"
                compId="316"
                comWidth={633}
                comHeight={27}
                compLeft={590}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="129:485"
                  comWidth={79}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Quantity`}</Text>
                <Text
                  className="font-medium lg:ml-[134px] xl:ml-[154px] 2xl:ml-[173px] 3xl:ml-[208px] ml-[231px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="129:486"
                  comWidth={44}
                  comHeight={27}
                  compLeft={231}
                  compRight={0}
                  compType="Text"
                >{`Price`}</Text>
                <Text
                  className="font-medium lg:ml-[135px] xl:ml-[155px] 2xl:ml-[174px] 3xl:ml-[209px] ml-[233px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="129:487"
                  comWidth={46}
                  comHeight={27}
                  compLeft={233}
                  compRight={0}
                  compType="Text"
                >{`Total`}</Text>
              </Row>
            </Row>
            <Line
              className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="129:528"
              comWidth={1632}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
          </div>
          <Column
            className="items-center justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
            compId="38"
            comWidth={1632}
            comHeight={496}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="134:585"
              comWidth={1631.94}
              comHeight={200}
              compLeft={0}
              compRight={0.06}
              compType="Row"
            >
              <Stack
                className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="129:506"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_75.png"}
                  className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                  compId="129:507"
                  comWidth={180}
                  comHeight={180}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
              </Stack>
              <Text
                className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:517"
                comWidth={145}
                comHeight={36}
                compLeft={66}
                compRight={0}
                compType="Text"
              >{`Gray T-shirt`}</Text>
              <Stack
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[225px] ml-[250px] lg:my-[44px] xl:my-[50px] 2xl:my-[57px] 3xl:my-[68px] my-[76px] w-[10%]"
                compId="293"
                comWidth={171}
                comHeight={48}
                compLeft={250}
                compRight={0}
                compType="Stack"
              >
                <Row
                  className="absolute lg:gap-[43px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[67px] gap-[75px] grid grid-cols-2 inset-[0] items-center justify-between w-[100%]"
                  compId="292"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_decrease_1.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="133:541"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="decrease"
                  />
                  <Image
                    src={"images/img_increase_1.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="133:535"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="increase"
                  />
                </Row>
                <Button
                  className="absolute border border-bluegray_100 border-solid font-medium inset-[0] py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_800 w-[100%]"
                  compId="133:547"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`1`}</Button>
              </Stack>
              <Text
                className="font-medium lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[83px] 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:519"
                comWidth={88}
                comHeight={35}
                compLeft={139}
                compRight={0}
                compType="Text"
              >{`$100.99`}</Text>
              <Text
                className="font-medium lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[83px] lg:ml-[110px] xl:ml-[126px] 2xl:ml-[142px] 3xl:ml-[171px] ml-[190px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:529"
                comWidth={88}
                comHeight={35}
                compLeft={190}
                compRight={0}
                compType="Text"
              >{`$100.99`}</Text>
              <Image
                src={"images/img_.png"}
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82.06px] lg:ml-[152px] xl:ml-[174px] 2xl:ml-[195px] 3xl:ml-[235px] ml-[261px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] mt-[84px] object-contain rotate-[45deg] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                compId="133:562"
                comWidth={33.94}
                comHeight={33.94}
                compLeft={261}
                compRight={0}
                compType="Image"
                alt=""
              />
            </Row>
            <Line
              className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="129:527"
              comWidth={1632}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
              compId="134:586"
              comWidth={1631.94}
              comHeight={200}
              compLeft={0}
              compRight={0.06}
              compType="Row"
            >
              <Stack
                className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="129:511"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_76.png"}
                  className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                  compId="129:512"
                  comWidth={180}
                  comHeight={180}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
              </Stack>
              <Text
                className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:530"
                comWidth={140}
                comHeight={36}
                compLeft={66}
                compRight={0}
                compType="Text"
              >{`Red Flannel`}</Text>
              <Stack
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[148px] xl:ml-[170px] 2xl:ml-[191px] 3xl:ml-[229px] ml-[255px] lg:my-[44px] xl:my-[50px] 2xl:my-[57px] 3xl:my-[68px] my-[76px] w-[10%]"
                compId="296"
                comWidth={171}
                comHeight={48}
                compLeft={255}
                compRight={0}
                compType="Stack"
              >
                <Row
                  className="absolute lg:gap-[43px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[67px] gap-[75px] grid grid-cols-2 inset-[0] items-center justify-between w-[100%]"
                  compId="295"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_decrease_2.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="133:567"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="decrease"
                  />
                  <Image
                    src={"images/img_increase_2.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="133:565"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="increase"
                  />
                </Row>
                <Button
                  className="absolute border border-bluegray_100 border-solid font-medium inset-[0] py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_800 w-[100%]"
                  compId="133:569"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`1`}</Button>
              </Stack>
              <Text
                className="font-medium lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[83px] 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:531"
                comWidth={88}
                comHeight={35}
                compLeft={139}
                compRight={0}
                compType="Text"
              >{`$100.99`}</Text>
              <Text
                className="font-medium lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[83px] lg:ml-[110px] xl:ml-[126px] 2xl:ml-[142px] 3xl:ml-[171px] ml-[190px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="129:532"
                comWidth={88}
                comHeight={35}
                compLeft={190}
                compRight={0}
                compType="Text"
              >{`$100.99`}</Text>
              <Image
                src={"images/img__1.png"}
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] mb-[83.06px] lg:ml-[152px] xl:ml-[174px] 2xl:ml-[195px] 3xl:ml-[235px] ml-[261px] mt-[83px] lg:my-[48px] xl:my-[55px] 2xl:my-[62px] 3xl:my-[74px] object-contain rotate-[45deg] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                compId="133:563"
                comWidth={33.94}
                comHeight={33.94}
                compLeft={261}
                compRight={0}
                compType="Image"
                alt=""
              />
            </Row>
            <Line
              className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="134:574"
              comWidth={1632}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
          </Column>
        </div>
        <Row
          className="items-start justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="273:25"
          comWidth={1632}
          comHeight={97}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Row
            className="border border-bluegray_100 border-solid items-center justify-between lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] pl-[16px] lg:pl-[9px] w-[28%]"
            compId="134:599"
            comWidth={461}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500_87 tracking-ls1 w-[auto]"
              compId="134:593"
              comWidth={176}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Enter coupon code`}</Text>
            <Button
              className="bg-gray_800 font-normal 3xl:ml-[118px] ml-[132px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] not-italic xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[30%]"
              compId="134:594"
              comWidth={137}
              comHeight={60}
              compLeft={132}
              compRight={0}
              compType="Button"
            >{`Apply Code`}</Button>
          </Row>
          <Column
            className="items-start justify-start ml-[1025px] lg:ml-[597px] xl:ml-[683px] 2xl:ml-[769px] 3xl:ml-[923px] w-[9%]"
            compId="134:590"
            comWidth={146}
            comHeight={97}
            compLeft={1025}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] ml-[97px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="134:588"
              comWidth={46}
              comHeight={27}
              compLeft={97}
              compRight={3}
              compType="Text"
            >{`Total`}</Text>
            <Column
              className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
              compId="319"
              comWidth={146}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                compId="134:589"
                comWidth={146}
                comHeight={54}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`$202.00`}</Text>
            </Column>
          </Column>
        </Row>
        <Column
          className="items-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] 2xl:pl-[1025px] 3xl:pl-[1230px] pl-[1366px] lg:pl-[796px] xl:pl-[911px] 2xl:pr-[108px] 3xl:pr-[129px] pr-[144px] lg:pr-[84px] xl:pr-[96px] w-[100%]"
          compId="318"
          comWidth={1920}
          comHeight={48}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-end w-[21%]"
            compId="134:587"
            comWidth={410}
            comHeight={48}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Button
              className="border border-gray_800 border-solid font-medium py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_800 w-[50%]"
              compId="134:581"
              comWidth={207}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Button"
            >{`Continue Shopping`}</Button>
            <Button
              className="common-pointer bg-gray_800 font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[42%]"
              compId="134:579"
              comWidth={171}
              comHeight={48}
              compLeft={32}
              compRight={0}
              compType="Button"
              onClick={handleNavigate4}
            >{`Checkout`}</Button>
          </Row>
        </Column>
        <footer
          className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="199:510"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="70"
            comWidth={1632}
            comHeight={397}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-between w-[100%]"
              compId="273:28"
              comWidth={1632}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] w-[25%]"
                compId="199:529"
                comWidth={416}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mr-[177px] xl:mr-[203px] 2xl:mr-[228px] 3xl:mr-[274px] mr-[305px] w-[27%]"
                  compId="199:530"
                  comWidth={111}
                  comHeight={35}
                  compLeft={0}
                  compRight={305}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_11.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="199:532"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:531"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                  compId="199:536"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="320"
                  comWidth={416}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start pl-[1px] lg:pr-[120px] xl:pr-[138px] 2xl:pr-[155px] 3xl:pr-[186px] pr-[207px] w-[100%]"
                    compId="199:537"
                    comWidth={416}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start ml-[0] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] w-[36%]"
                      compId="199:538"
                      comWidth={149.02}
                      comHeight={32}
                      compLeft={0}
                      compRight={58}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector_57.png"}
                        className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                        compId="199:540"
                        comWidth={19.93}
                        comHeight={19.87}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="199:541"
                        comWidth={119}
                        comHeight={32}
                        compLeft={10.09}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                      compId="199:542"
                      comWidth={207}
                      comHeight={32}
                      compLeft={0.02}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector_58.png"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                        compId="199:544"
                        comWidth={20}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="199:545"
                        comWidth={177}
                        comHeight={32}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row
                className="items-start justify-between lg:ml-[162px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[250px] ml-[278px] w-[57%]"
                compId="273:27"
                comWidth={938}
                comHeight={280}
                compLeft={278}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] w-[18%]"
                  compId="199:522"
                  comWidth={165}
                  comHeight={224}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="321"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="199:523"
                      comWidth={165}
                      comHeight={35}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Product Links`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[61%]"
                    compId="199:524"
                    comWidth={100}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center w-[100%]"
                      compId="322"
                      comWidth={100}
                      comHeight={70}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:525"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:526"
                        comWidth={99}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`New Arrival`}</Text>
                    </Column>
                    <Text
                      className="font-normal lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="199:527"
                      comWidth={78}
                      comHeight={27}
                      compLeft={0}
                      compRight={22}
                      compType="Text"
                    >{`Features`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="323"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:528"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Collections`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[16%]"
                  compId="199:513"
                  comWidth={147}
                  comHeight={280}
                  compLeft={112}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:514"
                    comWidth={123}
                    comHeight={35}
                    compLeft={0}
                    compRight={24}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[100%]"
                    compId="324"
                    comWidth={147}
                    comHeight={212}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="199:515"
                      comWidth={147}
                      comHeight={212}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:516"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={93}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:517"
                        comWidth={39}
                        comHeight={27}
                        compLeft={0}
                        compRight={108}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:518"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={75}
                        compType="Text"
                      >{`Careers`}</Text>
                      <Text
                        className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:519"
                        comWidth={75}
                        comHeight={27}
                        compLeft={0}
                        compRight={72}
                        compType="Text"
                      >{`Services`}</Text>
                      <Text
                        className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="199:520"
                        comWidth={120}
                        comHeight={27}
                        compLeft={0}
                        compRight={27}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Column
                        className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                        compId="325"
                        comWidth={147}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                          compId="199:521"
                          comWidth={147}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Terms of service`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[41%]"
                  compId="199:546"
                  comWidth={384}
                  comHeight={209}
                  compLeft={130}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:554"
                    comWidth={238}
                    comHeight={36}
                    compLeft={0}
                    compRight={146}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Column
                    className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                    compId="326"
                    comWidth={384}
                    comHeight={149}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                      compId="199:555"
                      comWidth={384}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                    <Row
                      className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                      compId="199:547"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                        compId="199:549"
                        comWidth={149.77}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Enter your email`}</Text>
                      <Image
                        src={"images/img_submit_5.png"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="199:550"
                        comWidth={60}
                        comHeight={60}
                        compLeft={149.61}
                        compRight={0}
                        compType="Image"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text
              className="font-normal 2xl:ml-[507px] 3xl:ml-[608px] ml-[676px] 2xl:mr-[508px] 3xl:mr-[609px] mr-[677px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] lg:mx-[394px] xl:mx-[451px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 text-left w-[auto]"
              compId="199:512"
              comWidth={279}
              comHeight={21}
              compLeft={676}
              compRight={677}
              compType="Text"
            >{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default CartPage;
