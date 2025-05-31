
import mvImg from "@/public/images/mv.png"
import reviewImg from "@/public/images/review.png";
import movieImg from "@/public/images/movie.png";

export const links = [
  {
    name: "หน้าแรก",
    hash: "#home",
  },
  {
    name: "ผลงานของฉัน",
    hash: "#projects",
  },
] as const; 

export const projectsData = [
  {
    title: "งานถ่าย MV เพลง",
    description:
      "ผลงาน Music Video จาก GMM grammy gold วงไม้เมือง",
    tags: ["เพลง สิ่งที่ดีที่สุด"],
    imageUrl: mvImg,
  },
  {
    title: "งานถ่ายโฆษณา รีวิว",
    description:
      "งานถ่ายโฆษณา หรือ รีวิวสินค้าต่าง เช่น เซรั่ม อาหารเสริม โปรตีนบำรุงสุขภาพต่างๆ",
    tags: ["โปรตีน PhytoPlus", "เซรั่มกุหลาบ พรีมลดา"],
    imageUrl: reviewImg,
  },
  {
    title: "งานละครสั้นและภาพยนต์",
    description:
      "ผลงานละครสั้นจากช่อง facebook  เช่น อาเขต มีเดีย , Tgang The series  และรวมถึงงานภาพยนต์ สารคดีที่ชื่อว่า ป่าปิด",
    tags: ["อาเขต มีเดีย","Tgang The series","กันและกัน แชนแนล"],
    imageUrl: movieImg,
  },
] as const;


// เก็บ mapping tag -> youtube URL ไว้ที่เดียวกัน
export const tagToYoutubeUrl: Record<string, string> = {
  "เพลง สิ่งที่ดีที่สุด": "https://www.youtube.com/watch?v=E7mv9tUfn6Q",
  "โปรตีน PhytoPlus": "https://youtu.be/e0KosLcMDwY?si=4zmig7yBdi-hYWXT",
  "เซรั่มกุหลาบ พรีมลดา": "https://www.facebook.com/story.php?story_fbid=354713414046131&id=100085224257951&rdid=LgNFDWLieCGp1GQ9#",
  "อาเขต มีเดีย": "https://www.facebook.com/arcademedia7/videos/540133978616945/?rdid=xjNCEkx238pIQIdk#",
  "Tgang The series": "https://www.facebook.com/share/v/1BaTTZPUdw/",
  "กันและกัน แชนแนล": "https://www.facebook.com/61554368077910/videos/531364196005792/?rdid=j2san9L20T7vtvZy#",
  // เพิ่มเติมได้
};