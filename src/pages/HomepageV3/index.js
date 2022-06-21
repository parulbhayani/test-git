import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Image,
  Line,
  Stack,
  Button,
  Grid,
  List,
  RatingBar,
} from "components";

const HomepageV3Page = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/categorieswithsidebar");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="649:2"
        comWidth={1920}
        comHeight={4661}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="15"
          comWidth={1920}
          comHeight={216}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="w-[100%]"
            compId="215"
            comWidth={1920}
            comHeight={216}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:395"
              comWidth={1920}
              comHeight={97}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-start lg:pb-[18px] 2xl:pb-[23px] pb-[31px] lg:pt-[17px] 2xl:pt-[22px] pt-[30px] 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] xl:py-[20px] 3xl:py-[27px] w-[100%]"
                compId="13"
                comWidth={1920}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[28%]"
                  compId="649:397"
                  comWidth={547}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="common-pointer cursor-pointer hover:font-normal font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                    compId="649:398"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                    onClick={handleNavigate2}
                  >{`Categories`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                    compId="649:399"
                    comWidth={99}
                    comHeight={27}
                    compLeft={56}
                    compRight={0}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                    compId="649:400"
                    comWidth={78}
                    comHeight={27}
                    compLeft={58}
                    compRight={0}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                    compId="649:401"
                    comWidth={100}
                    comHeight={27}
                    compLeft={56}
                    compRight={0}
                    compType="Text"
                  >{`Collections`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:ml-[124px] xl:ml-[142px] 2xl:ml-[159px] 3xl:ml-[191px] ml-[213px] w-[6%]"
                  compId="649:402"
                  comWidth={111}
                  comHeight={35}
                  compLeft={213}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_3.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="649:404"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="649:403"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Image
                  src={"images/img_icon_2.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[345px] xl:ml-[395px] 2xl:ml-[445px] 3xl:ml-[534px] ml-[593px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[9%]"
                  compId="649:407"
                  comWidth={168}
                  comHeight={24}
                  compLeft={593}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
              </Row>
              <Line
                className="bg-gray_50 h-[1px] mx-[auto] w-[85%]"
                compId="649:422"
                comWidth={1632}
                comHeight={1}
                compLeft={144}
                compRight={144}
                compType="Line"
              />
            </Column>
            <Row
              className="bg-white_A700 lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-9 items-center justify-center w-[100%]"
              compId="649:340"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[22px] pt-[25.2px] lg:px-[17px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] px-[30px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:343"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_16.png"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] ml-[13.2px] mr-[12.8px] 3xl:mx-[11px] lg:mx-[7px] xl:mx-[8px] 2xl:mx-[9px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[34px]"
                  compId="649:345"
                  comWidth={34}
                  comHeight={34}
                  compLeft={13.2}
                  compRight={12.8}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] mt-[14.8px] lg:mt-[8px] xl:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:346"
                  comWidth={60}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Jacket`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[15px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[24px] pt-[27px] lg:px-[23px] xl:px-[26px] 2xl:px-[30px] 3xl:px-[36px] px-[40px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:349"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_17.png"}
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:ml-[2px] ml-[3.5px] 3xl:ml-[3px] lg:mr-[1px] 3xl:mr-[2px] mr-[3.33px] 2xl:mx-[2px] xl:mx-[2px] object-contain w-[28%]"
                  compId="649:351"
                  comWidth={33.17}
                  comHeight={30}
                  compLeft={3.5}
                  compRight={3.33}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:352"
                  comWidth={40}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shirt`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[22px] pt-[25px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:355"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_18.png"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] 3xl:ml-[13px] ml-[14.5px] lg:ml-[8px] 3xl:mr-[12px] mr-[13.62px] lg:mr-[7px] 2xl:mx-[10px] xl:mx-[9px] object-contain w-[18%]"
                  compId="649:357"
                  comWidth={21.88}
                  comHeight={34}
                  compLeft={14.5}
                  compRight={13.62}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:358"
                  comWidth={50}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Pants`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pl-[19px] xl:pl-[22px] 3xl:pl-[29px] pl-[33px] lg:pr-[18px] xl:pr-[21px] 3xl:pr-[28px] pr-[32px] lg:pt-[17px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] pt-[30px] 2xl:px-[24px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:361"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_19.png"}
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24.06px] mx-[auto] object-contain w-[28%]"
                  compId="649:363"
                  comWidth={34}
                  comHeight={24.06}
                  compLeft={10.5}
                  compRight={10.5}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.94px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="649:364"
                  comWidth={55}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shoes`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[22px] pt-[25px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:367"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_20.png"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] mx-[auto] object-contain w-[20%]"
                  compId="649:369"
                  comWidth={24}
                  comHeight={34}
                  compLeft={13}
                  compRight={13}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:370"
                  comWidth={50}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Dress`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[16px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] pt-[28px] px-[11px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:373"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_21.png"}
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] mx-[auto] object-contain w-[28%]"
                  compId="649:375"
                  comWidth={34}
                  comHeight={28}
                  compLeft={32}
                  compRight={32}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:376"
                  comWidth={98}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Accesories`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[19px] 3xl:pt-[23px] pt-[26px] lg:px-[23px] xl:px-[27px] 2xl:px-[30px] 3xl:px-[36px] px-[41px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:379"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_22.png"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5.97px] 3xl:ml-[5px] 2xl:mr-[2px] xl:mr-[2px] lg:mr-[2px] mr-[3.98px] 3xl:mr-[3px] object-contain w-[23%]"
                  compId="649:381"
                  comWidth={28.05}
                  comHeight={34}
                  compLeft={5.97}
                  compRight={3.98}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:382"
                  comWidth={38}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Skirt`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[19px] 3xl:pt-[23px] pt-[26px] px-[11px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:385"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_23.png"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.98px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[33.51px] lg:mr-[17px] xl:mr-[20px] 2xl:mr-[22px] 3xl:mr-[27px] mr-[30.51px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.98px]"
                  compId="649:387"
                  comWidth={33.98}
                  comHeight={33.98}
                  compLeft={33.51}
                  compRight={30.51}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] mt-[14.02px] lg:mt-[8px] xl:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:388"
                  comWidth={98}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Underwear`}</Text>
              </Column>
              <Column
                className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19px] lg:pt-[21px] xl:pt-[25px] 2xl:pt-[28px] 3xl:pt-[33px] pt-[37.5px] lg:px-[21px] xl:px-[25px] 2xl:px-[28px] 3xl:px-[33px] px-[37.5px] 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                compId="649:391"
                comWidth={120}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_24.png"}
                  className="lg:h-[6px] 2xl:h-[7px] xl:h-[7px] h-[9px] mx-[auto] object-contain w-[33%]"
                  compId="649:393"
                  comWidth={39}
                  comHeight={9}
                  compLeft={3}
                  compRight={3}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.5px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                  compId="649:394"
                  comWidth={45}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`More`}</Text>
              </Column>
            </Row>
          </Column>
        </header>
        <Stack
          className="lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] w-[100%]"
          compId="207"
          comWidth={1920}
          comHeight={718}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Image
            src={"images/img_placeholder_35.png"}
            className="absolute lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] inset-[0] object-cover w-[100%]"
            compId="649:45"
            comWidth={1920}
            comHeight={718}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="placeholder"
          />
          <Column
            className="absolute bg-white_A700_82 inset-[0] items-start justify-center lg:pl-[165px] xl:pl-[188px] 2xl:pl-[212px] 3xl:pl-[254px] pl-[283px] lg:pr-[560px] xl:pr-[641px] 2xl:pr-[721px] 3xl:pr-[865px] pr-[961px] xl:py-[104px] 2xl:py-[117px] 3xl:py-[141px] py-[157px] lg:py-[91px] w-[100%]"
            compId="12"
            comWidth={1920}
            comHeight={718}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Button
              className="bg-white_A700 font-medium font-poppins lg:mr-[236px] xl:mr-[270px] 2xl:mr-[303px] 3xl:mr-[364px] mr-[405px] py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[14%]"
              compId="649:49"
              comWidth={271}
              comHeight={56}
              compLeft={0}
              compRight={405}
              compType="Button"
            >{`50% Off Limited Offer`}</Button>
            <Text
              className="font-bold font-playfairdisplay lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] mr-[36px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-[72px] text-gray_800 text-left w-[auto]"
              compId="649:47"
              comWidth={640}
              comHeight={72}
              compLeft={0}
              compRight={36}
              compType="Text"
            >{`Summer Collection`}</Text>
            <Text
              className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[35%]"
              compId="649:48"
              comWidth={676}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <div className="2xl:mr-[323px] 2xl:mt-[60px] 3xl:mr-[388px] 3xl:mt-[72px] lg:mr-[251px] lg:mt-[46px] mr-[431px] mt-[80px] w-[13%] xl:mr-[287px] xl:mt-[53px] input-wrap">
              <Image
                src={"images/img_arrow_6.png"}
                className="absolute z-[1] h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                compId="649:53"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
              <Button
                className="bg-gray_800 font-medium font-poppins lg:pl-[19px] xl:pl-[22px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[33px] 3xl:pr-[116px] pr-[129px] lg:pr-[75px] xl:pr-[86px] 2xl:pr-[96px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[100%]"
                compId="649:51"
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
          className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[85%]"
          compId="649:189"
          comWidth={1629}
          comHeight={54}
          compLeft={144}
          compRight={147}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="649:190"
            comWidth={168}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Featured`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[1046px] 3xl:ml-[1255px] ml-[1394px] lg:ml-[813px] xl:ml-[930px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="649:192"
            comWidth={67}
            comHeight={27}
            compLeft={1394}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
        </Row>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="649:116"
          comWidth={1632}
          comHeight={768}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Grid
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[32%]"
            compId="216"
            comWidth={522}
            comHeight={768}
            compLeft={0}
            compRight={0}
            compType="Grid"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:126"
              comWidth={245}
              comHeight={368}
              compLeft={0}
              compRight={277}
              compType="Column"
            >
              <Image
                src={"images/img_rectangle39_8.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:131"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle39"
              />
              <Text
                className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                compId="649:128"
                comWidth={162}
                comHeight={70}
                compLeft={42}
                compRight={41}
                compType="Text"
              >
                {
                  <>
                    {`Green `}
                    <br />
                    {`Warm Jacket`}
                  </>
                }
              </Text>
              <Text
                className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:129"
                comWidth={45}
                comHeight={27}
                compLeft={100.5}
                compRight={99.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:119"
              comWidth={245}
              comHeight={368}
              compLeft={277}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_rectangle39_9.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:124"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle39"
              />
              <Text
                className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                compId="649:121"
                comWidth={162}
                comHeight={70}
                compLeft={42}
                compRight={41}
                compType="Text"
              >
                {
                  <>
                    {`Black`}
                    <br />
                    {`Warm Jacket`}
                  </>
                }
              </Text>
              <Text
                className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:122"
                comWidth={45}
                comHeight={27}
                compLeft={100.5}
                compRight={99.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:134"
              comWidth={245}
              comHeight={368}
              compLeft={0}
              compRight={277}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_36.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:139"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                compId="649:136"
                comWidth={162}
                comHeight={70}
                compLeft={42}
                compRight={41}
                compType="Text"
              >
                {
                  <>
                    {`Black `}
                    <br />
                    {`Warm Jacket`}
                  </>
                }
              </Text>
              <Text
                className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:137"
                comWidth={45}
                comHeight={27}
                compLeft={100.5}
                compRight={99.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:141"
              comWidth={245}
              comHeight={368}
              compLeft={277}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_37.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:146"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[50%]"
                compId="649:143"
                comWidth={123}
                comHeight={70}
                compLeft={61}
                compRight={61}
                compType="Text"
              >
                {
                  <>
                    {`Black`}
                    <br />
                    {`Brief Case`}
                  </>
                }
              </Text>
              <Text
                className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:144"
                comWidth={45}
                comHeight={27}
                compLeft={100}
                compRight={100}
                compType="Text"
              >{`$299`}</Text>
            </Column>
          </Grid>
          <Column
            className="bg-gray_50 items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[41px] 3xl:pb-[49px] pb-[55px] w-[32%]"
            compId="649:149"
            comWidth={521}
            comHeight={768}
            compLeft={34}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_38.png"}
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] object-cover w-[100%]"
              compId="649:152"
              comWidth={521}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] 3xl:ml-[106px] ml-[118px] 2xl:ml-[88px] 3xl:mr-[105px] mr-[117px] 2xl:mr-[87px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:mx-[68px] xl:mx-[78px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-gray_800 w-[55%]"
              compId="649:154"
              comWidth={286}
              comHeight={108}
              compLeft={118}
              compRight={117}
              compType="Text"
            >
              {
                <>
                  {`Brown `}
                  <br />
                  {`Casual Sneaker`}
                </>
              }
            </Text>
            <Text
              className="font-medium lg:ml-[126px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] ml-[216px] lg:mr-[125px] xl:mr-[143px] 2xl:mr-[161px] 3xl:mr-[193px] mr-[215px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
              compId="649:155"
              comWidth={90}
              comHeight={54}
              compLeft={216}
              compRight={215}
              compType="Text"
            >{`$299`}</Text>
            <Button
              className="bg-gray_800 font-bold xl:ml-[107px] ml-[161px] xl:mr-[106px] mr-[160px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] 2xl:mx-[120px] 3xl:mx-[144px] lg:mx-[93px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[38%]"
              compId="649:156"
              comWidth={200}
              comHeight={60}
              compLeft={161}
              compRight={160}
              compType="Button"
            >{`Add to Cart`}</Button>
          </Column>
          <Grid
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] w-[32%]"
            compId="217"
            comWidth={522}
            comHeight={768}
            compLeft={33}
            compRight={0}
            compType="Grid"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:160"
              comWidth={245}
              comHeight={368}
              compLeft={0}
              compRight={277}
              compType="Column"
            >
              <Image
                src={"images/img_rectangle39_10.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:165"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle39"
              />
              <Text
                className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                compId="649:162"
                comWidth={162}
                comHeight={72}
                compLeft={42}
                compRight={41}
                compType="Text"
              >
                {
                  <>
                    {`Blue Grey `}
                    <br />
                    {`Warm Jacket`}
                  </>
                }
              </Text>
              <Text
                className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:163"
                comWidth={45}
                comHeight={27}
                compLeft={100.5}
                compRight={99.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="649:167"
              comWidth={245}
              comHeight={368}
              compLeft={277}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_rectangle39_11.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:169"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle39"
              />
              <Text
                className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[58%]"
                compId="649:172"
                comWidth={143}
                comHeight={70}
                compLeft={51}
                compRight={51}
                compType="Text"
              >
                {
                  <>
                    {`Blue Denim `}
                    <br />
                    {`Jacket`}
                  </>
                }
              </Text>
              <Text
                className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:173"
                comWidth={45}
                comHeight={27}
                compLeft={100}
                compRight={100}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="w-[100%]"
              compId="649:175"
              comWidth={245}
              comHeight={368}
              compLeft={0}
              compRight={277}
              compType="Column"
            >
              <Column
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]"
                compId="224"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_39.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="649:180"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
              </Column>
              <Column
                className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] pl-[42px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] pr-[16px] lg:pr-[9px] w-[100%]"
                compId="225"
                comWidth={245}
                comHeight={107}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[76%]"
                  compId="649:177"
                  comWidth={187}
                  comHeight={70}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  {
                    <>
                      {`Modern Classic`}
                      <br />
                      {`Watch`}
                    </>
                  }
                </Text>
                <Text
                  className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[41px] xl:mx-[47px] 2xl:mx-[53px] 3xl:mx-[63px] mx-[71px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="649:178"
                  comWidth={45}
                  comHeight={27}
                  compLeft={71}
                  compRight={71}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="w-[100%]"
              compId="649:182"
              comWidth={245}
              comHeight={368}
              compLeft={277}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]"
                compId="226"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_40.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="649:187"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
              </Column>
              <Column
                className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] pl-[42px] lg:pr-[17px] xl:pr-[20px] 2xl:pr-[22px] 3xl:pr-[27px] pr-[30px] w-[100%]"
                compId="227"
                comWidth={245}
                comHeight={107}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[71%]"
                  compId="649:184"
                  comWidth={173}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  {
                    <>
                      {`Casual `}
                      <br />
                      {`Classic Watch`}
                    </>
                  }
                </Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[37px] xl:mx-[42px] 2xl:mx-[48px] 3xl:mx-[57px] mx-[64px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="649:185"
                  comWidth={45}
                  comHeight={27}
                  compLeft={64}
                  compRight={64}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
          </Grid>
        </Row>
        <Stack
          className="lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]"
          compId="210"
          comWidth={1630}
          comHeight={426}
          compLeft={145}
          compRight={145}
          compType="Stack"
        >
          <Column
            className="absolute items-start justify-start left-[2%] top-[8%] w-[13%]"
            compId="203"
            comWidth={213}
            comHeight={116}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mr-[40px] xl:mr-[46px] 2xl:mr-[52px] 3xl:mr-[63px] mr-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
              compId="649:75"
              comWidth={143}
              comHeight={35}
              compLeft={0}
              compRight={70}
              compType="Text"
            >{`New Arrival`}</Text>
            <Column
              className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
              compId="228"
              comWidth={213}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[100%]"
                compId="649:74"
                comWidth={213}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet consectetur.`}</Text>
            </Column>
          </Column>
          <div
            className="absolute bg-gray_800 lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] left-[0] w-[24%]"
            compId="649:77"
            comWidth={384}
            comHeight={426}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <List
            className="absolute lg:gap-[15px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] gap-[26.570007px] grid grid-cols-4 inset-y-[0] min-h-[auto] my-[auto] right-[0] w-[83%]"
            compId="649:78"
            comWidth={1355}
            comHeight={362}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="bg-white_A700 items-center justify-center lg:px-[34px] xl:px-[39px] 2xl:px-[44px] 3xl:px-[53px] px-[59.41px] lg:py-[21px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[33px] py-[37.5px] shadow-bs2 w-[100%]"
              compId="649:79"
              comWidth={318.82}
              comHeight={362}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_blackbusiness.png"}
                className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="649:80"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="blackbusiness"
              />
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="649:82"
                comWidth={184}
                comHeight={36}
                compLeft={8}
                compRight={8}
                compType="Text"
              >{`Black Briefcase`}</Text>
              <Text
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:83"
                comWidth={45}
                comHeight={27}
                compLeft={77.5}
                compRight={77.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="bg-white_A700 items-center justify-center lg:px-[34px] xl:px-[39px] 2xl:px-[44px] 3xl:px-[53px] px-[59.41px] lg:py-[21px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[33px] py-[37.5px] shadow-bs2 w-[100%]"
              compId="649:86"
              comWidth={318.82}
              comHeight={362}
              compLeft={26.57}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_pink3tz3pbb1.png"}
                className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="649:87"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="pink3TZ3PBB1"
              />
              <Text
                className="font-medium lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[44.5px] lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] mr-[45.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:mx-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="649:89"
                comWidth={110}
                comHeight={35}
                compLeft={44.5}
                compRight={45.5}
                compType="Text"
              >{`Pink Shirt`}</Text>
              <Text
                className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:90"
                comWidth={45}
                comHeight={27}
                compLeft={77.5}
                compRight={77.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="bg-white_A700 items-center justify-center mb-[1px] pl-[59.42px] pr-[59.4px] lg:px-[34px] xl:px-[39px] 2xl:px-[44px] 3xl:px-[53px] lg:py-[21px] xl:py-[24px] 2xl:py-[27px] 3xl:py-[33px] py-[37.14px] shadow-bs2 w-[100%]"
              compId="649:91"
              comWidth={318.82}
              comHeight={361.28}
              compLeft={26.57}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_graytshirtis.png"}
                className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="649:92"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="graytshirtis"
              />
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="649:94"
                comWidth={145}
                comHeight={36}
                compLeft={27.5}
                compRight={27.5}
                compType="Text"
              >{`Gray T-shirt`}</Text>
              <Text
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:95"
                comWidth={45}
                comHeight={27}
                compLeft={77.5}
                compRight={77.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
            <Column
              className="bg-white_A700 items-center justify-center mt-[1px] lg:px-[34px] xl:px-[39px] 2xl:px-[44px] 3xl:px-[53px] px-[59.41px] lg:py-[21px] xl:py-[24px] 2xl:py-[27px] 3xl:py-[33px] py-[37.14px] shadow-bs2 w-[100%]"
              compId="649:96"
              comWidth={318.82}
              comHeight={361.28}
              compLeft={26.58}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_redcheckereds.png"}
                className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] mx-[auto] object-contain lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                compId="649:97"
                comWidth={200}
                comHeight={200}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="redcheckereds"
              />
              <Text
                className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="649:99"
                comWidth={140}
                comHeight={36}
                compLeft={30}
                compRight={30}
                compType="Text"
              >{`Red Flannel`}</Text>
              <Text
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="649:100"
                comWidth={45}
                comHeight={27}
                compLeft={77.5}
                compRight={77.5}
                compType="Text"
              >{`$299`}</Text>
            </Column>
          </List>
        </Stack>
        <Row
          className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[107px] 3xl:mr-[128px] mr-[143px] lg:mr-[83px] xl:mr-[95px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="649:101"
          comWidth={1633}
          comHeight={400}
          compLeft={144}
          compRight={143}
          compType="Row"
        >
          <Stack
            className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[49%]"
            compId="212"
            comWidth={800}
            comHeight={400}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_rectangle28.png"}
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
              compId="649:104"
              comWidth={800}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Rectangle28"
            />
            <Text
              className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[28%]"
              compId="649:105"
              comWidth={227}
              comHeight={110}
              compLeft={82.44}
              compRight={0}
              compType="Text"
            >
              <span className="text-white_A700 font-poppins">
                <>
                  {`Casual`}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
          <Stack
            className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]"
            compId="214"
            comWidth={801}
            comHeight={400}
            compLeft={32}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_rectangle29.png"}
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
              compId="649:108"
              comWidth={801}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Rectangle29"
            />
            <Text
              className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[28%]"
              compId="649:109"
              comWidth={227}
              comHeight={93.74}
              compLeft={79.64}
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
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
        </Row>
        <Stack
          className="lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[362px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="205"
          comWidth={1920}
          comHeight={362}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bg-gray_800 items-center justify-start lg:pb-[127px] xl:pb-[146px] 2xl:pb-[164px] 3xl:pb-[197px] pb-[219px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] xl:pr-[1058px] 2xl:pr-[1190px] 3xl:pr-[1428px] pr-[1586px] lg:pr-[925px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[41px] 3xl:pt-[49px] pt-[55px] top-[0] w-[100%]"
            compId="14"
            comWidth={1920}
            comHeight={309}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
              compId="649:40"
              comWidth={190}
              comHeight={35}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Why Choose Us`}</Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            compId="649:8"
            comWidth={1632}
            comHeight={217}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Row
              className="bg-white_A700 items-center justify-start lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] px-[46.5px] lg:py-[37px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] py-[64px] shadow-bs3 w-[100%]"
              compId="649:9"
              comWidth={384}
              comHeight={217}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_truck_2.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="649:10"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Truck"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[55%]"
                compId="649:14"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[53px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] mr-[91px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="649:15"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={91}
                  compType="Text"
                >{`Free Delivery`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="229"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="649:16"
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
              </Column>
            </Row>
            <Row
              className="bg-white_A700 items-center justify-center lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] px-[46.5px] lg:py-[37px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] py-[64px] shadow-bs3 w-[100%]"
              compId="649:17"
              comWidth={384}
              comHeight={217}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_card_2.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="649:18"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Card"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[55%]"
                compId="649:21"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[30px] xl:mr-[34px] 2xl:mr-[39px] 3xl:mr-[46px] mr-[52px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="649:22"
                  comWidth={159}
                  comHeight={27}
                  compLeft={0}
                  compRight={52}
                  compType="Text"
                >{`Payment Method`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="230"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="649:23"
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
              </Column>
            </Row>
            <Row
              className="bg-white_A700 items-center justify-center lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] px-[46.5px] lg:py-[37px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] py-[64px] shadow-bs3 w-[100%]"
              compId="649:24"
              comWidth={384}
              comHeight={217}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_broken_2.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="649:25"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Broken"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[55%]"
                compId="649:29"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 3xl:mr-[108px] mr-[121px] lg:mr-[70px] xl:mr-[80px] 2xl:mr-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="649:30"
                  comWidth={90}
                  comHeight={27}
                  compLeft={0}
                  compRight={121}
                  compType="Text"
                >{`Warranty`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="231"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="649:31"
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
              </Column>
            </Row>
            <Row
              className="bg-white_A700 items-center justify-center lg:px-[27px] xl:px-[31px] 2xl:px-[34px] 3xl:px-[41px] px-[46.5px] lg:py-[37px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] py-[64px] shadow-bs3 w-[100%]"
              compId="649:32"
              comWidth={384}
              comHeight={217}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_support_2.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="649:33"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Support"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[55%]"
                compId="649:37"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="649:38"
                  comWidth={171}
                  comHeight={27}
                  compLeft={0}
                  compRight={40}
                  compType="Text"
                >{`Customer Support`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="232"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="649:39"
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
              </Column>
            </Row>
          </List>
        </Stack>
        <Row
          className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[111px] 3xl:mr-[134px] mr-[149px] lg:mr-[86px] xl:mr-[99px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]"
          compId="649:276"
          comWidth={1627}
          comHeight={54}
          compLeft={144}
          compRight={149}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="649:277"
            comWidth={334}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Popular this Week`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[1104px] ml-[1226px] lg:ml-[715px] xl:ml-[817px] 2xl:ml-[920px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="649:279"
            comWidth={67}
            comHeight={27}
            compLeft={1226}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
        </Row>
        <List
          className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-6 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="649:197"
          comWidth={1630}
          comHeight={408}
          compLeft={145}
          compRight={145}
          compType="List"
          orientation="horizontal"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="649:198"
            comWidth={245}
            comHeight={408}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_41.png"}
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
              compId="649:209"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[81%]"
              compId="649:200"
              comWidth={198}
              comHeight={72}
              compLeft={24}
              compRight={23}
              compType="Text"
            >
              {
                <>
                  {`Black Adventure`}
                  <br />
                  {`Boots`}
                </>
              }
            </Text>
            <RatingBar
              className="lg:ml-[39px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mr-[38px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[44px]"
              compId="218"
              comWidth={112}
              comHeight={16}
              compLeft={67}
              compRight={66}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:207"
              comWidth={45}
              comHeight={27}
              compLeft={100.5}
              compRight={99.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="649:211"
            comWidth={245}
            comHeight={408}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_42.png"}
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
              compId="649:222"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[64%]"
              compId="649:213"
              comWidth={157}
              comHeight={72}
              compLeft={44}
              compRight={44}
              compType="Text"
            >
              {
                <>
                  {`Black Formal`}
                  <br />
                  {`Highheels`}
                </>
              }
            </Text>
            <RatingBar
              className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto]"
              compId="219"
              comWidth={112}
              comHeight={16}
              compLeft={66.5}
              compRight={66.5}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:220"
              comWidth={45}
              comHeight={27}
              compLeft={100}
              compRight={100}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="649:224"
            comWidth={245}
            comHeight={408}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_43.png"}
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
              compId="649:226"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] lg:ml-[23px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mr-[22px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[68%]"
              compId="649:229"
              comWidth={166}
              comHeight={72}
              compLeft={40}
              compRight={39}
              compType="Text"
            >
              {
                <>
                  {`Brown `}
                  <br />
                  {`Casual Shoes`}
                </>
              }
            </Text>
            <RatingBar
              className="lg:ml-[39px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mr-[38px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[44px]"
              compId="220"
              comWidth={112}
              comHeight={16}
              compLeft={67}
              compRight={66}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:236"
              comWidth={45}
              comHeight={27}
              compLeft={100.5}
              compRight={99.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-start justify-start w-[100%]"
            compId="649:237"
            comWidth={245}
            comHeight={408}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Column
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]"
              compId="233"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_placeholder_44.png"}
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                compId="649:248"
                comWidth={245}
                comHeight={245}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
            </Column>
            <Text
              className="font-medium leading-[normal] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] lg:mr-[39px] xl:mr-[44px] 2xl:mr-[50px] 3xl:mr-[60px] mr-[67px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[52%]"
              compId="649:239"
              comWidth={128}
              comHeight={72}
              compLeft={50}
              compRight={67}
              compType="Text"
            >
              {
                <>
                  {`Gray `}
                  <br />
                  {`Longpants`}
                </>
              }
            </Text>
            <RatingBar
              className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
              compId="221"
              comWidth={112}
              comHeight={16}
              compLeft={58}
              compRight={75}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium lg:ml-[53px] xl:ml-[61px] 2xl:ml-[68px] 3xl:ml-[82px] ml-[91.5px] mr-[108.5px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:246"
              comWidth={45}
              comHeight={27}
              compLeft={91.5}
              compRight={108.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="649:250"
            comWidth={245}
            comHeight={408}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_45.png"}
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
              compId="649:261"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[62%]"
              compId="649:252"
              comWidth={152}
              comHeight={70}
              compLeft={47}
              compRight={46}
              compType="Text"
            >
              {
                <>
                  {`Green`}
                  <br />
                  {`Sport Jacket`}
                </>
              }
            </Text>
            <RatingBar
              className="lg:ml-[39px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mr-[38px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] xl:mx-[44px]"
              compId="222"
              comWidth={112}
              comHeight={16}
              compLeft={67}
              compRight={66}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:259"
              comWidth={45}
              comHeight={27}
              compLeft={100.5}
              compRight={99.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start w-[100%]"
            compId="649:263"
            comWidth={245}
            comHeight={408}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_46.png"}
              className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
              compId="649:265"
              comWidth={245}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[58%]"
              compId="649:268"
              comWidth={143}
              comHeight={70}
              compLeft={51}
              compRight={51}
              compType="Text"
            >
              {
                <>
                  {`Blue Denim `}
                  <br />
                  {`Skirt`}
                </>
              }
            </Text>
            <RatingBar
              className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] mx-[auto]"
              compId="223"
              comWidth={112}
              comHeight={16}
              compLeft={66.5}
              compRight={66.5}
              compType="RatingBar"
              value={4}
              starCount={5}
              color="var(--gray_50)"
              activeColor="var(--yellow_400)"
              size={((window.innerWidth - 15) * 16) / 1920}
            ></RatingBar>
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="649:275"
              comWidth={45}
              comHeight={27}
              compLeft={100}
              compRight={100}
              compType="Text"
            >{`$299`}</Text>
          </Column>
        </List>
        <Image
          src={"images/img_brand_1.png"}
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] ml-[475px] xl:mr-[317px] 2xl:mr-[357px] 3xl:mr-[428px] mr-[475.75px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:mx-[277px] object-contain w-[50%]"
          compId="649:110"
          comWidth={969.25}
          comHeight={68.29}
          compLeft={475}
          compRight={475.75}
          compType="Image"
          alt="brand"
        />
        <footer
          className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="649:283"
          comWidth={1920}
          comHeight={491}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="66"
            comWidth={1632}
            comHeight={395}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="201"
              comWidth={1632}
              comHeight={310}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] w-[25%]"
                compId="202"
                comWidth={416}
                comHeight={288}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[176px] xl:mr-[201px] 2xl:mr-[226px] 3xl:mr-[271px] mr-[302px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="649:306"
                  comWidth={114}
                  comHeight={36}
                  compLeft={0}
                  compRight={302}
                  compType="Text"
                >{`Contacts`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="234"
                  comWidth={416}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start pl-[1px] lg:pr-[120px] xl:pr-[138px] 2xl:pr-[155px] 3xl:pr-[186px] pr-[207px] w-[100%]"
                    compId="649:307"
                    comWidth={416}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start ml-[0] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] w-[36%]"
                      compId="649:308"
                      comWidth={149.02}
                      comHeight={32}
                      compLeft={0}
                      compRight={58}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector_25.png"}
                        className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                        compId="649:310"
                        comWidth={19.93}
                        comHeight={19.87}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="649:311"
                        comWidth={119}
                        comHeight={32}
                        compLeft={10.09}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                      compId="649:312"
                      comWidth={207}
                      comHeight={32}
                      compLeft={0.02}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector_26.png"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                        compId="649:314"
                        comWidth={20}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                        compId="649:315"
                        comWidth={177}
                        comHeight={32}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-bold lg:mr-[151px] xl:mr-[172px] 2xl:mr-[194px] 3xl:mr-[233px] mr-[259px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="649:327"
                  comWidth={157}
                  comHeight={36}
                  compLeft={0}
                  compRight={259}
                  compType="Text"
                >{`Social Media`}</Text>
                <Image
                  src={"images/img_sosmedia_1.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mr-[172px] xl:mr-[197px] 2xl:mr-[222px] 3xl:mr-[266px] mr-[296px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-contain w-[29%]"
                  compId="649:328"
                  comWidth={120}
                  comHeight={24}
                  compLeft={0}
                  compRight={296}
                  compType="Image"
                  alt="sosmedia"
                />
              </Column>
              <Column
                className="items-start justify-start w-[10%]"
                compId="649:296"
                comWidth={165}
                comHeight={310}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="235"
                  comWidth={165}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="649:297"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product Links`}</Text>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[70%]"
                  compId="649:298"
                  comWidth={115}
                  comHeight={242}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[15px] lg:mr-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="649:299"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={15}
                    compType="Text"
                  >{`Categories`}</Text>
                  <Text
                    className="font-normal xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] mr-[16px] lg:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="649:300"
                    comWidth={99}
                    comHeight={27}
                    compLeft={0}
                    compRight={16}
                    compType="Text"
                  >{`New Arrival`}</Text>
                  <Text
                    className="font-normal lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[33px] mr-[37px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="649:301"
                    comWidth={78}
                    comHeight={27}
                    compLeft={0}
                    compRight={37}
                    compType="Text"
                  >{`Features`}</Text>
                  <Text
                    className="font-normal xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] mr-[15px] lg:mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="649:302"
                    comWidth={100}
                    comHeight={27}
                    compLeft={0}
                    compRight={15}
                    compType="Text"
                  >{`Collections`}</Text>
                  <Text
                    className="font-normal lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[33px] mr-[37px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="649:303"
                    comWidth={78}
                    comHeight={27}
                    compLeft={0}
                    compRight={37}
                    compType="Text"
                  >{`Discount`}</Text>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="236"
                    comWidth={115}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:304"
                      comWidth={115}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Special Offer`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column
                className="items-start justify-start lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] ml-[252px] w-[9%]"
                compId="649:287"
                comWidth={147}
                comHeight={310}
                compLeft={252}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="649:288"
                  comWidth={123}
                  comHeight={35}
                  compLeft={0}
                  compRight={24}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[100%]"
                  compId="237"
                  comWidth={147}
                  comHeight={242}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="649:289"
                    comWidth={147}
                    comHeight={242}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:290"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={93}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:291"
                      comWidth={39}
                      comHeight={27}
                      compLeft={0}
                      compRight={108}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:292"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={75}
                      compType="Text"
                    >{`Careers`}</Text>
                    <Text
                      className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:293"
                      comWidth={75}
                      comHeight={27}
                      compLeft={0}
                      compRight={72}
                      compType="Text"
                    >{`Services`}</Text>
                    <Text
                      className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                      compId="649:294"
                      comWidth={120}
                      comHeight={27}
                      compLeft={0}
                      compRight={27}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="238"
                      comWidth={147}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                        compId="649:295"
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
                className="items-start justify-start mb-[101px] lg:mb-[58px] xl:mb-[67px] 2xl:mb-[75px] 3xl:mb-[90px] lg:ml-[156px] xl:ml-[178px] 2xl:ml-[201px] 3xl:ml-[241px] ml-[268px] w-[24%]"
                compId="649:316"
                comWidth={384}
                comHeight={209}
                compLeft={268}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="649:324"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={146}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="239"
                  comWidth={384}
                  comHeight={149}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="649:325"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Row
                    className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                    compId="649:317"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                      compId="649:319"
                      comWidth={149.77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email`}</Text>
                    <Image
                      src={"images/img_submit_1.png"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="649:320"
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
              className="font-normal 2xl:ml-[507px] 3xl:ml-[608px] ml-[676px] 2xl:mr-[508px] 3xl:mr-[609px] mr-[677px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] lg:mx-[394px] xl:mx-[451px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 text-left w-[auto]"
              compId="649:285"
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

export default HomepageV3Page;
