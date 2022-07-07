//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athelete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
      ],
    },
    {
      title: "good times",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/good-times",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
        {
          title: "Truly A Masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel?",
        },
      ],
    },
  ];
};
