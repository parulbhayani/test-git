import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  PagerIndicator,
  Grid,
  List,
  RatingBar,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepageV1Page = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/categorieswithsidebar");
  }
  function handleNavigate6() {
    navigate("/homepagev2");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="2:3"
        comWidth={1920}
        comHeight={6617}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="7"
          comWidth={1920}
          comHeight={95}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-white_A700 items-center justify-start lg:pb-[10px] xl:pb-[12px] 2xl:pb-[13px] 3xl:pb-[16px] pb-[18px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[15px] pt-[17px] lg:pt-[9px] 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] w-[100%]"
            compId="24:66"
            comWidth={1920}
            comHeight={95}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Row
              className="items-center justify-center 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[6%]"
              compId="23:28"
              comWidth={111}
              comHeight={35}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_group19.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                compId="23:27"
                comWidth={39}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group19"
              />
              <Text
                className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="4:8"
                comWidth={64}
                comHeight={35}
                compLeft={8}
                compRight={0}
                compType="Text"
              >{`Elliye`}</Text>
            </Row>
            <Row
              className="items-center justify-center xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[229px] xl:ml-[262px] 2xl:ml-[294px] 3xl:ml-[353px] ml-[393px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] w-[32%]"
              compId="10:5"
              comWidth={623}
              comHeight={27}
              compLeft={393}
              compRight={0}
              compType="Row"
            >
              <Text
                className="common-pointer cursor-pointer hover:font-medium font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="10:2"
                comWidth={100}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
                onClick={handleNavigate1}
              >{`Categories`}</Text>
              <Text
                className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="10:3"
                comWidth={100}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="cursor-pointer hover:font-medium font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] ml-[83px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="10:4"
                comWidth={79}
                comHeight={27}
                compLeft={83}
                compRight={0}
                compType="Text"
              >{`Features`}</Text>
              <Text
                className="cursor-pointer hover:font-medium font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="23:24"
                comWidth={101}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Collections`}</Text>
            </Row>
            <Row
              className="items-center justify-center lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] ml-[260px] w-[13%]"
              compId="261:3"
              comWidth={245}
              comHeight={60}
              compLeft={260}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_icon.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[33%]"
                compId="24:45"
                comWidth={80}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="icon"
              />
              <Button
                className="common-pointer bg-gray_800 font-bold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[44%]"
                compId="5:5"
                comWidth={107}
                comHeight={60}
                compLeft={58}
                compRight={0}
                compType="Button"
                onClick={handleNavigate6}
              >{`Login`}</Button>
            </Row>
          </Row>
        </header>
        <Stack
          className="bg-gray_50 lg:h-[409px] xl:h-[468px] 2xl:h-[526px] 3xl:h-[631px] h-[700px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] w-[100%]"
          compId="82"
          comWidth={1920}
          comHeight={700}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute right-[0] w-[64%]"
            compId="20:1"
            comWidth={1222}
            comHeight={700}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-evenly pl-[1px] w-[100%]"
              compId="73"
              comWidth={1222}
              comHeight={364}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_placeholder.png"}
                className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain w-[31%]"
                compId="64:13"
                comWidth={384}
                comHeight={364}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Image
                src={"images/img_placeholder_1.png"}
                className="lg:h-[213px] xl:h-[243px] 2xl:h-[274px] 3xl:h-[328px] h-[364px] object-contain w-[68%]"
                compId="64:12"
                comWidth={837}
                comHeight={364}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
            </Row>
            <Row
              className="items-center justify-evenly w-[100%]"
              compId="74"
              comWidth={1222}
              comHeight={336}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[32%]"
                compId="84"
                comWidth={385}
                comHeight={336}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_2.png"}
                  className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover w-[100%]"
                  compId="61:0"
                  comWidth={385}
                  comHeight={336}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <PagerIndicator
                  className="absolute bottom-[11%] h-[12px] right-[17%] w-[auto]"
                  compId="24:14"
                  comWidth={112}
                  comHeight={12}
                  compLeft={0}
                  compRight={67}
                  compType="PagerIndicator"
                  count={6}
                  activeCss="inline-block cursor-pointer w-[12px] h-[12px] bg-gray_800 absolute"
                  activeIndex={undefined}
                  inactiveCss="inline-block cursor-pointer w-[12px] h-[12px] bg-white_A700 absolute"
                  sliderRef={undefined}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </Stack>
              <Image
                src={"images/img_placeholder_3.png"}
                className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] object-contain w-[31%]"
                compId="64:15"
                comWidth={384}
                comHeight={336}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Stack
                className="lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] w-[37%]"
                compId="86"
                comWidth={453}
                comHeight={336}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_4.png"}
                  className="absolute lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] h-[336px] inset-[0] object-cover rotate-[-180deg] w-[100%]"
                  compId="64:16"
                  comWidth={453}
                  comHeight={336}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Image
                  src={"images/img_button.png"}
                  className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-x-[0] mx-[auto] object-contain w-[35%]"
                  compId="81:361"
                  comWidth={160}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="button"
                />
              </Stack>
            </Row>
          </Column>
          <Column
            className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[30%]"
            compId="29:16"
            comWidth={567}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="font-playfairdisplay w-[100%]"
              compId="111"
              comWidth={567}
              comHeight={128}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal mx-[auto] not-italic lg:text-[56px] xl:text-[64px] 2xl:text-[72px] 3xl:text-[86px] text-[96px] text-gray_800 text-left w-[auto]"
                compId="10:6"
                comWidth={567}
                comHeight={128}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Summer Sale`}</Text>
            </Column>
            <Text
              className="font-bold font-poppins lg:mr-[184px] xl:mr-[211px] 2xl:mr-[237px] 3xl:mr-[285px] mr-[317px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_800 text-left w-[auto]"
              compId="20:2"
              comWidth={250}
              comHeight={95}
              compLeft={0}
              compRight={317}
              compType="Text"
            >{`50% Off`}</Text>
            <Text
              className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mr-[25px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] mr-[44px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[92%]"
              compId="154:3"
              comWidth={523}
              comHeight={96}
              compLeft={0}
              compRight={44}
              compType="Text"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <div className="2xl:mr-[241px] 2xl:mt-[42px] 3xl:mr-[289px] 3xl:mt-[50px] lg:mr-[187px] lg:mt-[32px] mr-[322px] mt-[56px] w-[43%] xl:mr-[214px] xl:mt-[37px] input-wrap">
              <Image
                src={"images/img_arrow.png"}
                className="absolute z-[1] h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                compId="154:4"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
              <Button
                className="bg-gray_800 font-medium font-poppins lg:pl-[19px] xl:pl-[22px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[33px] 3xl:pr-[116px] pr-[129px] lg:pr-[75px] xl:pr-[86px] 2xl:pr-[96px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[100%]"
                compId="29:14"
                comWidth={0}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Shop Now`}</Button>
            </div>
          </Column>
        </Stack>
        <Row
          className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="29:4"
          comWidth={1629}
          comHeight={54}
          compLeft={144}
          compRight={147}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="10:1"
            comWidth={205}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Categories`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[1018px] 3xl:ml-[1222px] ml-[1357px] lg:ml-[791px] xl:ml-[905px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="23:29"
            comWidth={67}
            comHeight={27}
            compLeft={1357}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
        </Row>
        <Row
          className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[107px] 3xl:mr-[128px] mr-[143px] lg:mr-[83px] xl:mr-[95px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[85%]"
          compId="29:5"
          comWidth={1633}
          comHeight={213}
          compLeft={144}
          compRight={143}
          compType="Row"
        >
          <Column
            className="bg-gray_50 items-center lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] lg:pl-[52px] xl:pl-[59px] 2xl:pl-[67px] 3xl:pl-[80px] pl-[89.4px] lg:pr-[51px] xl:pr-[58px] 2xl:pr-[65px] 3xl:pr-[78px] pr-[87.6px] lg:pt-[29px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] pt-[50.4px] w-[15%]"
            compId="60:1"
            comWidth={245}
            comHeight={213}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector.png"}
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68px] mx-[auto] object-contain lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px] w-[68px]"
              compId="13:3"
              comWidth={68}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal 2xl:ml-[2px] ml-[3.6px] 2xl:mr-[3px] mr-[4.4px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[21.6px] xl:mx-[2px] lg:mx-[2px] 3xl:mx-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="13:4"
              comWidth={60}
              comHeight={27}
              compLeft={3.6}
              compRight={4.4}
              compType="Text"
            >{`Jacket`}</Text>
          </Column>
          <Column
            className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] xl:pl-[60px] 3xl:pl-[81px] pl-[90px] xl:pr-[59px] 3xl:pr-[80px] pr-[89.66px] lg:pt-[31px] xl:pt-[36px] 2xl:pt-[40px] 3xl:pt-[48px] pt-[54px] lg:px-[52px] 2xl:px-[67px] w-[15%]"
            compId="60:3"
            comWidth={246}
            comHeight={213}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_1.png"}
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[0] object-contain w-[27%]"
              compId="13:8"
              comWidth={66.34}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal 3xl:ml-[11px] ml-[13px] 2xl:ml-[9px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[13.34px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] lg:mx-[7px] xl:mx-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="13:13"
              comWidth={40}
              comHeight={27}
              compLeft={13}
              compRight={13.34}
              compType="Text"
            >{`Shirt`}</Text>
          </Column>
          <Column
            className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] lg:pl-[57px] xl:pl-[65px] 2xl:pl-[73px] 3xl:pl-[88px] pl-[98px] lg:pr-[56px] xl:pr-[64px] 2xl:pr-[72px] 3xl:pr-[87px] pr-[97px] lg:pt-[29px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] pt-[50px] w-[15%]"
            compId="60:5"
            comWidth={245}
            comHeight={213}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_2.png"}
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68px] ml-[3px] mr-[3.24px] lg:mx-[1px] 3xl:mx-[2px] 2xl:mx-[2px] xl:mx-[2px] object-contain w-[18%]"
              compId="13:15"
              comWidth={43.76}
              comHeight={68}
              compLeft={3}
              compRight={3.24}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="13:18"
              comWidth={50}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Pants`}</Text>
          </Column>
          <Column
            className="bg-gray_800 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[45px] 3xl:pt-[54px] pt-[60px] lg:px-[51px] xl:px-[59px] 2xl:px-[66px] 3xl:px-[80px] px-[89px] w-[15%]"
            compId="60:7"
            comWidth={246}
            comHeight={213}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_3.png"}
              className="lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48.12px] mx-[auto] object-contain w-[28%]"
              compId="13:17"
              comWidth={68}
              comHeight={48.12}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] lg:mr-[3px] 2xl:mr-[4px] 3xl:mr-[5px] mr-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.88px] xl:mx-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
              compId="13:19"
              comWidth={55}
              comHeight={27}
              compLeft={7}
              compRight={6}
              compType="Text"
            >{`Shoes`}</Text>
          </Column>
          <Column
            className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] lg:pl-[57px] xl:pl-[65px] 2xl:pl-[73px] 3xl:pl-[88px] pl-[98px] lg:pr-[56px] xl:pr-[64px] 2xl:pr-[72px] 3xl:pr-[87px] pr-[97px] lg:pt-[29px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] pt-[50px] w-[15%]"
            compId="60:9"
            comWidth={245}
            comHeight={213}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_4.png"}
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68px] mx-[auto] object-contain w-[20%]"
              compId="13:26"
              comWidth={48}
              comHeight={68}
              compLeft={1}
              compRight={1}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="13:24"
              comWidth={50}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Dress`}</Text>
          </Column>
          <Column
            className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:pb-[26px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[41px] pb-[46px] lg:pt-[32px] xl:pt-[37px] 2xl:pt-[42px] 3xl:pt-[50px] pt-[56px] lg:px-[43px] xl:px-[49px] 2xl:px-[55px] 3xl:px-[66px] px-[74px] w-[15%]"
            compId="60:11"
            comWidth={246}
            comHeight={213}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_vector_5.png"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain w-[28%]"
              compId="13:21"
              comWidth={68}
              comHeight={56}
              compLeft={15}
              compRight={15}
              compType="Image"
              alt="Vector"
            />
            <Text
              className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="13:27"
              comWidth={98}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Accesories`}</Text>
          </Column>
        </Row>
        <Column
          className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="80"
          comWidth={1920}
          comHeight={774}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] w-[85%]"
            compId="81:368"
            comWidth={1629}
            comHeight={54}
            compLeft={144}
            compRight={147}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
              compId="13:30"
              comWidth={234}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`New Arrivals`}</Text>
            <Text
              className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[1195px] ml-[1328px] lg:ml-[774px] xl:ml-[886px] 2xl:ml-[996px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="81:364"
              comWidth={67}
              comHeight={27}
              compLeft={1328}
              compRight={0}
              compType="Text"
            >{`View all`}</Text>
          </Row>
          <Row
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="79"
            comWidth={1920}
            comHeight={688}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Row
              className="bg-gray_50 items-center justify-center lg:px-[35px] xl:px-[41px] 2xl:px-[46px] 3xl:px-[55px] px-[61.5px] lg:py-[16px] xl:py-[19px] 2xl:py-[21px] 3xl:py-[25px] py-[28.5px] w-[100%]"
              compId="83:371"
              comWidth={800}
              comHeight={688}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_placeholder_5.png"}
                className="lg:h-[369px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[569px] h-[631px] object-contain w-[48%]"
                compId="71:3"
                comWidth={384}
                comHeight={631}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:my-[138px] xl:my-[158px] 2xl:my-[178px] 3xl:my-[214px] my-[238px] w-[31%]"
                compId="83:370"
                comWidth={245}
                comHeight={155}
                compLeft={48}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-center justify-start w-[100%]"
                  compId="71:7"
                  comWidth={245}
                  comHeight={71}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="71:8"
                    comWidth={245}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Purple Warm Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="71:9"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100}
                    compRight={100}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Button
                  className="bg-gray_800 font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[82%]"
                  compId="71:10"
                  comWidth={200}
                  comHeight={60}
                  compLeft={22.5}
                  compRight={22.5}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </Row>
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[100%]"
              compId="98"
              comWidth={800}
              comHeight={688}
              compLeft={0}
              compRight={0}
              compType="Grid"
            >
              <Column
                className="bg-gray_50 items-center justify-center lg:px-[29px] xl:px-[33px] 2xl:px-[37px] 3xl:px-[45px] px-[50.5px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="73:16"
                comWidth={384}
                comHeight={328}
                compLeft={0}
                compRight={416}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_6.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="74:33"
                  comWidth={177}
                  comHeight={177}
                  compLeft={53}
                  compRight={53}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[74%]"
                  compId="71:13"
                  comWidth={283}
                  comHeight={71}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="71:14"
                    comWidth={283}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Blue Grey Warm Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="71:15"
                    comWidth={45}
                    comHeight={27}
                    compLeft={119}
                    compRight={119}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center px-[103.5px] lg:px-[60px] xl:px-[69px] 2xl:px-[77px] 3xl:px-[93px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="73:22"
                comWidth={384}
                comHeight={328}
                compLeft={416}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_7.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="75:35"
                  comWidth={177}
                  comHeight={177}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[43%]"
                  compId="73:24"
                  comWidth={167}
                  comHeight={71}
                  compLeft={5}
                  compRight={5}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="73:25"
                    comWidth={167}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Denim Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="73:26"
                    comWidth={45}
                    comHeight={27}
                    compLeft={61}
                    compRight={61}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center px-[103.5px] lg:px-[60px] xl:px-[69px] 2xl:px-[77px] 3xl:px-[93px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="73:17"
                comWidth={384}
                comHeight={328}
                compLeft={0}
                compRight={416}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_8.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="77:38"
                  comWidth={177}
                  comHeight={177}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[40%]"
                  compId="73:19"
                  comWidth={153}
                  comHeight={71}
                  compLeft={12}
                  compRight={12}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="73:20"
                    comWidth={153}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Black Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="73:21"
                    comWidth={45}
                    comHeight={27}
                    compLeft={54}
                    compRight={54}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Column>
              <Column
                className="bg-gray_50 items-center justify-center lg:px-[45px] xl:px-[51px] 2xl:px-[58px] 3xl:px-[69px] px-[77.5px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] w-[100%]"
                compId="73:27"
                comWidth={384}
                comHeight={328}
                compLeft={416}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_9.png"}
                  className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] h-[177px] mx-[auto] object-contain lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px] w-[177px]"
                  compId="77:39"
                  comWidth={177}
                  comHeight={177}
                  compLeft={26}
                  compRight={26}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[60%]"
                  compId="73:29"
                  comWidth={229}
                  comHeight={71}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="73:30"
                    comWidth={229}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Green Polar Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="73:31"
                    comWidth={45}
                    comHeight={27}
                    compLeft={92}
                    compRight={92}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Row
          className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="84:372"
          comWidth={1629}
          comHeight={54}
          compLeft={144}
          compRight={147}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="13:29"
            comWidth={168}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Featured`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[1046px] 3xl:ml-[1255px] ml-[1394px] lg:ml-[813px] xl:ml-[930px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="36:48"
            comWidth={67}
            comHeight={27}
            compLeft={1394}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
        </Row>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:pr-[39px] xl:pr-[44px] 2xl:pr-[50px] 3xl:pr-[60px] pr-[67px] w-[85%]"
          compId="42:5"
          comWidth={1632}
          comHeight={500}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Column
            className="border-2 border-gray_800 border-solid items-center lg:px-[39px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] px-[67px] lg:py-[25px] xl:py-[29px] 2xl:py-[32px] 3xl:py-[39px] py-[43.5px] w-[24%]"
            compId="36:20"
            comWidth={384}
            comHeight={500}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_10.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-contain lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="35:3"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="35:7"
              comWidth={184}
              comHeight={36}
              compLeft={33}
              compRight={33}
              compType="Text"
            >{`Black Briefcase`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="35:8"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
            <Button
              className="bg-gray_800 font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[52%]"
              compId="36:45"
              comWidth={200}
              comHeight={60}
              compLeft={25}
              compRight={25}
              compType="Button"
            >{`Add to Cart`}</Button>
          </Column>
          <List
            className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] gap-[166px] lg:gap-[96px] grid grid-cols-3 min-h-[auto] lg:ml-[57px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] ml-[99px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[81px] w-[66%]"
            compId="99"
            comWidth={1082}
            comHeight={338}
            compLeft={99}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-center justify-start my-[1px] w-[100%]"
              compId="36:21"
              comWidth={250}
              comHeight={337}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_11.png"}
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                compId="35:5"
                comWidth={250}
                comHeight={250}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="font-medium lg:ml-[40px] xl:ml-[46px] 3xl:ml-[62px] ml-[69.5px] lg:mr-[41px] xl:mr-[47px] 3xl:mr-[63px] mr-[70.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 2xl:mx-[52px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="35:11"
                comWidth={110}
                comHeight={35}
                compLeft={69.5}
                compRight={70.5}
                compType="Text"
              >{`Pink Shirt`}</Text>
              <Text
                className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="35:12"
                comWidth={45}
                comHeight={27}
                compLeft={102.5}
                compRight={102.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start mb-[1px] w-[100%]"
              compId="36:22"
              comWidth={250}
              comHeight={337}
              compLeft={166}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_12.png"}
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                compId="35:13"
                comWidth={250}
                comHeight={250}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="36:14"
                comWidth={145}
                comHeight={36}
                compLeft={52.5}
                compRight={52.5}
                compType="Text"
              >{`Gray T-shirt`}</Text>
              <Text
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="36:15"
                comWidth={45}
                comHeight={27}
                compLeft={102.5}
                compRight={102.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start mt-[1px] w-[100%]"
              compId="36:23"
              comWidth={250}
              comHeight={337}
              compLeft={166}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_13.png"}
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
                compId="36:12"
                comWidth={250}
                comHeight={250}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="36:17"
                comWidth={140}
                comHeight={36}
                compLeft={55}
                compRight={55}
                compType="Text"
              >{`Red Flannel`}</Text>
              <Text
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="36:18"
                comWidth={45}
                comHeight={27}
                compLeft={102.5}
                compRight={102.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
          </List>
        </Row>
        <Grid
          className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] gap-[166px] lg:gap-[96px] grid grid-cols-4 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="97"
          comWidth={1632}
          comHeight={1032}
          compLeft={144}
          compRight={144}
          compType="Grid"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:52"
            comWidth={250}
            comHeight={337}
            compLeft={67}
            compRight={1315}
            compType="Column"
          >
            <Image
              src={"images/img_stylishblacks.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="39:17"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="stylishblacks"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:55"
              comWidth={192}
              comHeight={36}
              compLeft={29}
              compRight={29}
              compType="Text"
            >{`Black Highheels`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:56"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:59"
            comWidth={250}
            comHeight={337}
            compLeft={483}
            compRight={899}
            compType="Column"
          >
            <Image
              src={"images/img_casualfabrics.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="39:18"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="casualfabrics"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:62"
              comWidth={228}
              comHeight={36}
              compLeft={11}
              compRight={11}
              compType="Text"
            >{`Casual Grey Shoes`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:63"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:64"
            comWidth={250}
            comHeight={337}
            compLeft={899}
            compRight={483}
            compType="Column"
          >
            <Image
              src={"images/img_shoesisolated.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="42:0"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="shoesisolated"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:67"
              comWidth={155}
              comHeight={36}
              compLeft={47.5}
              compRight={47.5}
              compType="Text"
            >{`Brown Shoes`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:68"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:69"
            comWidth={250}
            comHeight={337}
            compLeft={1315}
            compRight={67}
            compType="Column"
          >
            <Image
              src={"images/img_businessshirt.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="42:1"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="businessshirt"
            />
            <Text
              className="font-medium xl:ml-[27px] 3xl:ml-[37px] ml-[41.5px] xl:mr-[28px] 3xl:mr-[38px] mr-[42.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[24px] 2xl:mx-[31px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:72"
              comWidth={166}
              comHeight={35}
              compLeft={41.5}
              compRight={42.5}
              compType="Text"
            >{`Business Shirt`}</Text>
            <Text
              className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:73"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:75"
            comWidth={250}
            comHeight={337}
            compLeft={67}
            compRight={1315}
            compType="Column"
          >
            <Image
              src={"images/img_warmpantspxl7.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="42:2"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="warmpantsPXL7"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:78"
              comWidth={212}
              comHeight={36}
              compLeft={19}
              compRight={19}
              compType="Text"
            >{`Grey Warm Pants`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:79"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:82"
            comWidth={250}
            comHeight={337}
            compLeft={483}
            compRight={899}
            compType="Column"
          >
            <Image
              src={"images/img_sportj9bzxuy.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="60:15"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="sportJ9BZXUY"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:85"
              comWidth={231}
              comHeight={36}
              compLeft={9.5}
              compRight={9.5}
              compType="Text"
            >{`Green Sport Jacket`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:86"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:87"
            comWidth={250}
            comHeight={337}
            compLeft={899}
            compRight={483}
            compType="Column"
          >
            <Image
              src={"images/img_travel8v7cnke.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="93:118"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="travel8V7CNKE"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:90"
              comWidth={245}
              comHeight={36}
              compLeft={2.5}
              compRight={2.5}
              compType="Text"
            >{`Purple Warm Jacket`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:91"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="36:92"
            comWidth={250}
            comHeight={337}
            compLeft={1315}
            compRight={67}
            compType="Column"
          >
            <Image
              src={"images/img_womensdenimsk.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="60:17"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="womensdenimsk"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="36:95"
              comWidth={240}
              comHeight={35}
              compLeft={5}
              compRight={5}
              compType="Text"
            >{`Woman Denim Skirt`}</Text>
            <Text
              className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="36:96"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
        </Grid>
        <Stack
          className="lg:h-[318px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] h-[544px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] w-[100%]"
          compId="88"
          comWidth={1920}
          comHeight={544}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bg-gray_800 items-center justify-start lg:pb-[190px] xl:pb-[218px] 2xl:pb-[245px] 3xl:pb-[294px] pb-[327px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] 2xl:pr-[1050px] 3xl:pr-[1260px] pr-[1400px] lg:pr-[816px] xl:pr-[934px] lg:pt-[26px] xl:pt-[30px] 2xl:pt-[33px] 3xl:pt-[40px] pt-[45px] top-[0] w-[100%]"
            compId="1"
            comWidth={1920}
            comHeight={426}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[auto]"
              compId="42:16"
              comWidth={376}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Summer Collections`}</Text>
          </Column>
          <Stack
            className="absolute bottom-[0] lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-x-[0] mx-[auto] w-[87%]"
            compId="90"
            comWidth={1663}
            comHeight={400}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Row
              className="absolute lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 inset-y-[0] items-center justify-between left-[0] right-[2%] w-[98%]"
              compId="261:4"
              comWidth={1633}
              comHeight={400}
              compLeft={0}
              compRight={30}
              compType="Row"
            >
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="92"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_image2.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="711:9"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image2"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[36%]"
                  compId="60:20"
                  comWidth={188}
                  comHeight={108}
                  compLeft={59}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-gray_800 font-poppins">
                    <>
                      {`Summer `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="94"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_image3.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="711:11"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image3"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[36%]"
                  compId="64:2"
                  comWidth={188}
                  comHeight={108}
                  compLeft={53}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-white_A700 font-poppins">
                    <>
                      {`Casual `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
              <Stack
                className="bg-bluegray_100 lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                compId="96"
                comWidth={523}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_image4.png"}
                  className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                  compId="711:13"
                  comWidth={523}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image4"
                />
                <Text
                  className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[36%]"
                  compId="64:5"
                  comWidth={188}
                  comHeight={108}
                  compLeft={52}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-white_A700 font-poppins">
                    <>
                      {`Big Vibe `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 font-poppins font-bold">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Stack>
            </Row>
            <div
              className="absolute bg-white_A700 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] inset-y-[0] my-[auto] p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] right-[0] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
              compId="93:121"
              comWidth={60}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            ></div>
          </Stack>
        </Stack>
        <Column
          className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]"
          compId="93:120"
          comWidth={1632}
          comHeight={810}
          compLeft={144}
          compRight={144}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="87:118"
            comWidth={1629}
            comHeight={54}
            compLeft={0}
            compRight={3}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
              compId="13:33"
              comWidth={341}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Popular This Week`}</Text>
            <Text
              className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[1099px] ml-[1221px] lg:ml-[712px] xl:ml-[814px] 2xl:ml-[916px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="87:114"
              comWidth={67}
              comHeight={27}
              compLeft={1221}
              compRight={0}
              compType="Text"
            >{`View all`}</Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="100"
            comWidth={1632}
            comHeight={724}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] lg:pr-[10px] xl:pr-[12px] 2xl:pr-[13px] 3xl:pr-[16px] pr-[18px] lg:py-[13px] xl:py-[15px] 2xl:py-[16px] 3xl:py-[20px] py-[22.5px] w-[100%]"
              compId="87:111"
              comWidth={1632}
              comHeight={220}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-start w-[28%]"
                compId="87:2"
                comWidth={461}
                comHeight={175}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_14.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[49%]"
                  compId="171:102"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[48%]"
                  compId="87:14"
                  comWidth={220}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="112"
                    comWidth={220}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="87:4"
                      comWidth={220}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="113"
                        comWidth={220}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="87:5"
                          comWidth={220}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Checkered Jacket`}</Text>
                      </Column>
                      <Text
                        className="font-medium xl:mr-[107px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[161px] lg:mr-[93px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="87:6"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={161}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[39px] xl:mr-[45px] 2xl:mr-[51px] 3xl:mr-[61px] mr-[68px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="101"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={68}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center justify-center lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] ml-[94px] w-[26%]"
                compId="87:15"
                comWidth={420}
                comHeight={175}
                compLeft={94}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_15.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[54%]"
                  compId="171:101"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[43%]"
                  compId="87:17"
                  comWidth={179}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="114"
                    comWidth={179}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="87:18"
                      comWidth={179}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="115"
                        comWidth={179}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="87:19"
                          comWidth={179}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Elegant Jacket`}</Text>
                      </Column>
                      <Text
                        className="font-medium 3xl:mr-[108px] mr-[120px] lg:mr-[70px] xl:mr-[80px] 2xl:mr-[90px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="87:20"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={120}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="102"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={27}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center justify-center 2xl:ml-[100px] 3xl:ml-[120px] ml-[134px] lg:ml-[78px] xl:ml-[89px] w-[29%]"
                compId="87:27"
                comWidth={481}
                comHeight={175}
                compLeft={134}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_16.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[47%]"
                  compId="171:100"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[50%]"
                  compId="87:29"
                  comWidth={240}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="116"
                    comWidth={240}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="87:30"
                      comWidth={240}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="117"
                        comWidth={240}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="87:31"
                          comWidth={240}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Blue Woman Denim`}</Text>
                      </Column>
                      <Text
                        className="font-medium lg:mr-[105px] xl:mr-[120px] 2xl:mr-[135px] 3xl:mr-[162px] mr-[181px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="87:32"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={181}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[51px] xl:mr-[58px] 2xl:mr-[66px] 3xl:mr-[79px] mr-[88px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="103"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={88}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
            </Row>
            <Row
              className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] pr-[106px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[79px] 3xl:pr-[95px] lg:py-[13px] xl:py-[15px] 2xl:py-[16px] 3xl:py-[20px] py-[22.5px] w-[100%]"
              compId="93:26"
              comWidth={1632}
              comHeight={220}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-start w-[25%]"
                compId="93:27"
                comWidth={412}
                comHeight={175}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_17.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[55%]"
                  compId="171:99"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[42%]"
                  compId="93:31"
                  comWidth={171}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="118"
                    comWidth={171}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="93:32"
                      comWidth={171}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="119"
                        comWidth={171}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="93:33"
                          comWidth={171}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Orange Jeans`}</Text>
                      </Column>
                      <Text
                        className="font-medium 3xl:mr-[100px] mr-[112px] lg:mr-[65px] xl:mr-[74px] 2xl:mr-[84px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="93:34"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={112}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[11px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] mr-[19px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="104"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={19}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center justify-center 2xl:ml-[107px] 3xl:ml-[128px] ml-[143px] lg:ml-[83px] xl:ml-[95px] w-[24%]"
                compId="93:41"
                comWidth={393}
                comHeight={175}
                compLeft={143}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_18.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[57%]"
                  compId="171:98"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[39%]"
                  compId="93:45"
                  comWidth={152}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[87%]"
                    compId="93:46"
                    comWidth={132}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="121"
                      comWidth={132}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="93:47"
                        comWidth={132}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Blue Jeans`}</Text>
                    </Column>
                    <Text
                      className="font-medium lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[65px] mr-[73px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="93:48"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={73}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="120"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <RatingBar
                      className="mx-[auto]"
                      compId="105"
                      comWidth={152}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="RatingBar"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 24) / 1920}
                    ></RatingBar>
                  </Column>
                </Column>
              </Row>
              <Row
                className="items-center justify-center xl:ml-[107px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[161px] lg:ml-[93px] w-[24%]"
                compId="93:55"
                comWidth={393}
                comHeight={175}
                compLeft={161}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_19.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[57%]"
                  compId="171:97"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[39%]"
                  compId="93:59"
                  comWidth={152}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[95%]"
                    compId="93:60"
                    comWidth={144}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="123"
                      comWidth={144}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="93:61"
                        comWidth={144}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Gray Watch`}</Text>
                    </Column>
                    <Text
                      className="font-medium lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="93:62"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={85}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="122"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <RatingBar
                      className="mx-[auto]"
                      compId="106"
                      comWidth={152}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="RatingBar"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 24) / 1920}
                    ></RatingBar>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Row
              className="items-center justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] lg:pr-[49px] xl:pr-[56px] 2xl:pr-[63px] 3xl:pr-[76px] pr-[85px] lg:py-[13px] xl:py-[15px] 2xl:py-[16px] 3xl:py-[20px] py-[22.5px] w-[100%]"
              compId="93:72"
              comWidth={1632}
              comHeight={220}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-start w-[28%]"
                compId="93:73"
                comWidth={465}
                comHeight={175}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_20.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[48%]"
                  compId="171:96"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[48%]"
                  compId="93:77"
                  comWidth={224}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="124"
                    comWidth={224}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="93:78"
                      comWidth={224}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="125"
                        comWidth={224}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="93:79"
                          comWidth={224}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Black Sport Jacket`}</Text>
                      </Column>
                      <Text
                        className="font-medium xl:mr-[110px] 2xl:mr-[123px] 3xl:mr-[148px] mr-[165px] lg:mr-[96px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="93:80"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={165}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="107"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={72}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center justify-center lg:ml-[52px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] ml-[90px] w-[24%]"
                compId="93:87"
                comWidth={393}
                comHeight={175}
                compLeft={90}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_21.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[57%]"
                  compId="171:95"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[39%]"
                  compId="93:91"
                  comWidth={152}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[90%]"
                    compId="93:92"
                    comWidth={137}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="127"
                      comWidth={137}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="93:93"
                        comWidth={137}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Wristwatch`}</Text>
                    </Column>
                    <Text
                      className="font-medium lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="93:94"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={78}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="126"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <RatingBar
                      className="mx-[auto]"
                      compId="108"
                      comWidth={152}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="RatingBar"
                      value={4}
                      starCount={5}
                      color="var(--gray_50)"
                      activeColor="var(--yellow_400)"
                      size={((window.innerWidth - 15) * 24) / 1920}
                    ></RatingBar>
                  </Column>
                </Column>
              </Row>
              <Row
                className="items-center justify-center xl:ml-[107px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[161px] lg:ml-[93px] w-[25%]"
                compId="93:101"
                comWidth={414}
                comHeight={175}
                compLeft={161}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_22.png"}
                  className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175px] object-contain w-[54%]"
                  compId="171:94"
                  comWidth={225}
                  comHeight={175}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27.5px] w-[42%]"
                  compId="93:105"
                  comWidth={173}
                  comHeight={120}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="128"
                    comWidth={173}
                    comHeight={79}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="93:106"
                      comWidth={173}
                      comHeight={79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="129"
                        comWidth={173}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                          compId="93:107"
                          comWidth={173}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Classic Watch`}</Text>
                      </Column>
                      <Text
                        className="font-medium 3xl:mr-[102px] mr-[114px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                        compId="93:108"
                        comWidth={59}
                        comHeight={35}
                        compLeft={0}
                        compRight={114}
                        compType="Text"
                      >{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="lg:mr-[12px] xl:mr-[14px] 2xl:mr-[15px] 3xl:mr-[18px] mr-[21px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="109"
                    comWidth={152}
                    comHeight={24}
                    compLeft={0}
                    compRight={21}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
            </Row>
          </List>
        </Column>
        <Column
          className="items-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] 2xl:pr-[1118px] 3xl:pr-[1341px] pr-[1490px] lg:pr-[869px] xl:pr-[994px] w-[100%]"
          compId="110"
          comWidth={1920}
          comHeight={54}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="13:28"
            comWidth={286}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Why Choose Us`}</Text>
        </Column>
        <List
          className="bg-gray_50 lg:gap-[119px] xl:gap-[136px] 2xl:gap-[153px] 3xl:gap-[184px] gap-[204.5px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
          compId="56:15"
          comWidth={1920}
          comHeight={384}
          compLeft={0}
          compRight={0}
          compType="List"
          orientation="horizontal"
        >
          <Column
            className="items-center justify-start lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] my-[63px] w-[100%]"
            compId="50:2"
            comWidth={211}
            comHeight={258}
            compLeft={230.5}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="border-2 border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] xl:p-[18px] lg:pb-[15px] 2xl:pb-[20px] 3xl:pb-[24px] pb-[27px] lg:pl-[16px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] lg:pr-[15px] 2xl:pr-[20px] 3xl:pr-[24px] pr-[27px] lg:pt-[16px] 2xl:pt-[21px] 3xl:pt-[25px] pt-[28px] rounded-radius50 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
              compId="56:8"
              comWidth={120}
              comHeight={120}
              compLeft={45.5}
              compRight={45.5}
              compType="Stack"
            >
              <Image
                src={"images/img_truck.png"}
                className="absolute lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] inset-[0] justify-center m-[auto] object-contain lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px] w-[65px]"
                compId="54:12"
                comWidth={65}
                comHeight={65}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Truck"
              />
            </Stack>
            <Text
              className="font-bold lg:ml-[14px] 3xl:ml-[22px] ml-[25.5px] lg:mr-[15px] 3xl:mr-[23px] mr-[26.5px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[17px] 2xl:mx-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="15:18"
              comWidth={159}
              comHeight={35}
              compLeft={25.5}
              compRight={26.5}
              compType="Text"
            >{`Free Delivery`}</Text>
            <Text
              className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
              compId="15:20"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Column
            className="items-center justify-start lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] my-[63px] w-[100%]"
            compId="56:10"
            comWidth={212}
            comHeight={258}
            compLeft={204.5}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="border-2 border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius50 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
              compId="56:9"
              comWidth={120}
              comHeight={120}
              compLeft={46}
              compRight={46}
              compType="Stack"
            >
              <Image
                src={"images/img_card.png"}
                className="absolute lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] inset-[0] justify-center m-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="56:5"
                comWidth={64}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Card"
              />
            </Stack>
            <Text
              className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="50:8"
              comWidth={212}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Payment Method`}</Text>
            <Text
              className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
              compId="50:9"
              comWidth={211}
              comHeight={54}
              compLeft={0.5}
              compRight={0.5}
              compType="Text"
            >
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Column
            className="items-center justify-start lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] my-[63px] w-[100%]"
            compId="56:12"
            comWidth={211}
            comHeight={258}
            compLeft={204.5}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="border-2 border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mx-[auto] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius50 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
              compId="56:11"
              comWidth={120}
              comHeight={120}
              compLeft={45.5}
              compRight={45.5}
              compType="Stack"
            >
              <Image
                src={"images/img_broken.png"}
                className="absolute lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] inset-[0] justify-center m-[auto] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                compId="54:20"
                comWidth={64}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Broken"
              />
            </Stack>
            <Text
              className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="50:15"
              comWidth={120}
              comHeight={35}
              compLeft={45.5}
              compRight={45.5}
              compType="Text"
            >{`Warranty`}</Text>
            <Text
              className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[100%]"
              compId="50:16"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Column
            className="items-center justify-start lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] my-[63px] pr-[1px] w-[100%]"
            compId="56:14"
            comWidth={228}
            comHeight={258}
            compLeft={196.5}
            compRight={222}
            compType="Column"
          >
            <Stack
              className="border-2 border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[48px] ml-[54px] lg:mr-[30px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] mr-[53px] xl:p-[18px] lg:pb-[15px] 2xl:pb-[20px] 3xl:pb-[24px] pb-[27px] lg:pl-[16px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] lg:pr-[15px] 2xl:pr-[20px] 3xl:pr-[24px] pr-[27px] lg:pt-[16px] 2xl:pt-[21px] 3xl:pt-[25px] pt-[28px] rounded-radius50 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
              compId="56:13"
              comWidth={120}
              comHeight={120}
              compLeft={54}
              compRight={53}
              compType="Stack"
            >
              <Image
                src={"images/img_support.png"}
                className="absolute lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] inset-[0] justify-center m-[auto] object-contain lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px] w-[65px]"
                compId="54:16"
                comWidth={65}
                comHeight={65}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Support"
              />
            </Stack>
            <Text
              className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="50:27"
              comWidth={227}
              comHeight={35}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Customer Support`}</Text>
            <Text
              className="font-normal leading-[normal] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8.5px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7.5px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:mx-[4px] xl:mx-[5px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 w-[93%]"
              compId="50:28"
              comWidth={211}
              comHeight={54}
              compLeft={8.5}
              compRight={7.5}
              compType="Text"
            >
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
        </List>
        <Image
          src={"images/img_brand.png"}
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] ml-[475px] xl:mr-[317px] 2xl:mr-[357px] 3xl:mr-[428px] mr-[475.75px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:mx-[277px] object-contain w-[50%]"
          compId="156:4"
          comWidth={969.25}
          comHeight={68.29}
          compLeft={475}
          compRight={475.75}
          compType="Image"
          alt="brand"
        />
        <footer
          className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="45:20"
          comWidth={1920}
          comHeight={433}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mr-[137px] xl:mr-[157px] 2xl:mr-[177px] 3xl:mr-[212px] mr-[236px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[80%]"
            compId="64"
            comWidth={1540}
            comHeight={337}
            compLeft={144}
            compRight={236}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="130"
              comWidth={1540}
              comHeight={235}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start w-[100%]"
                compId="261:2"
                comWidth={1540}
                comHeight={235}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] w-[28%]"
                  compId="45:16"
                  comWidth={424}
                  comHeight={209}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[108px] xl:mr-[124px] 2xl:mr-[139px] 3xl:mr-[167px] mr-[186px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="45:10"
                    comWidth={238}
                    comHeight={36}
                    compLeft={0}
                    compRight={186}
                    compType="Text"
                  >{`Join our Newsletter`}</Text>
                  <Column
                    className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                    compId="132"
                    comWidth={424}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[100%]"
                      compId="45:11"
                      comWidth={424}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {
                        <>
                          {`Drop your email below to get update about us, `}
                          <br />
                          {`lastest news, tips, and more!`}
                        </>
                      }
                    </Text>
                  </Column>
                  <div className="2xl:mr-[30px] 2xl:mt-[26px] 3xl:mr-[36px] 3xl:mt-[31px] bg-transparent border-0 lg:mr-[23px] lg:mt-[20px] mr-[40px] mt-[35px] w-[91%] xl:mr-[26px] xl:mt-[23px] input-wrap">
                    <Image
                      src={"images/img_arrow_1.png"}
                      className="absolute z-[1] right-[0] bg-transparent border-0 my-[auto] inset-y-[0]"
                      compId="45:12"
                      comWidth={32}
                      comHeight={31}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Arrow"
                    />
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.61px] lg:pr-[46px] xl:pr-[53px] 2xl:pr-[60px] 3xl:pr-[72px] pr-[80px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] 2xl:py-[12px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500_87 text-gray_500_87 text-left tracking-ls1 w-[100%]"
                      compId="45:5"
                      comWidth={0}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="input"
                      placeholder={`Enter your email`}
                    ></Input>
                  </div>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] 3xl:ml-[117px] ml-[131px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] w-[11%]"
                  compId="42:21"
                  comWidth={165}
                  comHeight={216}
                  compLeft={131}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="133"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="42:26"
                      comWidth={165}
                      comHeight={35}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Product Links`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[61%]"
                    compId="45:2"
                    comWidth={100}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center w-[100%]"
                      compId="134"
                      comWidth={100}
                      comHeight={70}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="42:24"
                        comWidth={100}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Categories`}</Text>
                      <Text
                        className="font-normal mr-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="42:23"
                        comWidth={99}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`New Arrival`}</Text>
                    </Column>
                    <Text
                      className="font-normal lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="42:22"
                      comWidth={78}
                      comHeight={27}
                      compLeft={0}
                      compRight={22}
                      compType="Text"
                    >{`Features`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="135"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="42:25"
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
                  className="items-start justify-start 3xl:ml-[101px] ml-[113px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] w-[8%]"
                  compId="13:59"
                  comWidth={123}
                  comHeight={235}
                  compLeft={113}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="136"
                    comWidth={123}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="13:65"
                      comWidth={123}
                      comHeight={35}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[61%]"
                    compId="45:3"
                    comWidth={75}
                    comHeight={175}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[12px] xl:mr-[14px] 2xl:mr-[15px] 3xl:mr-[18px] mr-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="13:64"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={21}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] mr-[36px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="13:60"
                      comWidth={39}
                      comHeight={27}
                      compLeft={0}
                      compRight={36}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="font-normal lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                      compId="13:61"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={3}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Column
                      className="items-center mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                      compId="137"
                      comWidth={75}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="13:62"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={1}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Text
                        className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="13:63"
                        comWidth={75}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Services`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] ml-[154px] lg:ml-[89px] w-[10%]"
                  compId="13:70"
                  comWidth={147}
                  comHeight={198}
                  compLeft={154}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="13:75"
                    comWidth={99}
                    comHeight={35}
                    compLeft={0}
                    compRight={48}
                    compType="Text"
                  >{`Support`}</Text>
                  <Column
                    className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                    compId="138"
                    comWidth={147}
                    comHeight={138}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="45:4"
                      comWidth={147}
                      comHeight={138}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="13:73"
                        comWidth={138}
                        comHeight={27}
                        compLeft={0}
                        compRight={9}
                        compType="Text"
                      >{`Support Center`}</Text>
                      <Text
                        className="font-normal 3xl:mr-[100px] mr-[112px] lg:mr-[65px] xl:mr-[74px] 2xl:mr-[84px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="13:72"
                        comWidth={35}
                        comHeight={27}
                        compLeft={0}
                        compRight={112}
                        compType="Text"
                      >{`FAQ`}</Text>
                      <Text
                        className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="13:71"
                        comWidth={120}
                        comHeight={27}
                        compLeft={0}
                        compRight={27}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                      <Column
                        className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                        compId="139"
                        comWidth={147}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                          compId="13:74"
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
                  className="items-start justify-start xl:mb-[100px] 2xl:mb-[113px] 3xl:mb-[135px] mb-[151px] lg:mb-[88px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[10%]"
                  compId="13:76"
                  comWidth={153}
                  comHeight={84}
                  compLeft={130}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="140"
                    comWidth={153}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                      compId="13:85"
                      comWidth={153}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Get In Touch`}</Text>
                  </Column>
                  <Image
                    src={"images/img_sosmedia.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[78%]"
                    compId="199:611"
                    comWidth={120}
                    comHeight={24}
                    compLeft={0}
                    compRight={33}
                    compType="Image"
                    alt="sosmedia"
                  />
                </Column>
              </Row>
            </Column>
            <Column
              className="items-end lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] lg:pl-[394px] xl:pl-[451px] 2xl:pl-[507px] 3xl:pl-[608px] pl-[676px] lg:pr-[341px] xl:pr-[390px] 2xl:pr-[439px] 3xl:pr-[526px] pr-[585px] w-[100%]"
              compId="131"
              comWidth={1540}
              comHeight={21}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-left text-white_A700 w-[auto]"
                compId="13:58"
                comWidth={279}
                comHeight={21}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
            </Column>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV1Page;
