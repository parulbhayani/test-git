import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Line,
  Input,
  SelectBox,
} from "components";

const CheckoutPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/completed");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="136:600"
        comWidth={1920}
        comHeight={1813}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="348"
          comWidth={1920}
          comHeight={97}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="46"
            comWidth={1920}
            comHeight={97}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="198:30"
              comWidth={1920}
              comHeight={97}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-end lg:pl-[527px] xl:pl-[603px] 2xl:pl-[678px] 3xl:pl-[814px] pl-[904px] 2xl:pr-[108px] 3xl:pr-[129px] pr-[144px] lg:pr-[84px] xl:pr-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
                compId="45"
                comWidth={1920}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group19_12.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[2%]"
                  compId="198:37"
                  comWidth={39}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group19"
                />
                <Text
                  className="cursor-pointer hover:font-bold font-bold lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="198:36"
                  comWidth={64}
                  comHeight={35}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Elliye`}</Text>
                <Image
                  src={"images/img_icon_7.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[316px] xl:ml-[361px] 2xl:ml-[406px] 3xl:ml-[488px] ml-[542px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
                  compId="198:40"
                  comWidth={80}
                  comHeight={24}
                  compLeft={542}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Button
                  className="bg-gray_800 font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] py-[10.5px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[6%]"
                  compId="198:33"
                  comWidth={107}
                  comHeight={48}
                  compLeft={32}
                  compRight={0}
                  compType="Button"
                >{`Login`}</Button>
              </Row>
              <Line
                className="bg-gray_50 h-[1px] mx-[auto] w-[85%]"
                compId="198:32"
                comWidth={1632}
                comHeight={1}
                compLeft={144}
                compRight={144}
                compType="Line"
              />
            </Column>
          </header>
        </Column>
        <Row
          className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[1062px] 3xl:mr-[1275px] mr-[1416px] lg:mr-[826px] xl:mr-[944px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[19%]"
          compId="196:29"
          comWidth={360}
          comHeight={27}
          compLeft={144}
          compRight={1416}
          compType="Row"
        >
          <Text
            className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
            compId="136:769"
            comWidth={53}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Home`}</Text>
          <Text
            className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
            compId="136:771"
            comWidth={11}
            comHeight={27}
            compLeft={17}
            compRight={0}
            compType="Text"
          >{`>`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
            compId="136:770"
            comWidth={131}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`Shopping Cart`}</Text>
          <Text
            className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
            compId="136:800"
            comWidth={11}
            comHeight={27}
            compLeft={17}
            compRight={0}
            compType="Text"
          >{`>`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="136:799"
            comWidth={88}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`Checkout`}</Text>
        </Row>
        <Column
          className="items-center lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] w-[100%]"
          compId="349"
          comWidth={1920}
          comHeight={1617}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="136:717"
            comWidth={180}
            comHeight={54}
            compLeft={870}
            compRight={870}
            compType="Text"
          >{`Checkout`}</Text>
          <Row
            className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mr-[100px] xl:mr-[114px] 2xl:mr-[129px] 3xl:mr-[154px] mr-[172px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[84%]"
            compId="198:50"
            comWidth={1604}
            comHeight={56}
            compLeft={144}
            compRight={172}
            compType="Row"
          >
            <Row
              className="items-center justify-between w-[41%]"
              compId="347"
              comWidth={661}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="border-2 border-gray_800 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[14px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[21px] px-[24px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="42"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`1`}</Text>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="198:52"
                comWidth={176}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Shopping Cart`}</Text>
              <Line
                className="bg-gray_800 h-[2px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[58%]"
                compId="198:55"
                comWidth={384}
                comHeight={2}
                compLeft={21}
                compRight={0}
                compType="Line"
              />
            </Row>
            <Text
              className="border-2 border-gray_800 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] px-[21px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="43"
              comWidth={56}
              comHeight={56}
              compLeft={57}
              compRight={0}
              compType="Text"
            >{`2`}</Text>
            <Text
              className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="198:57"
              comWidth={117}
              comHeight={36}
              compLeft={24}
              compRight={0}
              compType="Text"
            >{`Checkout`}</Text>
            <Line
              className="bg-bluegray_100 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[24%]"
              compId="198:60"
              comWidth={384}
              comHeight={2}
              compLeft={56}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[14%]"
              compId="198:61"
              comWidth={217}
              comHeight={56}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Text
                className="border-2 border-bluegray_100 border-solid font-medium lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] leading-[normal] pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] px-[21px] 3xl:py-[9px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-center lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="44"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`3`}</Text>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 text-left w-[auto]"
                compId="198:62"
                comWidth={137}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Completed`}</Text>
            </Row>
          </Row>
          <Row
            className="items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] w-[100%]"
            compId="341"
            comWidth={1920}
            comHeight={734}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start w-[34%]"
              compId="137:47"
              comWidth={662}
              comHeight={734}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-center pr-[1px] w-[100%]"
                compId="350"
                comWidth={662}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_100 font-medium lg:pb-[19px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[33px] pl-[0] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] pt-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                  compId="48"
                  comWidth={661}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group48"
                  placeholder={`Buyer Info`}
                ></Input>
              </Column>
              <Text
                className="font-normal ml-[1px] lg:mr-[335px] xl:mr-[383px] 2xl:mr-[431px] 3xl:mr-[517px] mr-[575px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="136:804"
                comWidth={86}
                comHeight={27}
                compLeft={1}
                compRight={575}
                compType="Text"
              >{`Full Name`}</Text>
              <Column
                className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] pl-[1px] w-[100%]"
                compId="351"
                comWidth={662}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                  compId="136:803"
                  comWidth={661}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="form"
                  placeholder={""}
                ></Input>
              </Column>
              <Text
                className="font-normal ml-[1px] lg:mr-[342px] xl:mr-[391px] 2xl:mr-[440px] 3xl:mr-[528px] mr-[587px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[auto]"
                compId="136:810"
                comWidth={74}
                comHeight={27}
                compLeft={1}
                compRight={587}
                compType="Text"
              >{`Address`}</Text>
              <Column
                className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] pl-[1px] w-[100%]"
                compId="352"
                comWidth={662}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                  compId="136:809"
                  comWidth={661}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="form"
                  placeholder={""}
                ></Input>
              </Column>
              <Text
                className="font-normal lg:mr-[343px] xl:mr-[392px] 2xl:mr-[441px] 3xl:mr-[529px] mr-[588px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[auto]"
                compId="136:813"
                comWidth={74}
                comHeight={27}
                compLeft={0}
                compRight={588}
                compType="Text"
              >{`Contact`}</Text>
              <Column
                className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] pr-[1px] w-[100%]"
                compId="353"
                comWidth={662}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                  compId="136:812"
                  comWidth={661}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="form"
                  placeholder={""}
                ></Input>
              </Column>
              <Text
                className="font-normal ml-[1px] lg:mr-[365px] xl:mr-[417px] 2xl:mr-[470px] 3xl:mr-[564px] mr-[626.5px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[auto]"
                compId="136:816"
                comWidth={35}
                comHeight={27}
                compLeft={0.5}
                compRight={626.5}
                compType="Text"
              >{`City`}</Text>
              <Column
                className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                compId="354"
                comWidth={662}
                comHeight={195}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                  compId="136:815"
                  comWidth={661}
                  comHeight={60}
                  compLeft={0}
                  compRight={1}
                  compType="EditText"
                  name="form"
                  placeholder={""}
                ></Input>
                <Row
                  className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] pr-[1px] w-[100%]"
                  compId="327"
                  comWidth={662}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[58%]"
                    compId="137:27"
                    comWidth={384}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[196px] xl:mr-[224px] 2xl:mr-[252px] 3xl:mr-[302px] mr-[336px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[auto]"
                      compId="136:818"
                      comWidth={48}
                      comHeight={27}
                      compLeft={0}
                      compRight={336}
                      compType="Text"
                    >{`State`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="355"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div className="bg-transparent w-[100%] input-wrap">
                        <Image
                          src={"images/img_vector_59.png"}
                          className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                          compId="137:40"
                          comWidth={9.94}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Vector"
                        />
                        <SelectBox
                          className="bg-transparent border border-bluegray_100 border-solid font-normal xl:pb-[11px] 3xl:pb-[15px] pb-[17px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[34px] xl:pr-[39px] 2xl:pr-[44px] 3xl:pr-[53px] pr-[58.94px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] 2xl:py-[12px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                          compId="137:41"
                          comWidth={0}
                          comHeight={60}
                          compLeft={0}
                          compRight={0}
                          compType="Dropdown"
                          placeholderClassName="bg-transparent text-gray_500"
                          name="form"
                          placeholder={`Select State`}
                          isSearchable={false}
                          isMulti={false}
                        ></SelectBox>
                      </div>
                    </Column>
                  </Column>
                  <Column
                    className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[37%]"
                    compId="137:26"
                    comWidth={245}
                    comHeight={103}
                    compLeft={32}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal xl:mr-[110px] 2xl:mr-[123px] 3xl:mr-[148px] mr-[165px] lg:mr-[96px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[auto]"
                      compId="136:820"
                      comWidth={80}
                      comHeight={27}
                      compLeft={0}
                      compRight={165}
                      compType="Text"
                    >{`Zip Code`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="356"
                      comWidth={245}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Input
                        className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                        compId="136:819"
                        comWidth={245}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="form"
                        placeholder={""}
                      ></Input>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column
              className="items-start xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[153px] ml-[170px] lg:ml-[99px] w-[42%]"
              compId="139:30"
              comWidth={800}
              comHeight={734}
              compLeft={170}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="357"
                comWidth={800}
                comHeight={194}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_100 font-medium lg:pb-[19px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[33px] pl-[0] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] pt-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                  compId="139:31"
                  comWidth={800}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="title"
                  placeholder={`Payment Method`}
                ></Input>
                <Row
                  className="lg:gap-[19px] xl:gap-[22px] 2xl:gap-[24px] 3xl:gap-[29px] gap-[33px] grid grid-cols-3 items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
                  compId="139:29"
                  comWidth={800}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div className="w-[100%] input-wrap">
                    <Image
                      src={"images/img_card_3.png"}
                      className="absolute z-[1] w-[40px] h-[40px] left-[0] lg:w-[23px] lg:h-[24px] xl:w-[26px] xl:h-[27px] 2xl:w-[30px] 2xl:h-[31px] 3xl:w-[36px] 3xl:h-[37px] my-[auto] inset-y-[0]"
                      compId="139:8"
                      comWidth={40}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Card"
                    />
                    <Button
                      className="border border-bluegray_100 border-solid font-normal not-italic lg:pl-[47px] xl:pl-[54px] 2xl:pl-[61px] 3xl:pl-[73px] pl-[82.00px] lg:py-[20px] xl:py-[23px] 2xl:py-[26px] 3xl:py-[31px] py-[35px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[100%]"
                      compId="139:25"
                      comWidth={0}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Credit Card`}</Button>
                  </div>
                  <div className="w-[100%] input-wrap">
                    <Image
                      src={"images/img_transfer.png"}
                      className="absolute z-[1] w-[40px] h-[40px] left-[0] lg:w-[23px] lg:h-[24px] xl:w-[26px] xl:h-[27px] 2xl:w-[30px] 2xl:h-[31px] 3xl:w-[36px] 3xl:h-[37px] my-[auto] inset-y-[0]"
                      compId="139:21"
                      comWidth={40}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="transfer"
                    />
                    <Button
                      className="bg-gray_800 border border-bluegray_100 border-solid font-normal not-italic lg:pl-[42px] xl:pl-[48px] 2xl:pl-[54px] 3xl:pl-[65px] pl-[73.00px] lg:py-[20px] xl:py-[23px] 2xl:py-[26px] 3xl:py-[31px] py-[35px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[100%]"
                      compId="139:27"
                      comWidth={0}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Bank Transfer`}</Button>
                  </div>
                  <Row
                    className="border border-bluegray_100 border-solid items-center justify-center xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[32.66px] lg:pl-[39px] xl:pl-[45px] 2xl:pl-[51px] 3xl:pl-[61px] pl-[68.21px] lg:pr-[37px] xl:pr-[43px] 2xl:pr-[48px] 3xl:pr-[58px] pr-[65px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] pt-[33.67px] lg:py-[19px] w-[100%]"
                    compId="139:28"
                    comWidth={245}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_60.png"}
                      className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] h-[36.67px] my-[0] object-contain w-[13%]"
                      compId="139:24"
                      comWidth={31.65}
                      comHeight={36.67}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4.34px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20.14px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] mt-[5.33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                      compId="139:4"
                      comWidth={60}
                      comHeight={27}
                      compLeft={20.14}
                      compRight={0}
                      compType="Text"
                    >{`Paypal`}</Text>
                  </Row>
                </Row>
              </Column>
              <Text
                className="font-normal lg:mr-[390px] xl:mr-[446px] 2xl:mr-[502px] 3xl:mr-[602px] mr-[669px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="137:6"
                comWidth={131}
                comHeight={27}
                compLeft={0}
                compRight={669}
                compType="Text"
              >{`Name on Card`}</Text>
              <Column
                className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                compId="358"
                comWidth={800}
                comHeight={330}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Input
                  className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                  compId="137:5"
                  comWidth={800}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="form"
                  placeholder={""}
                ></Input>
                <Row
                  className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="331"
                  comWidth={800}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[65%]"
                    compId="137:31"
                    comWidth={523}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[234px] xl:mr-[268px] 2xl:mr-[301px] 3xl:mr-[362px] mr-[402px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="137:14"
                      comWidth={121}
                      comHeight={27}
                      compLeft={0}
                      compRight={402}
                      compType="Text"
                    >{`Card Number`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="360"
                      comWidth={523}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Input
                        className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                        compId="137:13"
                        comWidth={523}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="form"
                        placeholder={""}
                      ></Input>
                    </Column>
                  </Column>
                  <Column
                    className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[31%]"
                    compId="137:32"
                    comWidth={245}
                    comHeight={103}
                    compLeft={32}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[120px] xl:mr-[138px] 2xl:mr-[155px] 3xl:mr-[186px] mr-[207px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="137:19"
                      comWidth={38}
                      comHeight={27}
                      compLeft={0}
                      compRight={207}
                      compType="Text"
                    >{`CVV`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="361"
                      comWidth={245}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Input
                        className="bg-transparent border border-bluegray_100 border-solid w-[100%]"
                        compId="137:15"
                        comWidth={245}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Rectangle25"
                        placeholder={""}
                      ></Input>
                    </Column>
                  </Column>
                </Row>
                <Row
                  className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="332"
                  comWidth={800}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[100%]"
                    compId="137:34"
                    comWidth={384}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[191px] xl:mr-[218px] 2xl:mr-[246px] 3xl:mr-[295px] mr-[328px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="137:18"
                      comWidth={56}
                      comHeight={27}
                      compLeft={0}
                      compRight={328}
                      compType="Text"
                    >{`Month`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="362"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div className="bg-transparent w-[100%] input-wrap">
                        <Image
                          src={"images/img_vector_61.png"}
                          className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                          compId="137:51"
                          comWidth={9.95}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Vector"
                        />
                        <SelectBox
                          className="bg-transparent border border-bluegray_100 border-solid font-normal xl:pb-[11px] 3xl:pb-[15px] pb-[17px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[34px] xl:pr-[39px] 2xl:pr-[44px] 3xl:pr-[53px] pr-[58.95px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] 2xl:py-[12px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                          compId="40"
                          comWidth={0}
                          comHeight={60}
                          compLeft={0}
                          compRight={0}
                          compType="Dropdown"
                          placeholderClassName="bg-transparent text-gray_500"
                          name="Group40"
                          placeholder={`Select Month`}
                          isSearchable={false}
                          isMulti={false}
                        ></SelectBox>
                      </div>
                    </Column>
                  </Column>
                  <Column
                    className="items-start w-[100%]"
                    compId="137:33"
                    comWidth={384}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[200px] xl:mr-[229px] 2xl:mr-[258px] 3xl:mr-[309px] mr-[344px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="137:20"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={344}
                      compType="Text"
                    >{`Year`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="363"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div className="bg-transparent w-[100%] input-wrap">
                        <Image
                          src={"images/img_vector_62.png"}
                          className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                          compId="137:54"
                          comWidth={9.95}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Vector"
                        />
                        <SelectBox
                          className="bg-transparent border border-bluegray_100 border-solid font-normal xl:pb-[10px] 3xl:pb-[14px] pb-[16px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[34px] xl:pr-[39px] 2xl:pr-[44px] 3xl:pr-[53px] pr-[58.95px] xl:pt-[11px] 3xl:pt-[15px] pt-[17px] 2xl:py-[12px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                          compId="41"
                          comWidth={0}
                          comHeight={60}
                          compLeft={0}
                          compRight={0}
                          compType="Dropdown"
                          placeholderClassName="bg-transparent text-gray_500"
                          name="Group41"
                          placeholder={`Select Year`}
                          isSearchable={false}
                          isMulti={false}
                        ></SelectBox>
                      </div>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column
                className="items-end lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:pl-[323px] xl:pl-[370px] 2xl:pl-[416px] 3xl:pl-[499px] pl-[555px] w-[100%]"
                compId="359"
                comWidth={800}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Button
                  className="common-pointer bg-gray_800 font-medium xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[31%]"
                  compId="136:773"
                  comWidth={245}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                  onClick={handleNavigate5}
                >{`Checkout`}</Button>
              </Column>
            </Column>
          </Row>
          <footer
            className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
            compId="199:556"
            comWidth={1920}
            comHeight={493}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
              compId="71"
              comWidth={1632}
              comHeight={397}
              compLeft={144}
              compRight={144}
              compType="Column"
            >
              <Row
                className="items-start justify-start w-[100%]"
                compId="339"
                comWidth={1632}
                comHeight={280}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] pr-[32px] w-[25%]"
                  compId="199:575"
                  comWidth={416}
                  comHeight={244}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:mr-[159px] xl:mr-[182px] 2xl:mr-[204px] 3xl:mr-[245px] mr-[273px] w-[27%]"
                    compId="199:576"
                    comWidth={111}
                    comHeight={35}
                    compLeft={0}
                    compRight={273}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_group19_13.png"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                      compId="199:578"
                      comWidth={39}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Group19"
                    />
                    <Text
                      className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="199:577"
                      comWidth={64}
                      comHeight={35}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`Elliye`}</Text>
                  </Row>
                  <Text
                    className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                    compId="199:582"
                    comWidth={384}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                  <Row
                    className="items-center justify-start ml-[1px] lg:mr-[135px] xl:mr-[155px] 2xl:mr-[174px] 3xl:mr-[209px] mr-[233px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[36%]"
                    compId="199:584"
                    comWidth={149.02}
                    comHeight={32}
                    compLeft={1.98}
                    compRight={233}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_63.png"}
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                      compId="199:586"
                      comWidth={19.93}
                      comHeight={19.87}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="199:587"
                      comWidth={119}
                      comHeight={32}
                      compLeft={10.09}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start ml-[1px] lg:mr-[102px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[175px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                    compId="199:588"
                    comWidth={207}
                    comHeight={32}
                    compLeft={2}
                    compRight={175}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_64.png"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                      compId="199:590"
                      comWidth={20}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="199:591"
                      comWidth={177}
                      comHeight={32}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >{`elliye@support.com`}</Text>
                  </Row>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] mb-[56px] lg:ml-[162px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[250px] ml-[278px] w-[10%]"
                  compId="199:568"
                  comWidth={165}
                  comHeight={224}
                  compLeft={278}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="364"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="199:569"
                      comWidth={165}
                      comHeight={35}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Product Links`}</Text>
                  </Column>
                  <Text
                    className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:571"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={65}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="font-normal lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:572"
                    comWidth={99}
                    comHeight={27}
                    compLeft={0}
                    compRight={66}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="font-normal lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:573"
                    comWidth={78}
                    comHeight={27}
                    compLeft={0}
                    compRight={87}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:574"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={65}
                    compType="Text"
                  >{`Collections`}</Text>
                </Column>
                <Column
                  className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[9%]"
                  compId="199:559"
                  comWidth={147}
                  comHeight={280}
                  compLeft={112}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:560"
                    comWidth={123}
                    comHeight={35}
                    compLeft={0}
                    compRight={24}
                    compType="Text"
                  >{`Company`}</Text>
                  <Text
                    className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:562"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={93}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:563"
                    comWidth={39}
                    comHeight={27}
                    compLeft={0}
                    compRight={108}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:564"
                    comWidth={72}
                    comHeight={27}
                    compLeft={0}
                    compRight={75}
                    compType="Text"
                  >{`Careers`}</Text>
                  <Text
                    className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:565"
                    comWidth={75}
                    comHeight={27}
                    compLeft={0}
                    compRight={72}
                    compType="Text"
                  >{`Services`}</Text>
                  <Text
                    className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:566"
                    comWidth={120}
                    comHeight={27}
                    compLeft={0}
                    compRight={27}
                    compType="Text"
                  >{`Privacy Policy`}</Text>
                  <Column
                    className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compId="365"
                    comWidth={147}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="199:567"
                      comWidth={147}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] mb-[71px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[24%]"
                  compId="199:592"
                  comWidth={384}
                  comHeight={209}
                  compLeft={130}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:600"
                    comWidth={238}
                    comHeight={36}
                    compLeft={0}
                    compRight={146}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Column
                    className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                    compId="366"
                    comWidth={384}
                    comHeight={149}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                      compId="199:601"
                      comWidth={384}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                    <Row
                      className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                      compId="199:593"
                      comWidth={384}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                        compId="199:595"
                        comWidth={149.77}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Enter your email`}</Text>
                      <Image
                        src={"images/img_submit_6.png"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="199:596"
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
              <Text
                className="font-normal 2xl:ml-[507px] 3xl:ml-[608px] ml-[676px] 2xl:mr-[508px] 3xl:mr-[609px] mr-[677px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] lg:mx-[394px] xl:mx-[451px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 text-left w-[auto]"
                compId="199:558"
                comWidth={279}
                comHeight={21}
                compLeft={676}
                compRight={677}
                compType="Text"
              >{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default CheckoutPage;
