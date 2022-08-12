// 사용안하는 파일! 참고용 ~
// import { Categorystyles } from "../styles/Categorycolor";

export const Categorycolor = (category) => {
  switch (category) {
    case "K-LANDSCAPE":
      return Categorystyles.Landscape_Category;
    case "K-CULTURE":
      return Categorystyles.Drama_Category;
    case "K-FOOD":
      return Categorystyles.Food_Category;
    case "K-SHOPPING":
      return Categorystyles.Shopping_Category;
    case "K-POP":
      return Categorystyles.Pop_Category;
    case "K-DRAMA":
      return Categorystyles.Drama_Category;
    case "K-FESTIVAL":
      return Categorystyles.Festival_Category;
    case "K-LEISURE":
      return Categorystyles.Leisure_Category;
  }
};
