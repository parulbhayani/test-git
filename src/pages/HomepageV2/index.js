import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Input,
  Button,
  Line,
  Stack,
  PagerIndicator,
  List,
  RatingBar,
} from "components";

const HomepageV2Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="93:122"
        comWidth={1920}
        comHeight={5176}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="11"
          comWidth={1920}
          comHeight={171}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="bg-white_A700 items-center justify-start 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
            compId="181:15"
            comWidth={1920}
            comHeight={171}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-end justify-start mx-[auto] w-[85%]"
              compId="105:6"
              comWidth={1632}
              comHeight={53}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-start 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[7%]"
                compId="93:569"
                comWidth={111}
                comHeight={35}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group19_1.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                  compId="93:571"
                  comWidth={39}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group19"
                />
                <Text
                  className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="93:570"
                  comWidth={64}
                  comHeight={35}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Elliye`}</Text>
              </Row>
              <div className="2xl:mb-[3px] 2xl:ml-[309px] 3xl:mb-[4px] 3xl:ml-[371px] lg:mb-[2px] lg:ml-[240px] mb-[5px] ml-[412px] w-[36%] xl:mb-[3px] xl:ml-[274px] input-wrap">
                <Image
                  onClick={() => setInputvalue("")}
                  src={
                    inputvalue?.length
                      ? "images/close.svg"
                      : "images/img_search.png"
                  }
                  className="absolute z-[1] cursor-pointer h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                  compId="93:651"
                  comWidth={48}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="search"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="bg-white_A700 border-2 border-gray_50 border-solid font-normal pb-[11px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[32.5px] lg:pr-[56px] xl:pr-[64px] 2xl:pr-[72px] 3xl:pr-[86px] pr-[96px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500_87 text-gray_500_87 text-left w-[100%]"
                  compId="93:645"
                  comWidth={0}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="SearchView"
                  name="search"
                  placeholder={`Search here`}
                ></Input>
              </div>
              <Image
                src={"images/img_icon_1.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] mb-[17px] lg:mb-[9px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain w-[5%]"
                compId="93:574"
                comWidth={80}
                comHeight={24}
                compLeft={304}
                compRight={0}
                compType="Image"
                alt="icon"
              />
              <Button
                className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[7%]"
                compId="93:562"
                comWidth={107}
                comHeight={53}
                compLeft={32}
                compRight={0}
                compType="Button"
              >{`Login`}</Button>
            </Row>
            <Line
              className="bg-gray_50 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] w-[85%]"
              compId="93:656"
              comWidth={1632}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center justify-center xl:ml-[284px] 2xl:ml-[320px] 3xl:ml-[384px] ml-[427px] xl:mr-[285px] 2xl:mr-[321px] 3xl:mr-[385px] mr-[428px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] lg:mx-[249px] w-[40%]"
              compId="105:7"
              comWidth={777}
              comHeight={27}
              compLeft={427}
              compRight={428}
              compType="Row"
            >
              <Text
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="93:565"
                comWidth={100}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Categories`}</Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="93:566"
                comWidth={99}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="font-normal lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] ml-[82px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="93:567"
                comWidth={78}
                comHeight={27}
                compLeft={82}
                compRight={0}
                compType="Text"
              >{`Features`}</Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="93:568"
                comWidth={100}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Collections`}</Text>
              <Text
                className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="108:34"
                comWidth={78}
                comHeight={27}
                compLeft={80}
                compRight={0}
                compType="Text"
              >{`Discount`}</Text>
            </Row>
          </Column>
        </header>
        <div
          className="overflow-x-auto w-[100%]"
          compId="179"
          comWidth={1920}
          comHeight={750}
          compLeft={0}
          compRight={0}
          compType="HorizontalScroll"
        >
          <Stack
            className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] overflow-auto w-[100%]"
            compId="169"
            comWidth={1920}
            comHeight={750}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_image1.png"}
              className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] inset-[0] object-cover w-[100%]"
              compId="711:5"
              comWidth={1920}
              comHeight={750}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image1"
            />
            <Column
              className="absolute bg-black_900_68 inset-[0] items-start justify-end lg:pb-[18px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pb-[32px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] lg:pr-[569px] xl:pr-[651px] 2xl:pr-[732px] 3xl:pr-[878px] pr-[976px] 3xl:pt-[106px] pt-[118px] lg:pt-[68px] xl:pt-[78px] 2xl:pt-[88px] w-[100%]"
              compId="8"
              comWidth={1920}
              comHeight={750}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium font-poppins lg:mr-[320px] xl:mr-[366px] 2xl:mr-[412px] 3xl:mr-[494px] mr-[549px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                compId="93:242"
                comWidth={251}
                comHeight={36}
                compLeft={0}
                compRight={549}
                compType="Text"
              >{`50% Off Limited Offer`}</Text>
              <Text
                className="font-bold font-playfairdisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 3xl:text-[115px] text-[128px] lg:text-[74px] xl:text-[85px] 2xl:text-[96px] text-left text-white_A700 w-[auto]"
                compId="93:241"
                comWidth={800}
                comHeight={256}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                {
                  <>
                    {`Summer `}
                    <br />
                    {`Collection`}
                  </>
                }
              </Text>
              <div className="2xl:mr-[416px] 2xl:mt-[60px] 3xl:mr-[499px] 3xl:mt-[72px] lg:mr-[323px] lg:mt-[46px] mr-[555px] mt-[80px] w-[13%] xl:mr-[370px] xl:mt-[53px] input-wrap">
                <Image
                  src={"images/img_arrow_2.png"}
                  className="absolute z-[1] h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                  compId="156:6"
                  comWidth={48}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
                <Button
                  className="bg-gray_800 font-medium font-poppins lg:pl-[19px] xl:pl-[22px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[33px] 3xl:pr-[116px] pr-[129px] lg:pr-[75px] xl:pr-[86px] 2xl:pr-[96px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[100%]"
                  compId="93:243"
                  comWidth={0}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`Shop Now`}</Button>
              </div>
              <PagerIndicator
                className="h-[12px] lg:mr-[401px] xl:mr-[459px] 2xl:mr-[516px] 3xl:mr-[619px] mr-[688px] 2xl:mt-[111px] 3xl:mt-[133px] mt-[148px] lg:mt-[86px] xl:mt-[98px] w-[auto]"
                compId="93:232"
                comWidth={112}
                comHeight={12}
                compLeft={0}
                compRight={688}
                compType="PagerIndicator"
                count={6}
                activeCss="inline-block cursor-pointer w-[12px] h-[12px] bg-gray_800"
                activeIndex={undefined}
                inactiveCss="inline-block cursor-pointer w-[12px] h-[12px] bg-white_A700"
                sliderRef={undefined}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </Column>
            <Row
              className="absolute bottom-[4%] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-7 items-center justify-between right-[0] shadow-bs w-[63%]"
              compId="108:6"
              comWidth={1216}
              comHeight={160}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[22px] xl:pt-[26px] 2xl:pt-[29px] 3xl:pt-[35px] pt-[39.4px] lg:px-[29px] xl:px-[33px] 2xl:px-[37px] 3xl:px-[45px] px-[50px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:168"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_6.png"}
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] h-[39.67px] ml-[10.4px] lg:ml-[6px] 3xl:ml-[9px] lg:mr-[5px] 3xl:mr-[8px] mr-[9.93px] xl:mx-[6px] 2xl:mx-[7px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px] w-[39.67px]"
                  compId="93:172"
                  comWidth={39.67}
                  comHeight={39.67}
                  compLeft={10.4}
                  compRight={9.93}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.93px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:173"
                  comWidth={60}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Jacket`}</Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[24px] xl:pt-[27px] 2xl:pt-[31px] 3xl:pt-[37px] pt-[41.5px] lg:px-[35px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] px-[60px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:186"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_7.png"}
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] h-[35px] mx-[1px] object-contain w-[24%]"
                  compId="93:191"
                  comWidth={38.7}
                  comHeight={35}
                  compLeft={0.75}
                  compRight={0.55}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26.5px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:189"
                  comWidth={40}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shirt`}</Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pl-[31px] xl:pl-[36px] 2xl:pl-[40px] pl-[54.5px] lg:pr-[32px] xl:pr-[37px] 2xl:pr-[41px] pr-[55.5px] lg:pt-[22px] xl:pt-[26px] 2xl:pt-[29px] 3xl:pt-[35px] pt-[39.17px] 3xl:px-[49px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:174"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_8.png"}
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] h-[39.67px] 3xl:ml-[11px] ml-[12.67px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] 3xl:mr-[10px] mr-[11.8px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] object-contain w-[16%]"
                  compId="93:178"
                  comWidth={25.53}
                  comHeight={39.67}
                  compLeft={12.67}
                  compRight={11.8}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24.16px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:179"
                  comWidth={50}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Pants`}</Text>
              </Column>
              <Column
                className="bg-gray_800 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[26px] xl:pt-[30px] 2xl:pt-[33px] 3xl:pt-[40px] pt-[45px] lg:px-[30px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] px-[52.5px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:180"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_9.png"}
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28.07px] ml-[7.67px] mr-[7.66px] lg:mx-[4px] 2xl:mx-[5px] xl:mx-[5px] 3xl:mx-[6px] object-contain w-[25%]"
                  compId="93:184"
                  comWidth={39.67}
                  comHeight={28.07}
                  compLeft={7.67}
                  compRight={7.66}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.93px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                  compId="93:185"
                  comWidth={55}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shoes`}</Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[22px] xl:pt-[26px] 2xl:pt-[29px] 3xl:pt-[35px] pt-[39.17px] lg:px-[32px] xl:px-[36px] 2xl:px-[41px] 3xl:px-[49px] px-[55px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:192"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_10.png"}
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] h-[39.67px] mx-[auto] object-contain w-[18%]"
                  compId="93:196"
                  comWidth={28}
                  comHeight={39.67}
                  compLeft={11}
                  compRight={11}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24.16px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:197"
                  comWidth={50}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Dress`}</Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[24px] xl:pt-[28px] 2xl:pt-[32px] 3xl:pt-[38px] pt-[42.67px] lg:px-[18px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] px-[31px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="93:198"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_11.png"}
                  className="lg:h-[20px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[30px] h-[32.67px] ml-[29.17px] mr-[29.16px] lg:mx-[17px] xl:mx-[19px] 2xl:mx-[21px] 3xl:mx-[26px] object-contain w-[25%]"
                  compId="93:202"
                  comWidth={39.67}
                  comHeight={32.67}
                  compLeft={29.17}
                  compRight={29.16}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.66px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:203"
                  comWidth={98}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Accesories`}</Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] lg:pt-[23px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] pt-[40.33px] lg:px-[35px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] px-[61px] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]"
                compId="108:7"
                comWidth={160}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_vector_12.png"}
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] h-[39.67px] 2xl:ml-[2px] xl:ml-[2px] lg:ml-[2px] ml-[3.8px] 3xl:ml-[3px] mr-[1px] object-contain w-[20%]"
                  compId="112:38"
                  comWidth={32.73}
                  comHeight={39.67}
                  compLeft={3.8}
                  compRight={1.47}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="108:12"
                  comWidth={38}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Skirt`}</Text>
              </Column>
            </Row>
          </Stack>
        </div>
        <Image
          src={"images/img_vector_13.png"}
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] ml-[475.37px] mr-[475.38px] 3xl:mt-[104px] mt-[115.86px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] lg:mx-[277px] xl:mx-[317px] 2xl:mx-[356px] 3xl:mx-[428px] object-contain w-[50%]"
          compId="156:16"
          comWidth={969.25}
          comHeight={68.29}
          compLeft={475.37}
          compRight={475.38}
          compType="Image"
          alt="Vector"
        />
        <Row
          className="items-center justify-start 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[107px] 3xl:mr-[128px] mr-[143px] lg:mr-[83px] xl:mr-[95px] 3xl:mt-[104px] mt-[115.85px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[85%]"
          compId="163:3"
          comWidth={1633}
          comHeight={832}
          compLeft={144}
          compRight={143}
          compType="Row"
        >
          <Column
            className="w-[49%]"
            compId="327:2"
            comWidth={800}
            comHeight={832}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
              compId="162"
              comWidth={800}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_placeholder_23.png"}
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                compId="93:327"
                comWidth={800}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[28%]"
                compId="93:328"
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
              className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="160"
              comWidth={800}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_placeholder_24.png"}
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                compId="93:323"
                comWidth={800}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[28%]"
                compId="93:324"
                comWidth={227}
                comHeight={110}
                compLeft={90.25}
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
                <span className="text-gray_800 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
          </Column>
          <Stack
            className="lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]"
            compId="164"
            comWidth={801}
            comHeight={832}
            compLeft={32}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_placeholder_25.png"}
              className="absolute lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] inset-[0] object-cover w-[100%]"
              compId="93:331"
              comWidth={801}
              comHeight={832}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="absolute font-normal leading-[normal] left-[10%] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 top-[37%] w-[28%]"
              compId="93:332"
              comWidth={227}
              comHeight={110}
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
        <Row
          className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]"
          compId="93:586"
          comWidth={1632}
          comHeight={54}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Text
            className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
            compId="93:587"
            comWidth={168}
            comHeight={54}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Featured`}</Text>
          <Text
            className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[1016px] 3xl:ml-[1219px] ml-[1354px] lg:ml-[789px] xl:ml-[903px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
            compId="93:589"
            comWidth={67}
            comHeight={27}
            compLeft={1354}
            compRight={0}
            compType="Text"
          >{`View all`}</Text>
          <Image
            src={"images/img_arrow_3.png"}
            className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain rotate-[90deg] w-[2%]"
            compId="93:590"
            comWidth={32}
            comHeight={31}
            compLeft={11}
            compRight={0}
            compType="Image"
            alt="Arrow"
          />
        </Row>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] w-[85%]"
          compId="327:4"
          comWidth={1632}
          comHeight={768}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Stack
            className="lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] w-[32%]"
            compId="166"
            comWidth={523}
            comHeight={761}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_placeholder_26.png"}
              className="absolute lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] inset-[0] object-cover w-[100%]"
              compId="168:33"
              comWidth={523}
              comHeight={761}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Text
              className="absolute font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-gray_800 top-[7%] w-[61%]"
              compId="168:37"
              comWidth={321}
              comHeight={108}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-gray_800 font-poppins">
                <>
                  {`Discover Our `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-gray_800 font-poppins font-bold">
                <>{`Featured Product`}</>
              </span>
            </Text>
          </Stack>
          <List
            className="gap-[0] min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[66%]"
            compId="327:3"
            comWidth={1077}
            comHeight={768}
            compLeft={32}
            compRight={0}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
              compId="181:11"
              comWidth={1077}
              comHeight={368}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center w-[100%]"
                compId="181:2"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="166:35"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                  compId="166:32"
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
                  compId="166:33"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center w-[100%]"
                compId="181:3"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_1.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="166:28"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                  compId="166:25"
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
                  compId="166:26"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center w-[100%]"
                compId="181:4"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_2.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="166:20"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                  compId="93:395"
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
                  compId="93:396"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center w-[100%]"
                compId="181:5"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_3.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="166:16"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[58%]"
                  compId="93:400"
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
                  compId="93:401"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Row>
            <Row
              className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
              compId="181:12"
              comWidth={1077}
              comHeight={368}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center justify-start w-[23%]"
                compId="181:6"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_4.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="168:24"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[45%]"
                  compId="168:9"
                  comWidth={111}
                  comHeight={70}
                  compLeft={67}
                  compRight={67}
                  compType="Text"
                >
                  {
                    <>
                      {`Casual `}
                      <br />
                      {`Pink Shirt`}
                    </>
                  }
                </Text>
                <Text
                  className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="168:10"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[23%]"
                compId="181:7"
                comWidth={245}
                comHeight={332}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_5.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="168:20"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[auto]"
                  compId="168:6"
                  comWidth={145}
                  comHeight={36}
                  compLeft={50}
                  compRight={50}
                  compType="Text"
                >{`Gray T-shirt`}</Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="168:7"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] w-[23%]"
                compId="181:8"
                comWidth={245}
                comHeight={368}
                compLeft={33}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_6.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="168:16"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                  compId="168:3"
                  comWidth={162}
                  comHeight={70}
                  compLeft={42}
                  compRight={41}
                  compType="Text"
                >
                  {
                    <>
                      {`Purple `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="168:4"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[23%]"
                compId="181:9"
                comWidth={245}
                comHeight={332}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle39_7.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="168:12"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle39"
                />
                <Text
                  className="font-medium xl:ml-[35px] 3xl:ml-[47px] ml-[53px] xl:mr-[34px] 3xl:mr-[46px] mr-[52px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[30px] 2xl:mx-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="168:28"
                  comWidth={140}
                  comHeight={36}
                  compLeft={53}
                  compRight={52}
                  compType="Text"
                >{`Red Flannel`}</Text>
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="168:29"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Row>
          </List>
        </Row>
        <Stack
          className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] h-[579px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="171"
          comWidth={1920}
          comHeight={579}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute bg-gray_800 items-center justify-start lg:pb-[183px] xl:pb-[209px] 2xl:pb-[235px] 3xl:pb-[282px] pb-[314px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] xl:pr-[1026px] 2xl:pr-[1154px] 3xl:pr-[1385px] pr-[1538px] lg:pr-[897px] lg:pt-[26px] xl:pt-[30px] 2xl:pt-[33px] 3xl:pt-[40px] pt-[45px] top-[0] w-[100%]"
            compId="9"
            comWidth={1920}
            comHeight={413}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-left text-white_A700 w-[auto]"
              compId="171:15"
              comWidth={238}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Limited Offer`}</Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            compId="327:5"
            comWidth={1632}
            comHeight={435}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Row
              className="bg-gray_50 items-center justify-start lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[32px] xl:pr-[37px] 2xl:pr-[42px] 3xl:pr-[50px] pr-[56px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] shadow-bs1 w-[100%]"
              compId="181:17"
              comWidth={800}
              comHeight={435}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center w-[35%]"
                compId="327:6"
                comWidth={279}
                comHeight={371}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle45.png"}
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] mx-[auto] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  compId="210:6"
                  comWidth={279}
                  comHeight={279}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle45"
                />
                <Button
                  className="bg-gray_800 font-bold lg:ml-[23px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mr-[22px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[26px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[72%]"
                  compId="171:53"
                  comWidth={200}
                  comHeight={60}
                  compLeft={40}
                  compRight={39}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
              <Column
                className="items-start lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:my-[26px] xl:my-[30px] 2xl:my-[34px] 3xl:my-[41px] my-[46px] w-[48%]"
                compId="171:52"
                comWidth={385}
                comHeight={279}
                compLeft={48}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal lg:mr-[131px] xl:mr-[150px] 2xl:mr-[169px] 3xl:mr-[203px] mr-[226px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="171:16"
                  comWidth={159}
                  comHeight={35}
                  compLeft={0}
                  compRight={226}
                  compType="Text"
                >{`Limited Deals`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                  compId="180"
                  comWidth={385}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between w-[100%]"
                    compId="171:48"
                    comWidth={385}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:pl-[16px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] lg:pr-[15px] 2xl:pr-[20px] 3xl:pr-[24px] pr-[27px] xl:px-[18px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:44"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:35"
                        comWidth={30}
                        comHeight={35}
                        compLeft={11}
                        compRight={11}
                        compType="Text"
                      >{`08`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:36"
                        comWidth={52}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Hours`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center xl:p-[12px] lg:px-[11px] 2xl:px-[14px] 3xl:px-[17px] px-[19px] lg:py-[10px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:43"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] mr-[19px] lg:mx-[11px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:38"
                        comWidth={30}
                        comHeight={35}
                        compLeft={20}
                        compRight={19}
                        compType="Text"
                      >{`58`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:39"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Minutes`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] pl-[15px] 2xl:pr-[10px] 3xl:pr-[12px] pr-[14px] xl:pr-[9px] lg:px-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:47"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:ml-[15px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:mr-[16px] 2xl:mr-[21px] 3xl:mr-[25px] mr-[28px] xl:mx-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:40"
                        comWidth={23}
                        comHeight={35}
                        compLeft={27}
                        compRight={28}
                        compType="Text"
                      >{`18`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:41"
                        comWidth={78}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Seconds`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="font-bold 2xl:mr-[108px] 3xl:mr-[130px] mr-[145px] lg:mr-[84px] xl:mr-[96px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="171:17"
                  comWidth={240}
                  comHeight={35}
                  compLeft={0}
                  compRight={145}
                  compType="Text"
                >{`Black Warm Jacket`}</Text>
                <Column
                  className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                  compId="181"
                  comWidth={385}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:pr-[145px] xl:pr-[166px] 2xl:pr-[186px] 3xl:pr-[224px] pr-[249px] w-[100%]"
                    compId="145"
                    comWidth={385}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="171:18"
                      comWidth={59}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$299`}</Text>
                    <Text
                      className="font-medium mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="171:26"
                      comWidth={53}
                      comHeight={35}
                      compLeft={24}
                      compRight={0}
                      compType="Text"
                    >{`$199`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-gray_50 items-center justify-center lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pr-[32px] xl:pr-[37px] 2xl:pr-[42px] 3xl:pr-[50px] pr-[56px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] shadow-bs1 w-[100%]"
              compId="181:16"
              comWidth={800}
              comHeight={435}
              compLeft={32}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-center w-[35%]"
                compId="327:7"
                comWidth={279}
                comHeight={371}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_rectangle45_1.png"}
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] mx-[auto] object-cover lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  compId="210:3"
                  comWidth={279}
                  comHeight={279}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle45"
                />
                <Button
                  className="bg-gray_800 font-bold lg:ml-[23px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mr-[22px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[26px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[72%]"
                  compId="171:60"
                  comWidth={200}
                  comHeight={60}
                  compLeft={40}
                  compRight={39}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
              <Column
                className="items-start lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:my-[26px] xl:my-[30px] 2xl:my-[34px] 3xl:my-[41px] my-[46px] w-[48%]"
                compId="171:62"
                comWidth={385}
                comHeight={279}
                compLeft={48}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal lg:mr-[131px] xl:mr-[150px] 2xl:mr-[169px] 3xl:mr-[203px] mr-[226px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="171:65"
                  comWidth={159}
                  comHeight={35}
                  compLeft={0}
                  compRight={226}
                  compType="Text"
                >{`Limited Deals`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                  compId="182"
                  comWidth={385}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between w-[100%]"
                    compId="171:67"
                    comWidth={385}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center lg:pl-[16px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] lg:pr-[15px] 2xl:pr-[20px] 3xl:pr-[24px] pr-[27px] xl:px-[18px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:68"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:71"
                        comWidth={30}
                        comHeight={35}
                        compLeft={11}
                        compRight={11}
                        compType="Text"
                      >{`08`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:72"
                        comWidth={52}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Hours`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center xl:p-[12px] lg:px-[11px] 2xl:px-[14px] 3xl:px-[17px] px-[19px] lg:py-[10px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:73"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] mr-[19px] lg:mx-[11px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:76"
                        comWidth={30}
                        comHeight={35}
                        compLeft={20}
                        compRight={19}
                        compType="Text"
                      >{`58`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:77"
                        comWidth={69}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Minutes`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] pl-[15px] 2xl:pr-[10px] 3xl:pr-[12px] pr-[14px] xl:pr-[9px] lg:px-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      compId="171:78"
                      comWidth={107}
                      comHeight={107}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium lg:ml-[15px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:mr-[16px] 2xl:mr-[21px] 3xl:mr-[25px] mr-[28px] xl:mx-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:80"
                        comWidth={23}
                        comHeight={35}
                        compLeft={27}
                        compRight={28}
                        compType="Text"
                      >{`18`}</Text>
                      <Text
                        className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                        compId="171:81"
                        comWidth={78}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Seconds`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="font-bold xl:mr-[102px] 2xl:mr-[115px] 3xl:mr-[138px] mr-[154px] lg:mr-[89px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                  compId="171:66"
                  comWidth={231}
                  comHeight={36}
                  compLeft={0}
                  compRight={154}
                  compType="Text"
                >{`Casual Grey Shoes`}</Text>
                <Column
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                  compId="183"
                  comWidth={385}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:pr-[145px] xl:pr-[166px] 2xl:pr-[186px] 3xl:pr-[224px] pr-[249px] w-[100%]"
                    compId="149"
                    comWidth={385}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="171:63"
                      comWidth={60}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$399`}</Text>
                    <Text
                      className="font-medium mb-[1px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="171:64"
                      comWidth={53}
                      comHeight={35}
                      compLeft={23}
                      compRight={0}
                      compType="Text"
                    >{`$199`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </List>
        </Stack>
        <Row
          className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] mx-[auto] w-[85%]"
          compId="327:8"
          comWidth={1634}
          comHeight={581}
          compLeft={143}
          compRight={143}
          compType="Row"
        >
          <Column
            className="items-start w-[100%]"
            compId="181:19"
            comWidth={802}
            comHeight={581}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mr-[343px] xl:mr-[392px] 2xl:mr-[441px] 3xl:mr-[529px] mr-[588px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
              compId="171:251"
              comWidth={214}
              comHeight={54}
              compLeft={0}
              compRight={588}
              compType="Text"
            >{`New Arrival`}</Text>
            <Column
              className="items-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] w-[100%]"
              compId="184"
              comWidth={802}
              comHeight={448.5}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] mx-[auto] w-[97%]"
                compId="172"
                comWidth={781}
                comHeight={339}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-start lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[100%]"
                  compId="153"
                  comWidth={781}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_27.png"}
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="171:261"
                    comWidth={107}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start 3xl:mb-[13px] mb-[14.5px] lg:mb-[8px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] 2xl:my-[10px] xl:my-[9px] w-[28%]"
                    compId="171:264"
                    comWidth={220}
                    comHeight={79}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="185"
                      comWidth={220}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="171:265"
                        comWidth={220}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Checkered Jacket`}</Text>
                    </Column>
                    <Text
                      className="font-medium xl:mr-[107px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[161px] lg:mr-[93px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="171:266"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={161}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                  <Image
                    src={"images/img_placeholder_28.png"}
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="177:35"
                    comWidth={107}
                    comHeight={107}
                    compLeft={75}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start 3xl:mb-[13px] mb-[14.5px] lg:mb-[8px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] 2xl:my-[10px] xl:my-[9px] w-[31%]"
                    compId="177:38"
                    comWidth={240}
                    comHeight={79}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="186"
                      comWidth={240}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="177:39"
                        comWidth={240}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Blue Woman Denim`}</Text>
                    </Column>
                    <Text
                      className="font-medium lg:mr-[105px] xl:mr-[120px] 2xl:mr-[135px] 3xl:mr-[162px] mr-[181px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="177:40"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={181}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-center justify-start lg:mr-[39px] xl:mr-[44px] 2xl:mr-[50px] 3xl:mr-[60px] mr-[67px] lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[91%]"
                  compId="154"
                  comWidth={714}
                  comHeight={107}
                  compLeft={0}
                  compRight={67}
                  compType="Row"
                >
                  <Image
                    src={"images/img_placeholder_29.png"}
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="177:20"
                    comWidth={107}
                    comHeight={107}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start 3xl:mb-[13px] mb-[14.5px] lg:mb-[8px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] 2xl:my-[10px] xl:my-[9px] w-[24%]"
                    compId="177:23"
                    comWidth={171}
                    comHeight={79}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="187"
                      comWidth={171}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="177:24"
                        comWidth={171}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Orange Jeans`}</Text>
                    </Column>
                    <Text
                      className="font-medium 3xl:mr-[100px] mr-[112px] lg:mr-[65px] xl:mr-[74px] 2xl:mr-[84px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="177:25"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={112}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                  <Image
                    src={"images/img_placeholder_30.png"}
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    compId="177:50"
                    comWidth={107}
                    comHeight={107}
                    compLeft={124}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Column
                    className="items-start 3xl:mb-[13px] mb-[14.5px] lg:mb-[8px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] 2xl:my-[10px] xl:my-[9px] w-[24%]"
                    compId="177:53"
                    comWidth={173}
                    comHeight={79}
                    compLeft={16}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="188"
                      comWidth={173}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                        compId="177:54"
                        comWidth={173}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Classic Watch`}</Text>
                    </Column>
                    <Text
                      className="font-medium 3xl:mr-[102px] mr-[114px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[85px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                      compId="177:55"
                      comWidth={59}
                      comHeight={35}
                      compLeft={0}
                      compRight={114}
                      compType="Text"
                    >{`$299`}</Text>
                  </Column>
                </Row>
              </List>
              <Row
                className="items-center justify-center lg:ml-[187px] xl:ml-[214px] 2xl:ml-[241px] 3xl:ml-[289px] ml-[322px] lg:mr-[201px] xl:mr-[230px] 2xl:mr-[259px] 3xl:mr-[311px] mr-[346px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[14%]"
                compId="179:123"
                comWidth={110}
                comHeight={31}
                compLeft={322}
                compRight={346}
                compType="Row"
              >
                <Text
                  className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="179:124"
                  comWidth={67}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`View all`}</Text>
                <Image
                  src={"images/img_arrow_4.png"}
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] object-contain rotate-[90deg] w-[29%]"
                  compId="179:125"
                  comWidth={32}
                  comHeight={31}
                  compLeft={11}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column
            className="items-start w-[100%]"
            compId="181:18"
            comWidth={802}
            comHeight={581}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mr-[268px] xl:mr-[307px] 2xl:mr-[345px] 3xl:mr-[415px] mr-[461px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
              compId="177:62"
              comWidth={341}
              comHeight={54}
              compLeft={0}
              compRight={461}
              compType="Text"
            >{`Popular This Week`}</Text>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] w-[85%]"
              compId="173"
              comWidth={685}
              comHeight={344}
              compLeft={24}
              compRight={93}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="items-center justify-start xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[99%]"
                compId="156"
                comWidth={678}
                comHeight={112}
                compLeft={0}
                compRight={7}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_31.png"}
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="177:66"
                  comWidth={107}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[19%]"
                  compId="177:68"
                  comWidth={132}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="190"
                    comWidth={132}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="177:70"
                      comWidth={132}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Blue Jeans`}</Text>
                  </Column>
                  <Text
                    className="font-medium lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[65px] mr-[73px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                    compId="177:71"
                    comWidth={59}
                    comHeight={35}
                    compLeft={0}
                    compRight={73}
                    compType="Text"
                  >{`$299`}</Text>
                  <RatingBar
                    className="lg:mr-[11px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] mr-[20px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="175"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={20}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Image
                  src={"images/img_placeholder_32.png"}
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="177:81"
                  comWidth={107}
                  comHeight={107}
                  compLeft={163}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[20%]"
                  compId="177:83"
                  comWidth={137}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="191"
                    comWidth={137}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="177:85"
                      comWidth={137}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Wristwatch`}</Text>
                  </Column>
                  <Text
                    className="font-medium lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                    compId="177:86"
                    comWidth={59}
                    comHeight={35}
                    compLeft={0}
                    compRight={78}
                    compType="Text"
                  >{`$299`}</Text>
                  <RatingBar
                    className="lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[22px] mr-[25px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="176"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={25}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row
                className="items-center justify-start lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[100%]"
                compId="157"
                comWidth={685}
                comHeight={112}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_placeholder_33.png"}
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="177:96"
                  comWidth={107}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[26%]"
                  compId="177:98"
                  comWidth={179}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="192"
                    comWidth={179}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="177:100"
                      comWidth={179}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Elegant Jacket`}</Text>
                  </Column>
                  <Text
                    className="font-medium 3xl:mr-[108px] mr-[120px] lg:mr-[70px] xl:mr-[80px] 2xl:mr-[90px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                    compId="177:101"
                    comWidth={59}
                    comHeight={35}
                    compLeft={0}
                    compRight={120}
                    compType="Text"
                  >{`$299`}</Text>
                  <RatingBar
                    className="lg:mr-[39px] xl:mr-[44px] 2xl:mr-[50px] 3xl:mr-[60px] mr-[67px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="177"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={67}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Image
                  src={"images/img_placeholder_34.png"}
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[104px] ml-[116px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  compId="177:111"
                  comWidth={107}
                  comHeight={107}
                  compLeft={116}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[21%]"
                  compId="177:113"
                  comWidth={144}
                  comHeight={112}
                  compLeft={16}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="193"
                    comWidth={144}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-medium mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                      compId="177:115"
                      comWidth={144}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Gray Watch`}</Text>
                  </Column>
                  <Text
                    className="font-medium lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 text-left w-[auto]"
                    compId="177:116"
                    comWidth={59}
                    comHeight={35}
                    compLeft={0}
                    compRight={85}
                    compType="Text"
                  >{`$299`}</Text>
                  <RatingBar
                    className="lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px]"
                    compId="178"
                    comWidth={112}
                    comHeight={16}
                    compLeft={0}
                    compRight={32}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
            </List>
            <Column
              className="items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] lg:px-[201px] xl:px-[230px] 2xl:px-[259px] 3xl:px-[311px] px-[346px] w-[100%]"
              compId="189"
              comWidth={802}
              comHeight={31}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-center mx-[auto] w-[14%]"
                compId="179:129"
                comWidth={110}
                comHeight={31}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="179:130"
                  comWidth={67}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`View all`}</Text>
                <Image
                  src={"images/img_arrow_5.png"}
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] object-contain rotate-[90deg] w-[29%]"
                  compId="179:131"
                  comWidth={32}
                  comHeight={31}
                  compLeft={11}
                  compRight={0}
                  compType="Image"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row
          className="bg-gray_50 items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] lg:pr-[138px] xl:pr-[158px] 2xl:pr-[177px] 3xl:pr-[213px] pr-[237px] lg:py-[37px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] py-[64px] w-[100%]"
          compId="112:6"
          comWidth={1920}
          comHeight={217}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_truck_1.png"}
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="93:130"
            comWidth={48}
            comHeight={48}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="Truck"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[11%]"
            compId="93:134"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mr-[53px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] mr-[91px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="93:135"
              comWidth={120}
              comHeight={27}
              compLeft={0}
              compRight={91}
              compType="Text"
            >{`Free Delivery`}</Text>
            <Column
              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
              compId="194"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                compId="93:136"
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
          <Image
            src={"images/img_card_1.png"}
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            compId="93:140"
            comWidth={48}
            comHeight={48}
            compLeft={125}
            compRight={0}
            compType="Image"
            alt="Card"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[11%]"
            compId="93:143"
            comWidth={211}
            comHeight={89}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mr-[30px] xl:mr-[34px] 2xl:mr-[39px] 3xl:mr-[46px] mr-[52px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="93:144"
              comWidth={159}
              comHeight={27}
              compLeft={0}
              compRight={52}
              compType="Text"
            >{`Payment Method`}</Text>
            <Column
              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
              compId="195"
              comWidth={211}
              comHeight={54}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                compId="93:145"
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
          <List
            className="3xl:gap-[112px] gap-[125px] lg:gap-[72px] xl:gap-[83px] 2xl:gap-[93px] grid grid-cols-2 min-h-[auto] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] w-[37%]"
            compId="174"
            comWidth={707}
            comHeight={89}
            compLeft={125}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="93:146"
              comWidth={291}
              comHeight={89}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_broken_1.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="93:149"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Broken"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[73%]"
                compId="93:153"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 3xl:mr-[108px] mr-[121px] lg:mr-[70px] xl:mr-[80px] 2xl:mr-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="93:154"
                  comWidth={90}
                  comHeight={27}
                  compLeft={0}
                  compRight={121}
                  compType="Text"
                >{`Warranty`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="196"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="93:155"
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
              className="items-center justify-between w-[100%]"
              compId="93:156"
              comWidth={291}
              comHeight={89}
              compLeft={125}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_support_1.png"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="93:159"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Support"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[73%]"
                compId="93:163"
                comWidth={211}
                comHeight={89}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                  compId="93:164"
                  comWidth={171}
                  comHeight={27}
                  compLeft={0}
                  compRight={40}
                  compType="Text"
                >{`Customer Support`}</Text>
                <Column
                  className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                  compId="197"
                  comWidth={211}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="93:165"
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
        </Row>
        <footer
          className="bg-gray_800 w-[100%]"
          compId="112:34"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="65"
            comWidth={1632}
            comHeight={397}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="143"
              comWidth={1632}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] pr-[32px] w-[25%]"
                compId="112:18"
                comWidth={416}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mr-[159px] xl:mr-[182px] 2xl:mr-[204px] 3xl:mr-[245px] mr-[273px] w-[27%]"
                  compId="192:200"
                  comWidth={111}
                  comHeight={35}
                  compLeft={0}
                  compRight={273}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_2.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="192:202"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="192:201"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                  compId="112:21"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[135px] xl:mr-[155px] 2xl:mr-[174px] 3xl:mr-[209px] mr-[233px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[36%]"
                  compId="192:199"
                  comWidth={149.02}
                  comHeight={32}
                  compLeft={1.98}
                  compRight={233}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_14.png"}
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                    compId="192:198"
                    comWidth={19.93}
                    comHeight={19.87}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="112:26"
                    comWidth={119}
                    comHeight={32}
                    compLeft={10.09}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[102px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[175px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                  compId="192:196"
                  comWidth={207}
                  comHeight={32}
                  compLeft={2}
                  compRight={175}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_15.png"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                    compId="199:371"
                    comWidth={20}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="112:28"
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
                compId="93:357"
                comWidth={165}
                comHeight={224}
                compLeft={278}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="198"
                  comWidth={165}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="93:358"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product Links`}</Text>
                </Column>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:360"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:361"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={66}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="font-normal lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:362"
                  comWidth={78}
                  comHeight={27}
                  compLeft={0}
                  compRight={87}
                  compType="Text"
                >{`Features`}</Text>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:363"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Collections`}</Text>
              </Column>
              <Column
                className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[9%]"
                compId="93:342"
                comWidth={147}
                comHeight={280}
                compLeft={112}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="93:349"
                  comWidth={123}
                  comHeight={35}
                  compLeft={0}
                  compRight={24}
                  compType="Text"
                >{`Company`}</Text>
                <Text
                  className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:344"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={93}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:345"
                  comWidth={39}
                  comHeight={27}
                  compLeft={0}
                  compRight={108}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:346"
                  comWidth={72}
                  comHeight={27}
                  compLeft={0}
                  compRight={75}
                  compType="Text"
                >{`Careers`}</Text>
                <Text
                  className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="93:348"
                  comWidth={75}
                  comHeight={27}
                  compLeft={0}
                  compRight={72}
                  compType="Text"
                >{`Services`}</Text>
                <Text
                  className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="112:44"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={27}
                  compType="Text"
                >{`Privacy Policy`}</Text>
                <Column
                  className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                  compId="199"
                  comWidth={147}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="112:45"
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
                compId="93:370"
                comWidth={384}
                comHeight={209}
                compLeft={130}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="93:377"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={146}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="200"
                  comWidth={384}
                  comHeight={149}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="93:378"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Row
                    className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.61px] w-[100%]"
                    compId="93:371"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                      compId="93:376"
                      comWidth={149.77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email`}</Text>
                    <Image
                      src={"images/img_submit.png"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.62px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="112:8"
                      comWidth={60}
                      comHeight={60}
                      compLeft={149.62}
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
              compId="93:340"
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

export default HomepageV2Page;
