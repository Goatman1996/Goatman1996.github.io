import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "计算机图形学",
      icon: "laptop-code",
      prefix: "ComputerGraphics/",
      link: "ComputerGraphics/",
      children: "structure",
    },
    {
      text: "数学",
      icon: "infinity",
      prefix: "Math/",
      link: "Math/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
