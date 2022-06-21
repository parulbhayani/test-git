import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Input,
  Button,
  Line,
  CheckBox,
  List,
  RatingBar,
  SelectBox,
  Grid,
} from "components";

const ProductListPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="141:561"
        comWidth={1920}
        comHeight={2637}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="16"
          comWidth={1920}
          comHeight={96}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-white_A700 items-center justify-start 2xl:px-[108px] 3xl:px-[129px] px-[144px] lg:px-[84px] xl:px-[96px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] w-[100%]"
            compId="195:614"
            comWidth={1920}
            comHeight={96}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_group19_4.png"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[2%]"
              compId="195:628"
              comWidth={39}
              comHeight={24}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Group19"
            />
            <Text
              className="cursor-pointer hover:font-bold font-bold lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
              compId="195:627"
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
                    ? "images/close1.svg"
                    : "images/img_button_1.png"
                }
                className="absolute z-[1] cursor-pointer h-[48px] right-[0] lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] my-[auto] inset-y-[0]"
                compId="195:618"
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
                compId="195:615"
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
              src={"images/img_icon_3.png"}
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain w-[4%]"
              compId="195:631"
              comWidth={80}
              comHeight={24}
              compLeft={304}
              compRight={0}
              compType="Image"
              alt="icon"
            />
            <Button
              className="bg-gray_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:py-[10px] 3xl:py-[12px] py-[13.5px] lg:py-[7px] xl:py-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center text-white_A700 w-[6%]"
              compId="195:624"
              comWidth={107}
              comHeight={48}
              compLeft={32}
              compRight={0}
              compType="Button"
            >{`Login`}</Button>
          </Row>
        </header>
        <Column
          className="items-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] 2xl:pl-[108px] 3xl:pl-[129px] pl-[144px] lg:pl-[84px] xl:pl-[96px] xl:pr-[1050px] 2xl:pr-[1181px] 3xl:pr-[1417px] pr-[1574px] lg:pr-[918px] w-[100%]"
          compId="245"
          comWidth={1920}
          comHeight={27}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start w-[11%]"
            compId="143:1036"
            comWidth={202}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
              compId="143:1037"
              comWidth={53}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 text-left w-[auto]"
              compId="143:1039"
              comWidth={11}
              comHeight={27}
              compLeft={17}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
              compId="143:1038"
              comWidth={105}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Product List`}</Text>
          </Row>
        </Column>
        <Text
          className="font-bold lg:ml-[500px] xl:ml-[572px] 2xl:ml-[643px] 3xl:ml-[772px] ml-[858px] lg:mr-[493px] xl:mr-[564px] 2xl:mr-[634px] 3xl:mr-[761px] mr-[846px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 text-left w-[auto]"
          compId="143:1100"
          comWidth={216}
          comHeight={54}
          compLeft={858}
          compRight={846}
          compType="Text"
        >{`Product List`}</Text>
        <Row
          className="items-start justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] mx-[auto] w-[85%]"
          compId="273:7"
          comWidth={1632}
          comHeight={1734}
          compLeft={144}
          compRight={144}
          compType="Row"
        >
          <Column
            className="items-start justify-start lg:mb-[328px] xl:mb-[375px] 2xl:mb-[422px] 3xl:mb-[506px] mb-[563px] w-[15%]"
            compId="195:380"
            comWidth={245}
            comHeight={1171}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="246"
              comWidth={245}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Input
                className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_100 font-medium lg:pb-[19px] xl:pb-[22px] 2xl:pb-[24px] 3xl:pb-[29px] pb-[33px] pl-[0] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] pt-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                compId="18"
                comWidth={245}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group18"
                placeholder={`Categories`}
              ></Input>
            </Column>
            <Row
              className="items-center justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] ml-[4.8px] 3xl:ml-[4px] 2xl:mr-[102px] 3xl:mr-[123px] mr-[137px] lg:mr-[79px] xl:mr-[91px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33.5px] w-[42%]"
              compId="141:959"
              comWidth={103.2}
              comHeight={27}
              compLeft={4.8}
              compRight={137}
              compType="Row"
            >
              <Image
                src={"images/img_vector_27.png"}
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.67px] mb-[1px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2.3px] 3xl:mt-[2px] object-contain lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px] w-[22.67px]"
                compId="141:961"
                comWidth={22.67}
                comHeight={22.67}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20.53px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:962"
                comWidth={60}
                comHeight={27}
                compLeft={20.53}
                compRight={0}
                compType="Text"
              >{`Jacket`}</Text>
            </Row>
            <Row
              className="items-center justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] xl:mr-[104px] 2xl:mr-[117px] 3xl:mr-[141px] mr-[157px] lg:mr-[91px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[34%]"
              compId="141:965"
              comWidth={83}
              comHeight={27}
              compLeft={5}
              compRight={157}
              compType="Row"
            >
              <Image
                src={"images/img_vector_28.png"}
                className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20px] 2xl:my-[2px] xl:my-[2px] lg:my-[2px] my-[3.5px] 3xl:my-[3px] object-contain w-[27%]"
                compId="141:967"
                comWidth={22.11}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20.89px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="141:968"
                comWidth={40}
                comHeight={27}
                compLeft={20.89}
                compRight={0}
                compType="Text"
              >{`Shirt`}</Text>
            </Row>
            <Row
              className="items-center justify-start xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8.67px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[36%]"
              compId="141:971"
              comWidth={89.33}
              comHeight={27}
              compLeft={8.67}
              compRight={147}
              compType="Row"
            >
              <Image
                src={"images/img_vector_29.png"}
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.67px] my-[1px] object-contain w-[16%]"
                compId="141:973"
                comWidth={14.59}
                comHeight={22.67}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[24.74px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:974"
                comWidth={50}
                comHeight={27}
                compLeft={24.74}
                compRight={0}
                compType="Text"
              >{`Pants`}</Text>
            </Row>
            <Row
              className="items-center justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] ml-[4.67px] 3xl:ml-[4px] 2xl:mr-[106px] 3xl:mr-[127px] mr-[142px] lg:mr-[82px] xl:mr-[94px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[40%]"
              compId="141:977"
              comWidth={98.33}
              comHeight={27}
              compLeft={4.67}
              compRight={142}
              compType="Row"
            >
              <Image
                src={"images/img_vector_30.png"}
                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16.04px] mb-[5.46px] mt-[5.5px] xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] object-contain w-[23%]"
                compId="141:979"
                comWidth={22.67}
                comHeight={16.04}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20.66px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:980"
                comWidth={55}
                comHeight={27}
                compLeft={20.66}
                compRight={0}
                compType="Text"
              >{`Shoes`}</Text>
            </Row>
            <Row
              className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] 2xl:mr-[110px] 3xl:mr-[132px] mr-[147px] lg:mr-[85px] xl:mr-[98px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[37%]"
              compId="141:983"
              comWidth={90}
              comHeight={27}
              compLeft={8}
              compRight={147}
              compType="Row"
            >
              <Image
                src={"images/img_vector_31.png"}
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.67px] my-[1px] object-contain w-[18%]"
                compId="141:985"
                comWidth={16}
                comHeight={22.67}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:986"
                comWidth={50}
                comHeight={27}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Dress`}</Text>
            </Row>
            <Row
              className="items-center justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] ml-[4.67px] 3xl:ml-[4px] lg:mr-[57px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[58%]"
              compId="141:989"
              comWidth={141.33}
              comHeight={27}
              compLeft={4.67}
              compRight={99}
              compType="Row"
            >
              <Image
                src={"images/img_vector_32.png"}
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] h-[18.67px] mb-[4.16px] mt-[4.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain w-[16%]"
                compId="141:991"
                comWidth={22.67}
                comHeight={18.67}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20.66px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:992"
                comWidth={98}
                comHeight={27}
                compLeft={20.66}
                compRight={0}
                compType="Text"
              >{`Accesories`}</Text>
            </Row>
            <Row
              className="items-start justify-start xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7.32px] xl:mr-[106px] 2xl:mr-[119px] 3xl:mr-[143px] mr-[159px] lg:mr-[92px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[32%]"
              compId="141:995"
              comWidth={78.68}
              comHeight={27}
              compLeft={7.32}
              compRight={159}
              compType="Row"
            >
              <Image
                src={"images/img_vector_33.png"}
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.67px] mb-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2.83px] 3xl:mt-[2px] 2xl:mt-[2px] object-contain w-[24%]"
                compId="141:997"
                comWidth={18.7}
                comHeight={22.67}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[21.98px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="141:998"
                comWidth={38}
                comHeight={27}
                compLeft={21.98}
                compRight={0}
                compType="Text"
              >{`Skirt`}</Text>
            </Row>
            <Row
              className="items-center justify-start xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] mr-[110px] lg:mr-[64px] xl:mr-[73px] 2xl:mr-[82px] 3xl:mr-[99px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26.5px] w-[52%]"
              compId="143:1045"
              comWidth={128}
              comHeight={27}
              compLeft={7}
              compRight={110}
              compType="Row"
            >
              <Image
                src={"images/img_vector_34.png"}
                className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] object-contain w-[8%]"
                compId="143:1050"
                comWidth={9.94}
                comHeight={6}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23.06px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="143:1048"
                comWidth={95}
                comHeight={27}
                compLeft={23.06}
                compRight={0}
                compType="Text"
              >{`View more`}</Text>
            </Row>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="247"
              comWidth={245}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-bluegray_100 h-[1px] w-[100%]"
                compId="143:1044"
                comWidth={245}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
            </Column>
            <Column
              className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[68%]"
              compId="195:378"
              comWidth={166}
              comHeight={290}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] mr-[47px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="143:1074"
                comWidth={119}
                comHeight={27}
                compLeft={0}
                compRight={47}
                compType="Text"
              >{`Filter by Price`}</Text>
              <Column
                className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="249"
                comWidth={166}
                comHeight={231}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="146:18"
                  comWidth={166}
                  comHeight={231}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <CheckBox
                    className="font-normal lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[65%]"
                    inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                    compId="146:12"
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
                    compId="146:14"
                    comWidth={143}
                    comHeight={27}
                    compLeft={0}
                    compRight={23}
                    compType="Row"
                  >
                    <div
                      className="bg-gray_800 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="145:1188"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="IconButton"
                    ></div>
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                      compId="146:2"
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
                    compId="146:15"
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
                    compId="146:16"
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
                    compId="250"
                    comWidth={166}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <CheckBox
                      className="font-normal mx-[auto] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[98%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="146:17"
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
            </Column>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="248"
              comWidth={245}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-bluegray_100 h-[1px] w-[100%]"
                compId="143:1099"
                comWidth={245}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
            </Column>
            <Column
              className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[78%]"
              compId="195:379"
              comWidth={192}
              comHeight={243}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium lg:mr-[34px] xl:mr-[39px] 2xl:mr-[44px] 3xl:mr-[53px] mr-[59px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 text-left w-[auto]"
                compId="143:1075"
                comWidth={133}
                comHeight={27}
                compLeft={0}
                compRight={59}
                compType="Text"
              >{`Filter by Rating`}</Text>
              <Column
                className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="251"
                comWidth={192}
                comHeight={184}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="146:24"
                  comWidth={192}
                  comHeight={184}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start 3xl:mr-[115px] mr-[128px] lg:mr-[74px] xl:mr-[85px] 2xl:mr-[96px] w-[33%]"
                    compId="146:19"
                    comWidth={64}
                    comHeight={24}
                    compLeft={0}
                    compRight={128}
                    compType="Row"
                  >
                    <div
                      className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="145:1176"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Image
                      src={"images/img_star1.png"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="145:1146"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                  </Row>
                  <Row
                    className="items-center justify-start lg:mr-[56px] xl:mr-[64px] 2xl:mr-[72px] 3xl:mr-[86px] mr-[96px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                    compId="146:20"
                    comWidth={96}
                    comHeight={24}
                    compLeft={0}
                    compRight={96}
                    compType="Row"
                  >
                    <div
                      className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="145:1181"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[58%]"
                      compId="145:1151"
                      comWidth={56}
                      comHeight={24}
                      compLeft={16}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1_1.png"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="145:1152"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Image
                        src={"images/img_star2.png"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="145:1153"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star2"
                      />
                    </Row>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                    compId="241"
                    comWidth={160}
                    comHeight={64}
                    compLeft={0}
                    compRight={32}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]"
                      compId="146:21"
                      comWidth={128}
                      comHeight={24}
                      compLeft={0}
                      compRight={32}
                      compType="Row"
                    >
                      <div
                        className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="145:1183"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Row
                        className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[69%]"
                        compId="145:1157"
                        comWidth={88}
                        comHeight={24}
                        compLeft={16}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_star1_2.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1158"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star1"
                        />
                        <Image
                          src={"images/img_star2_1.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1159"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star2"
                        />
                        <Image
                          src={"images/img_star3.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1160"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star3"
                        />
                      </Row>
                    </Row>
                    <Row
                      className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                      compId="146:22"
                      comWidth={160}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_800 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="145:1177"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="IconButton"
                      ></div>
                      <Row
                        className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[75%]"
                        compId="145:1163"
                        comWidth={120}
                        comHeight={24}
                        compLeft={16}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_star1_3.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1164"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star1"
                        />
                        <Image
                          src={"images/img_star2_2.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1165"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star2"
                        />
                        <Image
                          src={"images/img_star3_1.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1166"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star3"
                        />
                        <Image
                          src={"images/img_star5.png"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="145:1167"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star5"
                        />
                      </Row>
                    </Row>
                  </List>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="252"
                    comWidth={192}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="146:23"
                      comWidth={192}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="145:1185"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <RatingBar
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px]"
                        compId="243"
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
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column
            className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[83%]"
            compId="273:6"
            comWidth={1355}
            comHeight={1734}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between xl:pr-[4px] lg:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] pr-[7.06px] w-[100%]"
              compId="195:376"
              comWidth={1355}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                compId="143:1043"
                comWidth={231}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-gray_500 font-poppins">
                  <>{`Viewing `}</>
                </span>
                <span className="text-gray_800 font-poppins">
                  <>{`20`}</>
                </span>
                <span className="text-gray_500 font-poppins">
                  <>{` of `}</>
                </span>
                <span className="text-gray_800 font-poppins">
                  <>{`160`}</>
                </span>
                <span className="text-gray_500 font-poppins">
                  <>{` product`}</>
                </span>
              </Text>
              <div className="2xl:ml-[669px] 3xl:ml-[803px] bg-transparent lg:ml-[520px] ml-[892px] w-[17%] xl:ml-[595px] input-wrap">
                <Image
                  src={"images/img_vector_35.png"}
                  className="absolute z-[1] right-[0] bg-transparent my-[auto] inset-y-[0]"
                  compId="143:1102"
                  comWidth={9.94}
                  comHeight={6}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <SelectBox
                  className="bg-transparent font-normal pl-[0] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pr-[19.880000000000052px] py-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                  compId="146:30"
                  comWidth={0}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-gray_500"
                  name="sort"
                  placeholder={`Sort by: Newest Items`}
                  isSearchable={false}
                  isMulti={false}
                ></SelectBox>
              </div>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="242"
              comWidth={1353}
              comHeight={768}
              compLeft={0}
              compRight={2}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="192:205"
                comWidth={1353}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="192:222"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_47.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="192:227"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                    compId="192:224"
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
                    compId="192:225"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="192:214"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_48.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="192:219"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                    compId="192:216"
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
                    compId="192:217"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="192:206"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_49.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="192:211"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                    compId="192:208"
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
                    compId="192:209"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="192:230"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_50.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="192:232"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[58%]"
                    compId="192:236"
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
                    compId="192:237"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100}
                    compRight={100}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compId="192:238"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_51.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="192:243"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                    compId="192:240"
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
                    compId="192:241"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
              <Row
                className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="189:141"
                comWidth={1353}
                comHeight={368}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-center justify-start w-[18%]"
                  compId="189:158"
                  comWidth={245}
                  comHeight={368}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_52.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="189:163"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[45%]"
                    compId="189:160"
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
                    compId="189:161"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100}
                    compRight={100}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]"
                  compId="189:150"
                  comWidth={245}
                  comHeight={332}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_53.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="189:155"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[auto]"
                    compId="189:152"
                    comWidth={145}
                    comHeight={36}
                    compLeft={50}
                    compRight={50}
                    compType="Text"
                  >{`Gray T-shirt`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="189:153"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100}
                    compRight={100}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]"
                  compId="189:166"
                  comWidth={245}
                  comHeight={332}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_54.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="189:168"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium xl:ml-[35px] 3xl:ml-[47px] ml-[53px] xl:mr-[34px] 3xl:mr-[46px] mr-[52px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[30px] 2xl:mx-[39px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 text-left w-[auto]"
                    compId="189:172"
                    comWidth={140}
                    comHeight={36}
                    compLeft={53}
                    compRight={52}
                    compType="Text"
                  >{`Red Flannel`}</Text>
                  <Text
                    className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="189:173"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]"
                  compId="193:2"
                  comWidth={245}
                  comHeight={368}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_55.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="193:7"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium leading-[normal] lg:ml-[32px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:mr-[31px] 2xl:mr-[40px] 3xl:mr-[48px] mr-[54px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[56%]"
                    compId="193:4"
                    comWidth={136}
                    comHeight={72}
                    compLeft={55}
                    compRight={54}
                    compType="Text"
                  >
                    {
                      <>
                        {`Casual `}
                        <br />
                        {`Grey Shoes`}
                      </>
                    }
                  </Text>
                  <Text
                    className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="193:5"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100.5}
                    compRight={99.5}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
                <Column
                  className="items-center justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[18%]"
                  compId="193:102"
                  comWidth={245}
                  comHeight={332}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_56.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="193:107"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Text
                    className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[auto]"
                    compId="193:104"
                    comWidth={137}
                    comHeight={36}
                    compLeft={54}
                    compRight={54}
                    compType="Text"
                  >{`Pink Jacket`}</Text>
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="193:105"
                    comWidth={45}
                    comHeight={27}
                    compLeft={100}
                    compRight={100}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Row>
            </List>
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="240"
              comWidth={1353}
              comHeight={768}
              compLeft={0}
              compRight={2}
              compType="Grid"
            >
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:113"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={1108}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_57.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:118"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[66%]"
                  compId="193:115"
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
                  compId="193:116"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:121"
                comWidth={245}
                comHeight={368}
                compLeft={277}
                compRight={831}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_58.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:126"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[50%]"
                  compId="193:123"
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
                  compId="193:124"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:129"
                comWidth={245}
                comHeight={368}
                compLeft={554}
                compRight={554}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_59.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:134"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[76%]"
                  compId="193:131"
                  comWidth={187}
                  comHeight={70}
                  compLeft={29}
                  compRight={29}
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
                  className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:132"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:137"
                comWidth={245}
                comHeight={368}
                compLeft={831}
                compRight={277}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_60.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:139"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[58%]"
                  compId="193:143"
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
                <Text
                  className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:144"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:145"
                comWidth={245}
                comHeight={368}
                compLeft={1108}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_61.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:150"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[71%]"
                  compId="193:147"
                  comWidth={173}
                  comHeight={72}
                  compLeft={36}
                  compRight={36}
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
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:148"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100}
                  compRight={100}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:154"
                comWidth={245}
                comHeight={368}
                compLeft={0}
                compRight={1108}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_62.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:159"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mr-[23px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[81%]"
                  compId="193:156"
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
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:157"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="w-[100%]"
                compId="193:162"
                comWidth={245}
                comHeight={368}
                compLeft={277}
                compRight={831}
                compType="Column"
              >
                <Column
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] w-[100%]"
                  compId="253"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_placeholder_63.png"}
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    compId="193:167"
                    comWidth={245}
                    comHeight={245}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                </Column>
                <Column
                  className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:pl-[29px] xl:pl-[33px] 2xl:pl-[37px] 3xl:pl-[45px] pl-[50px] lg:pr-[22px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] pr-[38px] w-[100%]"
                  compId="254"
                  comWidth={245}
                  comHeight={107}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[64%]"
                    compId="193:164"
                    comWidth={157}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
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
                  <Text
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[32px] xl:mx-[37px] 2xl:mx-[42px] 3xl:mx-[50px] mx-[56px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="193:165"
                    comWidth={45}
                    comHeight={27}
                    compLeft={56}
                    compRight={56}
                    compType="Text"
                  >{`$299`}</Text>
                </Column>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:170"
                comWidth={245}
                comHeight={368}
                compLeft={554}
                compRight={554}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_64.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:172"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[23px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mr-[22px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:mx-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[68%]"
                  compId="193:176"
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
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:177"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:178"
                comWidth={245}
                comHeight={368}
                compLeft={831}
                compRight={277}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_65.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:183"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] ml-[59px] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[52%]"
                  compId="193:180"
                  comWidth={128}
                  comHeight={72}
                  compLeft={59}
                  compRight={58}
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
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:181"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
              <Column
                className="items-center justify-start w-[100%]"
                compId="193:186"
                comWidth={245}
                comHeight={368}
                compLeft={1108}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_placeholder_66.png"}
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] mx-[auto] object-cover lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  compId="193:191"
                  comWidth={245}
                  comHeight={245}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Text
                  className="font-medium leading-[normal] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[62%]"
                  compId="193:188"
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
                <Text
                  className="font-medium ml-[100.5px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mr-[66px] 2xl:mr-[74px] 3xl:mr-[89px] mr-[99.5px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[58px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="193:189"
                  comWidth={45}
                  comHeight={27}
                  compLeft={100.5}
                  compRight={99.5}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Grid>
            <Row
              className="items-center justify-center lg:ml-[314px] xl:ml-[359px] 2xl:ml-[404px] 3xl:ml-[485px] ml-[539px] lg:mr-[313px] xl:mr-[358px] 2xl:mr-[403px] 3xl:mr-[484px] mr-[538px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[21%]"
              compId="143:1108"
              comWidth={278}
              comHeight={51}
              compLeft={539}
              compRight={538}
              compType="Row"
            >
              <Image
                src={"images/img_vector_36.png"}
                className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] h-[9.94px] 3xl:h-[9px] mb-[20.56px] mt-[20.5px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] object-contain rotate-[90deg] w-[2%]"
                compId="146:29"
                comWidth={6}
                comHeight={9.94}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Row
                className="items-center justify-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] w-[72%]"
                compId="244"
                comWidth={200}
                comHeight={51}
                compLeft={33}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="bg-gray_800 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                  compId="143:1111"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`1`}</Button>
                <Button
                  className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                  compId="143:1114"
                  comWidth={51}
                  comHeight={51}
                  compLeft={24}
                  compRight={0}
                  compType="Button"
                >{`2`}</Button>
                <Button
                  className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_500 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                  compId="143:1117"
                  comWidth={51}
                  comHeight={51}
                  compLeft={24}
                  compRight={0}
                  compType="Button"
                >{`3`}</Button>
              </Row>
              <Image
                src={"images/img_vector_37.png"}
                className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] h-[9.94px] 3xl:h-[9px] mb-[20.5px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] mt-[20.56px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] object-contain rotate-[-90deg] w-[2%]"
                compId="146:27"
                comWidth={6}
                comHeight={9.94}
                compLeft={33}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            </Row>
          </Column>
        </Row>
        <footer
          className="bg-gray_800 mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
          compId="199:418"
          comWidth={1920}
          comHeight={493}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[85%]"
            compId="67"
            comWidth={1632}
            comHeight={397}
            compLeft={144}
            compRight={144}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="273:10"
              comWidth={1632}
              comHeight={280}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] pr-[32px] w-[25%]"
                compId="199:437"
                comWidth={416}
                comHeight={244}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mr-[159px] xl:mr-[182px] 2xl:mr-[204px] 3xl:mr-[245px] mr-[273px] w-[27%]"
                  compId="199:438"
                  comWidth={111}
                  comHeight={35}
                  compLeft={0}
                  compRight={273}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group19_5.png"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain w-[35%]"
                    compId="199:440"
                    comWidth={39}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group19"
                  />
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:439"
                    comWidth={64}
                    comHeight={35}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Elliye`}</Text>
                </Row>
                <Text
                  className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[92%]"
                  compId="199:444"
                  comWidth={384}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[135px] xl:mr-[155px] 2xl:mr-[174px] 3xl:mr-[209px] mr-[233px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[36%]"
                  compId="199:446"
                  comWidth={149.02}
                  comHeight={32}
                  compLeft={1.98}
                  compRight={233}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_38.png"}
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] h-[19.87px] mb-[6.09px] mt-[6.04px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] object-contain w-[13%]"
                    compId="199:448"
                    comWidth={19.93}
                    comHeight={19.87}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10.09px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:449"
                    comWidth={119}
                    comHeight={32}
                    compLeft={10.09}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start ml-[1px] lg:mr-[102px] xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] mr-[175px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                  compId="199:450"
                  comWidth={207}
                  comHeight={32}
                  compLeft={2}
                  compRight={175}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_39.png"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] object-contain w-[10%]"
                    compId="199:452"
                    comWidth={20}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Text
                    className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[auto]"
                    compId="199:453"
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
                compId="199:430"
                comWidth={165}
                comHeight={224}
                compLeft={278}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="255"
                  comWidth={165}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                    compId="199:431"
                    comWidth={165}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product Links`}</Text>
                </Column>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:433"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal lg:mr-[38px] xl:mr-[44px] 2xl:mr-[49px] 3xl:mr-[59px] mr-[66px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:434"
                  comWidth={99}
                  comHeight={27}
                  compLeft={0}
                  compRight={66}
                  compType="Text"
                >{`New Arrival`}</Text>
                <Text
                  className="font-normal lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:435"
                  comWidth={78}
                  comHeight={27}
                  compLeft={0}
                  compRight={87}
                  compType="Text"
                >{`Features`}</Text>
                <Text
                  className="font-normal lg:mr-[37px] xl:mr-[43px] 2xl:mr-[48px] 3xl:mr-[58px] mr-[65px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:436"
                  comWidth={100}
                  comHeight={27}
                  compLeft={0}
                  compRight={65}
                  compType="Text"
                >{`Collections`}</Text>
              </Column>
              <Column
                className="items-start justify-start 3xl:ml-[100px] ml-[112px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[9%]"
                compId="199:421"
                comWidth={147}
                comHeight={280}
                compLeft={112}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:422"
                  comWidth={123}
                  comHeight={35}
                  compLeft={0}
                  compRight={24}
                  compType="Text"
                >{`Company`}</Text>
                <Text
                  className="font-normal lg:mr-[54px] xl:mr-[62px] 2xl:mr-[69px] 3xl:mr-[83px] mr-[93px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:424"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={93}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="font-normal mr-[108px] lg:mr-[63px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:425"
                  comWidth={39}
                  comHeight={27}
                  compLeft={0}
                  compRight={108}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="font-normal lg:mr-[43px] xl:mr-[50px] 2xl:mr-[56px] 3xl:mr-[67px] mr-[75px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:426"
                  comWidth={72}
                  comHeight={27}
                  compLeft={0}
                  compRight={75}
                  compType="Text"
                >{`Careers`}</Text>
                <Text
                  className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:427"
                  comWidth={75}
                  comHeight={27}
                  compLeft={0}
                  compRight={72}
                  compType="Text"
                >{`Services`}</Text>
                <Text
                  className="font-normal lg:mr-[15px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] mr-[27px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                  compId="199:428"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={27}
                  compType="Text"
                >{`Privacy Policy`}</Text>
                <Column
                  className="mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                  compId="256"
                  comWidth={147}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[auto]"
                    compId="199:429"
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
                compId="199:454"
                comWidth={384}
                comHeight={209}
                compLeft={130}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold 2xl:mr-[109px] 3xl:mr-[131px] mr-[146px] lg:mr-[85px] xl:mr-[97px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                  compId="199:462"
                  comWidth={238}
                  comHeight={36}
                  compLeft={0}
                  compRight={146}
                  compType="Text"
                >{`Join our Newsletter`}</Text>
                <Column
                  className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="257"
                  comWidth={384}
                  comHeight={149}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal leading-[normal] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 text-left w-[100%]"
                    compId="199:463"
                    comWidth={384}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Row
                    className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[24.62px] w-[100%]"
                    compId="199:455"
                    comWidth={384}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100_87 text-center tracking-ls1 w-[auto]"
                      compId="199:457"
                      comWidth={149.77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email`}</Text>
                    <Image
                      src={"images/img_submit_2.png"}
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 2xl:ml-[112px] 3xl:ml-[134px] ml-[149.61px] lg:ml-[87px] xl:ml-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      compId="199:458"
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
              compId="199:420"
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

export default ProductListPage;
