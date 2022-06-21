import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Input,
  Button,
  Line,
  Stack,
  List,
} from "components";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/cart");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="139:32"
        comWidth={1920}
        comHeight={2187}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="30"
          comWidth={1920}
          comHeight={96}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-white_A700 items-center justify-start 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
            compId="195:643"
            comWidth={1920}
            comHeight={96}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Row
              className="items-center justify-center lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] w-[6%]"
              compId="195:655"
              comWidth={111}
              comHeight={35}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_group19_8.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                compId="195:657"
                comWidth={39}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group19"
              />
              <Text
                className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                compId="195:656"
                comWidth={64}
                comHeight={35}
                compLeft={8}
                compRight={0}
                compType="Text"
              >{`Elliye`}</Text>
            </Row>
            <div className="2xl:ml-[309px] 3xl:ml-[371px] lg:ml-[240px] ml-[412px] w-[31%] xl:ml-[274px] input-wrap">
              <Image
                onClick={() => setInputvalue("")}
                src={
                  inputvalue?.length
                    ? "images/close3.svg"
                    : "images/img_button_3.png"
                }
                className="absolute z-[1] cursor-pointer h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                compId="195:647"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="button"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-white_A700 border-2 border-gray_50 border-solid font-normal pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[32.5px] lg:pr-[56px] xl:pr-[64px] 2xl:pr-[72px] 3xl:pr-[86px] pr-[96px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500_87 text-gray_500_87 text-left w-[100%]"
                compId="195:644"
                comWidth={0}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="SearchView"
                name="searchbar"
                placeholder={`Search here`}
              ></Input>
            </div>
            <Image
              src={"images/img_icon_5.png"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
              compId="195:660"
              comWidth={80}
              comHeight={24}
              compLeft={304}
              compRight={0}
              compType="Image"
              alt="icon"
            />
            <Button
              className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:py-[10px] 3xl:py-[12px] py-[13.5px] lg:py-[7px] xl:py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[6%]"
              compId="195:653"
              comWidth={107}
              comHeight={48}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Login`}</Button>
          </Row>
        </header>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="196:23"
          comWidth={1632}
          comHeight={697}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Column
            className="items-center lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] w-[49%]"
            compId="196:24"
            comWidth={800}
            comHeight={692}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_67.png"}
              className="lg:h-[306px] xl:h-[349px] 2xl:h-[393px] 3xl:h-[471px] h-[523px] object-cover w-[100%]"
              compId="210:11"
              comWidth={800}
              comHeight={523}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Row
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-center 2xl:ml-[119px] 3xl:ml-[143px] ml-[159px] lg:ml-[92px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[106px] w-[60%]"
              compId="273:13"
              comWidth={481}
              comHeight={137}
              compLeft={159}
              compRight={160}
              compType="Row"
            >
              <Image
                src={"images/img_placeholder_68.png"}
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                compId="141:545"
                comWidth={139}
                comHeight={137}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Image
                src={"images/img_placeholder_69.png"}
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                compId="141:547"
                comWidth={139}
                comHeight={137}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Image
                src={"images/img_placeholder_70.png"}
                className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] object-contain w-[100%]"
                compId="141:555"
                comWidth={139}
                comHeight={137}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
            </Row>
          </Column>
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]"
            compId="273:12"
            comWidth={800}
            comHeight={697}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start lg:mr-[287px] xl:mr-[328px] 2xl:mr-[369px] 3xl:mr-[443px] mr-[492px] w-[39%]"
              compId="139:508"
              comWidth={308}
              comHeight={27}
              compLeft={0}
              compRight={492}
              compType="Row"
            >
              <Text
                className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="139:509"
                comWidth={81}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Featured`}</Text>
              <Text
                className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
                compId="139:511"
                comWidth={11}
                comHeight={27}
                compLeft={17}
                compRight={0}
                compType="Text"
              >{`>`}</Text>
              <Text
                className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="139:510"
                comWidth={183}
                comHeight={27}
                compLeft={16}
                compRight={0}
                compType="Text"
              >{`Purple Warm Jacket`}</Text>
            </Row>
            <Text
              className="font-bold leading-[normal] lg:mr-[239px] xl:mr-[273px] 2xl:mr-[307px] 3xl:mr-[369px] mr-[410px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-[56px] text-gray_800 text-left w-[49%]"
              compId="139:400"
              comWidth={390}
              comHeight={168}
              compLeft={0}
              compRight={410}
              compType="Text"
            >
              {
                <>
                  {`Purple Warm `}
                  <br />
                  {`Zip Jacket`}
                </>
              }
            </Text>
            <Text
              className="font-normal lg:mr-[414px] xl:mr-[474px] 2xl:mr-[533px] 3xl:mr-[640px] mr-[711px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
              compId="139:401"
              comWidth={89}
              comHeight={54}
              compLeft={0}
              compRight={711}
              compType="Text"
            >{`$299`}</Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="287"
              comWidth={800}
              comHeight={128}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-bluegray_100 h-[1px] w-[100%]"
                compId="139:515"
                comWidth={800}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Text
                className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                compId="139:517"
                comWidth={800}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
            <Row
              className="items-center justify-start lg:mr-[306px] xl:mr-[350px] 2xl:mr-[394px] 3xl:mr-[473px] mr-[526px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[34%]"
              compId="139:533"
              comWidth={274}
              comHeight={48}
              compLeft={0}
              compRight={526}
              compType="Row"
            >
              <Text
                className="font-medium mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="139:532"
                comWidth={79}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Quantity`}</Text>
              <Stack
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] w-[62%]"
                compId="286"
                comWidth={171}
                comHeight={48}
                compLeft={24}
                compRight={0}
                compType="Stack"
              >
                <Row
                  className="absolute lg:gap-[43px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[67px] gap-[75px] grid grid-cols-2 inset-[0] items-center justify-between w-[100%]"
                  compId="285"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_decrease.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="139:528"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="decrease"
                  />
                  <Image
                    src={"images/img_increase.png"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="139:526"
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
                  compId="139:530"
                  comWidth={171}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`1`}</Button>
              </Stack>
            </Row>
            <div className="2xl:mr-[416px] 2xl:mt-[42px] 3xl:mr-[499px] 3xl:mt-[50px] lg:mr-[323px] lg:mt-[32px] mr-[555px] mt-[56px] w-[31%] xl:mr-[370px] xl:mt-[37px] input-wrap">
              <Image
                src={"images/img_vector_54.png"}
                className="absolute z-[1] right-[0] my-[auto] inset-y-[0]"
                compId="141:544"
                comWidth={24}
                comHeight={25.33}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Button
                className="common-pointer bg-gray_800 font-bold lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] 3xl:pr-[88px] pr-[98.82999999999993px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.5px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[100%]"
                compId="139:402"
                comWidth={0}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Button"
                onClick={handleNavigate3}
              >{`Add to Cart`}</Button>
            </div>
          </Column>
        </Row>
        <Row
          className="items-center justify-start lg:mt-[106px] xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[164px] mt-[183px] mx-[auto] w-[85%]"
          compId="139:216"
          comWidth={1632}
          comHeight={54}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="139:217"
            comWidth={297}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Similiar Product`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
            compId="139:227"
            comWidth={67}
            comHeight={27}
            compLeft={32}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
          <Image
            src={"images/img_button_4.png"}
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[1012px] ml-[1124px] lg:ml-[655px] xl:ml-[749px] 2xl:ml-[843px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] object-contain w-[7%]"
            compId="139:218"
            comWidth={112}
            comHeight={48}
            compLeft={1124}
            compRight={0}
            compType="Image"
            alt="button"
          />
        </Row>
        <List
          className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] gap-[166px] lg:gap-[96px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[85%]"
          compId="139:404"
          comWidth={1632}
          comHeight={500}
          compLeft={144}
          compRight={144}
          compType="List"
          orientation="horizontal"
        >
          <Column
            className="items-center justify-start lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[81.5px] w-[100%]"
            compId="139:405"
            comWidth={250}
            comHeight={337}
            compLeft={67}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_71.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="139:406"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="139:408"
              comWidth={184}
              comHeight={36}
              compLeft={33}
              compRight={33}
              compType="Text"
            >{`Black Briefcase`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="139:409"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start lg:my-[47px] xl:my-[54px] 2xl:my-[61px] 3xl:my-[73px] my-[81.5px] w-[100%]"
            compId="139:412"
            comWidth={250}
            comHeight={337}
            compLeft={166}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_72.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="139:413"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium lg:ml-[40px] xl:ml-[46px] 3xl:ml-[62px] ml-[69.5px] lg:mr-[41px] xl:mr-[47px] 3xl:mr-[63px] mr-[70.5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 2xl:mx-[52px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="139:415"
              comWidth={110}
              comHeight={35}
              compLeft={69.5}
              compRight={70.5}
              compType="Text"
            >{`Pink Shirt`}</Text>
            <Text
              className="font-medium lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="139:416"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start 2xl:mb-[61px] 3xl:mb-[73px] mb-[82px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] lg:my-[47px] xl:my-[54px] w-[100%]"
            compId="139:417"
            comWidth={250}
            comHeight={337}
            compLeft={166}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_73.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="139:418"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="139:420"
              comWidth={145}
              comHeight={36}
              compLeft={52.5}
              compRight={52.5}
              compType="Text"
            >{`Gray T-shirt`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="139:421"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
          <Column
            className="items-center justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] w-[100%]"
            compId="139:422"
            comWidth={250}
            comHeight={337}
            compLeft={166}
            compRight={67}
            compType="Column"
          >
            <Image
              src={"images/img_placeholder_74.png"}
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] h-[250px] mx-[auto] object-cover lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px] w-[250px]"
              compId="139:423"
              comWidth={250}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="139:425"
              comWidth={140}
              comHeight={36}
              compLeft={55}
              compRight={55}
              compType="Text"
            >{`Red Flannel`}</Text>
            <Text
              className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="139:426"
              comWidth={45}
              comHeight={27}
              compLeft={102.5}
              compRight={102.5}
              compType="Text"
            >{`$299`}</Text>
          </Column>
        </List>
        <footer
          className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="199:464"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="69"
            comWidth={1632}
            comHeight={397}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="273:16"
              comWidth={1632}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] pr-[32px] w-[25%]"
                compId="199:483"
                comWidth={416}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mr-[159px] xl:mr-[182px] 2xl:mr-[204px] 3xl:mr-[245px] mr-[273px] w-[27%]"
                  compId="199:484"
                  comWidth={111}
                  comHeight={35}
                  compLeft={0}
                  compRight={273}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_9.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="199:486"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:485"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                  compId="199:490"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[135px] xl:mr-[155px] 2xl:mr-[174px] 3xl:mr-[209px] mr-[233px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[36%]"
                  compId="199:492"
                  comWidth={149.02}
                  comHeight={32}
                  compLeft={1.98}
                  compRight={233}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_55.png"}
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                    compId="199:494"
                    comWidth={19.93}
                    comHeight={19.87}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:495"
                    comWidth={119}
                    comHeight={32}
                    compLeft={10.09}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[102px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[175px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                  compId="199:496"
                  comWidth={207}
                  comHeight={32}
                  compLeft={2}
                  compRight={175}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_56.png"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                    compId="199:498"
                    comWidth={20}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:499"
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
                compId="199:476"
                comWidth={165}
                comHeight={224}
                compLeft={278}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="288"
                  comWidth={165}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:477"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product Links`}</Text>
                </Column>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:479"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:480"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={66}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="font-normal lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:481"
                  comWidth={78}
                  comHeight={27}
                  compLeft={0}
                  compRight={87}
                  compType="Text"
                >{`Features`}</Text>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:482"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Collections`}</Text>
              </Column>
              <Column
                className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[9%]"
                compId="199:467"
                comWidth={147}
                comHeight={280}
                compLeft={112}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:468"
                  comWidth={123}
                  comHeight={35}
                  compLeft={0}
                  compRight={24}
                  compType="Text"
                >{`Company`}</Text>
                <Text
                  className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:470"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={93}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:471"
                  comWidth={39}
                  comHeight={27}
                  compLeft={0}
                  compRight={108}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:472"
                  comWidth={72}
                  comHeight={27}
                  compLeft={0}
                  compRight={75}
                  compType="Text"
                >{`Careers`}</Text>
                <Text
                  className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:473"
                  comWidth={75}
                  comHeight={27}
                  compLeft={0}
                  compRight={72}
                  compType="Text"
                >{`Services`}</Text>
                <Text
                  className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:474"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={27}
                  compType="Text"
                >{`Privacy Policy`}</Text>
                <Column
                  className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                  compId="289"
                  comWidth={147}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:475"
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
                compId="199:500"
                comWidth={384}
                comHeight={209}
                compLeft={130}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:508"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={146}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="290"
                  comWidth={384}
                  comHeight={149}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="199:509"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Row
                    className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                    compId="199:501"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                      compId="199:503"
                      comWidth={149.77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email`}</Text>
                    <Image
                      src={"images/img_submit_4.png"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="199:504"
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
              compId="199:466"
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

export default ProductDetailsPage;
