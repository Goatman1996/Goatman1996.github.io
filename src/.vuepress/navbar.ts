import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "数学",
    icon: "infinity",
    prefix: "Math/",
    children: [
      { text: "单变量微积分", icon: "infinity", link: "Single_Variable_Calculus/" },
      { text: "线性代数", icon: "infinity", link: "Linear_Algebra/" },
      { text: "多变量微积分", icon: "infinity", link: "Multivariable_Calculus/" },
    ],
  },
    {
    text: "计算机图形学",
    icon: "laptop-code",
    prefix: "ComputerGraphics/",
    children: [
      { text: "Games101", icon: "laptop-code", link: "Games101/" },
      { text: "Games202", icon: "laptop-code", link: "Games202/" },
    ],
  },
  {
    text: "实践",
    icon: "question",
    link: "Implementations/",
  },
]);
