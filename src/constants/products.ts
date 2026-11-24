import bowls from "@/images/kkinifit/bowls.webp";
import camera from "@/images/kkinifit/camera.webp";
import magnifier from "@/images/kkinifit/magnifier.webp";

// url이 null이면 링크 대신 "출시 준비 중"으로 보인다. 공개 주소가 생기면 넣는다.
export const PRODUCTS = [
  {
    name: "끼니핏",
    description: "음식 사진으로 먹은 양과 영양을 기록하는 앱",
    url: "https://kkinifit.com/" as string | null,
    features: [
      {
        image: camera,
        title: "사진으로 기록",
        body: "식사를 찍으면 음식과 양을 추정합니다. 틀린 부분만 고치면 됩니다.",
      },
      {
        image: magnifier,
        title: "남긴 만큼 조정",
        body: "식사 후 사진이나 직접 입력으로 실제 먹은 양에 맞춥니다.",
      },
      {
        image: bowls,
        title: "다음 끼니 안내",
        body: "오늘의 기록과 목표를 바탕으로 다음 끼니에 보완할 음식을 알려 줍니다.",
      },
    ],
  },
];
