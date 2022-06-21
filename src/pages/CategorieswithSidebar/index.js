import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Input,
  Button,
  SelectBox,
  CheckBox,
  Line,
  List,
  RatingBar,
  Grid,
} from "components";

const CategorieswithSidebarPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="146:31"
        comWidth={1920}
        comHeight={1983}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="21"
          comWidth={1920}
          comHeight={96}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-white_A700 items-center justify-start 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
            compId="146:359"
            comWidth={1920}
            comHeight={96}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_group19_6.png"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[2%]"
              compId="146:373"
              comWidth={39}
              comHeight={24}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Group19"
            />
            <Text
              className="cursor-pointer hover:font-bold font-bold lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="146:372"
              comWidth={64}
              comHeight={35}
              compLeft={8}
              compRight={0}
              compType="Text"
            >{`Elliye`}</Text>
            <div className="2xl:ml-[309px] 3xl:ml-[371px] lg:ml-[240px] ml-[412px] w-[31%] xl:ml-[274px] input-wrap">
              <Image
                onClick={() => setInputvalue("")}
                src={
                  inputvalue?.length
                    ? "images/close2.svg"
                    : "images/img_button_2.png"
                }
                className="absolute z-[1] cursor-pointer h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                compId="146:363"
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
                compId="146:360"
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
              src={"images/img_icon_4.png"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
              compId="146:376"
              comWidth={80}
              comHeight={24}
              compLeft={304}
              compRight={0}
              compType="Image"
              alt="icon"
            />
            <Button
              className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:py-[10px] 3xl:py-[12px] py-[13.5px] lg:py-[7px] xl:py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[6%]"
              compId="146:369"
              comWidth={107}
              comHeight={48}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Login`}</Button>
          </Row>
        </header>
        <Column
          className="items-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] xl:pr-[1053px] 2xl:pr-[1185px] 3xl:pr-[1421px] pr-[1579px] lg:pr-[921px] w-[100%]"
          compId="268"
          comWidth={1920}
          comHeight={27}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start w-[10%]"
            compId="146:267"
            comWidth={197}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="146:268"
              comWidth={53}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
              compId="146:270"
              comWidth={11}
              comHeight={27}
              compLeft={17}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="146:269"
              comWidth={100}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Categories`}</Text>
          </Row>
        </Column>
        <Text
          className="font-bold lg:ml-[500px] xl:ml-[572px] 3xl:ml-[772px] ml-[858px] lg:mr-[499px] xl:mr-[571px] 3xl:mr-[771px] mr-[857px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] 2xl:mx-[643px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
          compId="146:277"
          comWidth={205}
          comHeight={54}
          compLeft={858}
          compRight={857}
          compType="Text"
        >{`Categories`}</Text>
        <Row
          className="items-start justify-start 2xl:ml-[111px] 3xl:ml-[133px] ml-[148px] lg:ml-[86px] xl:ml-[98px] 2xl:mr-[105px] 3xl:mr-[126px] mr-[140px] lg:mr-[81px] xl:mr-[93px] lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] w-[85%]"
          compId="273:3"
          comWidth={1632}
          comHeight={1080}
          compLeft={148}
          compRight={140}
          compType="Row"
        >
          <Column
            className="items-start justify-start lg:mb-[193px] xl:mb-[221px] 2xl:mb-[249px] 3xl:mb-[298px] mb-[332px] w-[15%]"
            compId="183:351"
            comWidth={245}
            comHeight={748}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center w-[100%]"
              compId="269"
              comWidth={245}
              comHeight={381}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-start justify-start w-[100%]"
                compId="183:349"
                comWidth={245}
                comHeight={290}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-center xl:pr-[4px] lg:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] pr-[7.06px] w-[100%]"
                  compId="271"
                  comWidth={245}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <div className="bg-transparent mr-[0] w-[97%] input-wrap">
                    <Image
                      src={"images/img_vector_40.png"}
                      className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                      compId="183:347"
                      comWidth={9.94}
                      comHeight={6}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <SelectBox
                      className="bg-transparent font-medium pl-[0] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pr-[19.879999999999995px] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[100%]"
                      compId="183:348"
                      comWidth={0}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Dropdown"
                      placeholderClassName="bg-transparent text-gray_800"
                      name="title"
                      placeholder={`Filter by Price`}
                      isSearchable={false}
                      isMulti={false}
                    ></SelectBox>
                  </div>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[68%]"
                  compId="146:335"
                  comWidth={166}
                  comHeight={231}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <CheckBox
                    className="font-normal lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[65%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    compId="146:336"
                    comWidth={108}
                    comHeight={27}
                    compLeft={0}
                    compRight={58}
                    compType="CheckBox"
                    name="01"
                    label={`All Price`}
                  ></CheckBox>
                  <Row
                    className="items-center justify-start lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[86%]"
                    compId="146:340"
                    comWidth={143}
                    comHeight={27}
                    compLeft={0}
                    compRight={23}
                    compType="Row"
                  >
                    <div
                      className="bg-gray_800 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="146:341"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    ></div>
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                      compId="146:344"
                      comWidth={103}
                      comHeight={27}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`$100 - $250`}</Text>
                  </Row>
                  <CheckBox
                    className="font-normal xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[15px] mr-[17px] lg:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[90%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    compId="146:345"
                    comWidth={149}
                    comHeight={27}
                    compLeft={0}
                    compRight={17}
                    compType="CheckBox"
                    name="03"
                    label={`$250 - $500`}
                  ></CheckBox>
                  <CheckBox
                    className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[95%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    compId="146:349"
                    comWidth={157}
                    comHeight={27}
                    compLeft={0}
                    compRight={9}
                    compType="CheckBox"
                    name="04"
                    label={`$750 - $1.000`}
                  ></CheckBox>
                  <Column
                    className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] xl:pr-[2px] lg:pr-[2px] 3xl:pr-[3px] 2xl:pr-[3px] pr-[4px] w-[100%]"
                    compId="272"
                    comWidth={166}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <CheckBox
                      className="font-normal mx-[auto] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[98%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="146:353"
                      comWidth={162}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="CheckBox"
                      name="05"
                      label={`$1000 - $1.500`}
                    ></CheckBox>
                  </Column>
                </Column>
              </Column>
              <Line
                className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="146:276"
                comWidth={245}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <div className="2xl:mr-[5px] 2xl:mt-[23px] 3xl:mr-[6px] 3xl:mt-[27px] bg-transparent lg:mr-[4px] lg:mt-[18px] mr-[7.06px] mt-[31px] w-[97%] xl:mr-[4px] xl:mt-[20px] input-wrap">
                <Image
                  src={"images/img_vector_41.png"}
                  className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                  compId="183:344"
                  comWidth={9.94}
                  comHeight={6}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <SelectBox
                  className="bg-transparent font-medium pl-[0] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pr-[19.879999999999995px] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[100%]"
                  compId="183:345"
                  comWidth={0}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-gray_800"
                  name="title"
                  placeholder={`Filter by Rating`}
                  isSearchable={false}
                  isMulti={false}
                ></SelectBox>
              </div>
            </Column>
            <Row
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start lg:mr-[105px] xl:mr-[120px] 2xl:mr-[135px] 3xl:mr-[162px] mr-[181px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[26%]"
              compId="146:299"
              comWidth={64}
              comHeight={24}
              compLeft={0}
              compRight={181}
              compType="Row"
            >
              <div
                className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:303"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_star1_4.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:301"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Star1"
              />
            </Row>
            <Row
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-3 items-center justify-start 2xl:mr-[111px] 3xl:mr-[134px] mr-[149px] lg:mr-[86px] xl:mr-[99px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[39%]"
              compId="146:304"
              comWidth={96}
              comHeight={24}
              compLeft={0}
              compRight={149}
              compType="Row"
            >
              <div
                className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:309"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_star1_5.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:306"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Star1"
              />
              <Image
                src={"images/img_star2_3.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:307"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Star2"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] mr-[85px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[65%]"
              compId="266"
              comWidth={160}
              comHeight={64}
              compLeft={0}
              compRight={85}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-4 items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]"
                compId="146:310"
                comWidth={128}
                comHeight={24}
                compLeft={0}
                compRight={32}
                compType="Row"
              >
                <div
                  className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:316"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Image
                  src={"images/img_star1_6.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:312"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star1"
                />
                <Image
                  src={"images/img_star2_4.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:313"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star2"
                />
                <Image
                  src={"images/img_star3_2.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:314"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star3"
                />
              </Row>
              <Row
                className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-5 items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                compId="146:317"
                comWidth={160}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-gray_800 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:323"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                ></div>
                <Image
                  src={"images/img_star1_7.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:319"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star1"
                />
                <Image
                  src={"images/img_star2_5.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:320"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star2"
                />
                <Image
                  src={"images/img_star3_3.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:321"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star3"
                />
                <Image
                  src={"images/img_star5_1.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="146:322"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star5"
                />
              </Row>
            </List>
            <Row
              className="items-center justify-start lg:mr-[30px] xl:mr-[35px] 2xl:mr-[39px] 3xl:mr-[47px] mr-[53px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[78%]"
              compId="146:326"
              comWidth={192}
              comHeight={24}
              compLeft={0}
              compRight={53}
              compType="Row"
            >
              <div
                className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="146:334"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <RatingBar
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px]"
                compId="267"
                comWidth={152}
                comHeight={24}
                compLeft={16}
                compRight={0}
                compType="RatingBar"
                value={5}
                starCount={5}
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Row>
            <Column
              className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="270"
              comWidth={245}
              comHeight={119}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-bluegray_100 h-[1px] w-[100%]"
                compId="183:333"
                comWidth={245}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <div className="2xl:mr-[5px] 2xl:mt-[24px] 3xl:mr-[6px] 3xl:mt-[28px] bg-transparent lg:mr-[4px] lg:mt-[18px] mr-[7.06px] mt-[32px] w-[97%] xl:mr-[4px] xl:mt-[21px] input-wrap">
                <Image
                  src={"images/img_vector_42.png"}
                  className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                  compId="183:338"
                  comWidth={9.94}
                  comHeight={6}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <SelectBox
                  className="bg-transparent font-medium pl-[0] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pr-[19.879999999999995px] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[100%]"
                  compId="183:339"
                  comWidth={0}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-gray_800"
                  name="title"
                  placeholder={`Filter by Brand`}
                  isSearchable={false}
                  isMulti={false}
                ></SelectBox>
              </div>
              <div className="2xl:mr-[5px] 2xl:mt-[24px] 3xl:mr-[6px] 3xl:mt-[28px] bg-transparent lg:mr-[4px] lg:mt-[18px] mr-[7.06px] mt-[32px] w-[97%] xl:mr-[4px] xl:mt-[21px] input-wrap">
                <Image
                  src={"images/img_vector_43.png"}
                  className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                  compId="183:341"
                  comWidth={9.94}
                  comHeight={6}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <SelectBox
                  className="bg-transparent font-medium pl-[0] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pr-[19.879999999999995px] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[100%]"
                  compId="183:342"
                  comWidth={0}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-gray_800"
                  name="title"
                  placeholder={`Filter by Size`}
                  isSearchable={false}
                  isMulti={false}
                ></SelectBox>
              </div>
            </Column>
          </Column>
          <Grid
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[83%]"
            compId="265"
            comWidth={1355}
            comHeight={1080}
            compLeft={32}
            compRight={0}
            compType="Grid"
          >
            <Row
              className="bg-gray_50 items-center justify-center lg:pb-[38px] xl:pb-[43px] 2xl:pb-[49px] 3xl:pb-[59px] pb-[65.67px] lg:pl-[103px] xl:pl-[118px] 2xl:pl-[132px] 3xl:pl-[159px] pl-[177px] xl:pr-[101px] 2xl:pr-[114px] 3xl:pr-[136px] pr-[152px] lg:pr-[88px] lg:pt-[39px] xl:pt-[44px] 2xl:pt-[50px] 3xl:pt-[60px] pt-[67px] w-[100%]"
              compId="183:274"
              comWidth={662}
              comHeight={246}
              compLeft={0}
              compRight={693}
              compType="Row"
            >
              <Image
                src={"images/img_vector_44.png"}
                className="3xl:h-[103px] h-[113.33px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] mb-[0] object-contain 3xl:w-[102px] w-[113.33px] lg:w-[66px] xl:w-[75px] 2xl:w-[85px]"
                compId="183:216"
                comWidth={113.33}
                comHeight={113.33}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Column
                className="items-start lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3.33px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] ml-[38.67px] mt-[1px] w-[27%]"
                compId="183:273"
                comWidth={181}
                comHeight={108}
                compLeft={38.67}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[31px] xl:mr-[36px] 2xl:mr-[40px] 3xl:mr-[48px] mr-[54px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                  compId="183:217"
                  comWidth={127}
                  comHeight={54}
                  compLeft={0}
                  compRight={54}
                  compType="Text"
                >{`Jacket`}</Text>
                <Column
                  className="w-[100%]"
                  compId="273"
                  comWidth={181}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:272"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-gray_50 items-center justify-center lg:pl-[103px] xl:pl-[118px] 2xl:pl-[132px] 3xl:pl-[159px] pl-[177px] xl:pr-[101px] 2xl:pr-[114px] 3xl:pr-[136px] pr-[152px] lg:pr-[88px] lg:py-[40px] xl:py-[46px] 2xl:py-[51px] 3xl:py-[62px] py-[69px] w-[100%]"
              compId="183:279"
              comWidth={661}
              comHeight={246}
              compLeft={694}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_45.png"}
                className="h-[100px] lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain w-[17%]"
                compId="183:222"
                comWidth={110.57}
                comHeight={100}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Column
                className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.43px] w-[27%]"
                compId="183:277"
                comWidth={181}
                comHeight={108}
                compLeft={40.43}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                  compId="183:223"
                  comWidth={88}
                  comHeight={54}
                  compLeft={0}
                  compRight={93}
                  compType="Text"
                >{`Shirt`}</Text>
                <Column
                  className="w-[100%]"
                  compId="274"
                  comWidth={181}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:278"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-gray_50 items-center justify-center lg:pl-[113px] xl:pl-[130px] 2xl:pl-[146px] 3xl:pl-[175px] pl-[195.33px] xl:pr-[100px] 2xl:pr-[113px] 3xl:pr-[135px] pr-[151px] lg:pr-[88px] lg:py-[38px] xl:py-[44px] 2xl:py-[49px] 3xl:py-[59px] py-[66.33px] w-[100%]"
              compId="183:281"
              comWidth={660}
              comHeight={246}
              compLeft={0}
              compRight={695}
              compType="Row"
            >
              <Image
                src={"images/img_vector_46.png"}
                className="3xl:h-[103px] h-[113.34px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] my-[0] object-contain w-[11%]"
                compId="183:228"
                comWidth={72.93}
                comHeight={113.34}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Column
                className="items-start lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59.74px] xl:my-[1px] lg:my-[1px] my-[2.67px] 3xl:my-[2px] 2xl:my-[2px] w-[27%]"
                compId="183:283"
                comWidth={181}
                comHeight={108}
                compLeft={59.74}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                  compId="183:229"
                  comWidth={106}
                  comHeight={54}
                  compLeft={0}
                  compRight={75}
                  compType="Text"
                >{`Pants`}</Text>
                <Column
                  className="w-[100%]"
                  compId="275"
                  comWidth={181}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:282"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-gray_50 items-center justify-center lg:pb-[36px] xl:pb-[42px] 2xl:pb-[47px] 3xl:pb-[56px] pb-[63px] lg:pl-[110px] xl:pl-[125px] 2xl:pl-[141px] 3xl:pl-[169px] pl-[188.58px] xl:pr-[101px] 2xl:pr-[114px] 3xl:pr-[136px] pr-[152px] lg:pr-[88px] lg:pt-[40px] xl:pt-[46px] 2xl:pt-[51px] 3xl:pt-[62px] pt-[69px] w-[100%]"
              compId="183:287"
              comWidth={661}
              comHeight={246}
              compLeft={694}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector_47.png"}
                className="3xl:h-[103px] h-[113.33px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] mt-[1px] object-contain w-[14%]"
                compId="183:294"
                comWidth={93.51}
                comHeight={113.33}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Column
                className="items-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[45.91px] w-[27%]"
                compId="183:290"
                comWidth={181}
                comHeight={108}
                compLeft={45.91}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[55px] xl:mr-[63px] 2xl:mr-[71px] 3xl:mr-[85px] mr-[95px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                  compId="183:291"
                  comWidth={86}
                  comHeight={54}
                  compLeft={0}
                  compRight={95}
                  compType="Text"
                >{`Skirt`}</Text>
                <Column
                  className="w-[100%]"
                  compId="276"
                  comWidth={181}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:292"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Column>
            </Row>
            <Column
              className="bg-gray_50 items-center justify-start xl:pl-[101px] 2xl:pl-[114px] 3xl:pl-[136px] pl-[152px] xl:pr-[100px] 2xl:pr-[113px] 3xl:pr-[135px] pr-[151px] lg:px-[88px] lg:py-[25px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] py-[43px] w-[100%]"
              compId="183:236"
              comWidth={660}
              comHeight={246}
              compLeft={0}
              compRight={695}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-center mx-[auto] pb-[23.34px] lg:pl-[23px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[40px] pt-[23.33px] lg:py-[13px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[21px] w-[54%]"
                compId="183:297"
                comWidth={357}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_48.png"}
                  className="3xl:h-[103px] h-[113.33px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] my-[0] object-contain w-[22%]"
                  compId="183:304"
                  comWidth={80}
                  comHeight={113.33}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Column
                  className="items-start 2xl:mb-[1px] mb-[2.66px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] mt-[2.67px] 2xl:mt-[2px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] w-[51%]"
                  compId="183:300"
                  comWidth={181}
                  comHeight={108}
                  compLeft={56}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[44px] xl:mr-[51px] 2xl:mr-[57px] 3xl:mr-[69px] mr-[77px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                    compId="183:301"
                    comWidth={104}
                    comHeight={54}
                    compLeft={0}
                    compRight={77}
                    compType="Text"
                  >{`Dress`}</Text>
                  <Column
                    className="w-[100%]"
                    compId="277"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                      compId="183:302"
                      comWidth={181}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Collection`}</Text>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column
              className="bg-gray_50 items-center justify-start 2xl:pl-[105px] 3xl:pl-[126px] pl-[140px] xl:pl-[93px] 2xl:pr-[104px] 3xl:pr-[125px] pr-[139px] xl:pr-[92px] lg:px-[81px] lg:py-[25px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] py-[43px] w-[100%]"
              compId="183:305"
              comWidth={660}
              comHeight={246}
              compLeft={694}
              compRight={1}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-start justify-center mx-[auto] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] pb-[20.07px] lg:pl-[15px] xl:pl-[17px] 2xl:pl-[20px] 3xl:pl-[24px] pl-[26.69px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[19px] 3xl:pt-[23px] pt-[26px] w-[58%]"
                compId="183:307"
                comWidth={381}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_49.png"}
                  className="3xl:h-[103px] h-[113.27px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] mb-[0] mt-[1px] object-contain 3xl:w-[102px] w-[113.27px] lg:w-[66px] xl:w-[75px] 2xl:w-[85px]"
                  compId="189:25"
                  comWidth={113.27}
                  comHeight={113.27}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Column
                  className="items-start justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5.93px] 3xl:mb-[5px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36.04px] w-[54%]"
                  compId="183:310"
                  comWidth={205}
                  comHeight={108}
                  compLeft={36.04}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="278"
                    comWidth={205}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                      compId="183:311"
                      comWidth={205}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Underwear`}</Text>
                  </Column>
                  <Text
                    className="font-normal lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:312"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={24}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Row>
            </Column>
            <Column
              className="bg-gray_50 items-center justify-start xl:pl-[101px] 2xl:pl-[114px] 3xl:pl-[136px] pl-[152px] xl:pr-[100px] 2xl:pr-[113px] 3xl:pr-[135px] pr-[151px] lg:px-[88px] lg:py-[25px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] py-[43px] w-[100%]"
              compId="183:313"
              comWidth={660}
              comHeight={246}
              compLeft={0}
              compRight={695}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-center mx-[auto] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[21px] pl-[23.33px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] py-[26px] w-[54%]"
                compId="183:315"
                comWidth={357}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_50.png"}
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80.2px] mb-[13.8px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[32%]"
                  compId="183:330"
                  comWidth={113.34}
                  comHeight={80.2}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Column
                  className="items-start lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39.33px] w-[51%]"
                  compId="183:318"
                  comWidth={181}
                  comHeight={108}
                  compLeft={39.33}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mr-[40px] xl:mr-[46px] 2xl:mr-[51px] 3xl:mr-[62px] mr-[69px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                    compId="183:319"
                    comWidth={112}
                    comHeight={54}
                    compLeft={0}
                    compRight={69}
                    compType="Text"
                  >{`Shoes`}</Text>
                  <Column
                    className="w-[100%]"
                    compId="279"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                      compId="183:320"
                      comWidth={181}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Collection`}</Text>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column
              className="bg-gray_50 items-center justify-start 2xl:px-[105px] 3xl:px-[126px] px-[140px] lg:px-[81px] xl:px-[93px] lg:py-[25px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] py-[43px] w-[100%]"
              compId="183:321"
              comWidth={660}
              comHeight={246}
              compLeft={694}
              compRight={1}
              compType="Column"
            >
              <Row
                className="bg-gray_50 items-center justify-center mx-[auto] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[21px] pl-[23.33px] lg:py-[15px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] py-[26px] w-[58%]"
                compId="183:323"
                comWidth={380}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_51.png"}
                  className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[93.33px] mb-[7.34px] mt-[7.33px] xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] object-contain w-[30%]"
                  compId="183:332"
                  comWidth={113.33}
                  comHeight={93.33}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Column
                  className="items-start lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39.34px] w-[54%]"
                  compId="183:326"
                  comWidth={204}
                  comHeight={108}
                  compLeft={39.34}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="280"
                    comWidth={204}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mx-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
                      compId="183:327"
                      comWidth={204}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Accesories`}</Text>
                  </Column>
                  <Text
                    className="font-normal lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 text-left w-[auto]"
                    compId="183:328"
                    comWidth={181}
                    comHeight={54}
                    compLeft={0}
                    compRight={23}
                    compType="Text"
                  >{`Collection`}</Text>
                </Column>
              </Row>
            </Column>
          </Grid>
        </Row>
        <footer
          className="bg-gray_800 lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] mt-[85px] w-[100%]"
          compId="199:372"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="68"
            comWidth={1632}
            comHeight={397}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="273:5"
              comWidth={1632}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] pr-[32px] w-[25%]"
                compId="199:391"
                comWidth={416}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mr-[159px] xl:mr-[182px] 2xl:mr-[204px] 3xl:mr-[245px] mr-[273px] w-[27%]"
                  compId="199:392"
                  comWidth={111}
                  comHeight={35}
                  compLeft={0}
                  compRight={273}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_7.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="199:394"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:393"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                  compId="199:398"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[135px] xl:mr-[155px] 2xl:mr-[174px] 3xl:mr-[209px] mr-[233px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[36%]"
                  compId="199:400"
                  comWidth={149.02}
                  comHeight={32}
                  compLeft={1.98}
                  compRight={233}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_52.png"}
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                    compId="199:402"
                    comWidth={19.93}
                    comHeight={19.87}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:403"
                    comWidth={119}
                    comHeight={32}
                    compLeft={10.09}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[102px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[175px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                  compId="199:404"
                  comWidth={207}
                  comHeight={32}
                  compLeft={2}
                  compRight={175}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_53.png"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                    compId="199:406"
                    comWidth={20}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:407"
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
                compId="199:384"
                comWidth={165}
                comHeight={224}
                compLeft={278}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="281"
                  comWidth={165}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:385"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product Links`}</Text>
                </Column>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:387"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:388"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={66}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="font-normal lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:389"
                  comWidth={78}
                  comHeight={27}
                  compLeft={0}
                  compRight={87}
                  compType="Text"
                >{`Features`}</Text>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:390"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Collections`}</Text>
              </Column>
              <Column
                className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[9%]"
                compId="199:375"
                comWidth={147}
                comHeight={280}
                compLeft={112}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:376"
                  comWidth={123}
                  comHeight={35}
                  compLeft={0}
                  compRight={24}
                  compType="Text"
                >{`Company`}</Text>
                <Text
                  className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:378"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={93}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:379"
                  comWidth={39}
                  comHeight={27}
                  compLeft={0}
                  compRight={108}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:380"
                  comWidth={72}
                  comHeight={27}
                  compLeft={0}
                  compRight={75}
                  compType="Text"
                >{`Careers`}</Text>
                <Text
                  className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:381"
                  comWidth={75}
                  comHeight={27}
                  compLeft={0}
                  compRight={72}
                  compType="Text"
                >{`Services`}</Text>
                <Text
                  className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:382"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={27}
                  compType="Text"
                >{`Privacy Policy`}</Text>
                <Column
                  className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                  compId="282"
                  comWidth={147}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:383"
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
                compId="199:408"
                comWidth={384}
                comHeight={209}
                compLeft={130}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:416"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={146}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="283"
                  comWidth={384}
                  comHeight={149}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="199:417"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Row
                    className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                    compId="199:409"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                      compId="199:411"
                      comWidth={149.77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email`}</Text>
                    <Image
                      src={"images/img_submit_3.png"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="199:412"
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
              compId="199:374"
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

export default CategorieswithSidebarPage;
