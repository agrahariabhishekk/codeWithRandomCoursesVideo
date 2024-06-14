import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import Container from "./containers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";

function App() {
  let VideoContainer = [
    {
      heading: "Live Class 1- Front-end batch with Code with random",
      discreption:
        "this is first video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/iF62I0LzPnQ?si=HB20dw3OdAu0iYw5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 2- Front-end batch with Code with random",
      discreption:
        "this is second video make by Dhruv Rekhatwat And , when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/Xv8EjZdV1wg?si=8u5elQgSUy3nPycw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 3- Front-end batch with Code with random ",
      discreption:
        "this is third video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/ZyrgQzwnOzw?si=-OT5hcLNMAVlxHp-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 4- Front-end batch with Code with random",
      discreption:
        "this is fourth video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/XZl48lE9A3o?si=Wmg9amh5HNJn4-7f"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 5- Front-end batch with Code with random",
      discreption:
        "this is five video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/Mc5CJ3acIBI?si=88FOl3vRZkVe4dHu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 6- Front-end batch with Code with random",
      discreption:
        "this is six video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/D_wZBkSFBvA?si=Nn7U-Yr4g5K-f9N_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 7- Front-end batch with Code with random",
      discreption:
        "this is seven video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/Z_bYmBK5K1Q?si=eTm-AoILRq96PGBt"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 8- Front-end batch with Code with random",
      discreption:
        "this is eight video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/2Zjk7UtiUEk?si=o-LrTad9yJMoJZH0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 9- Front-end batch with Code with random",
      discreption:
        "this is nine video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/fbi6EoA6cOM?si=B5IALKpTb7xgspOz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 10- Front-end batch with Code with random",
      discreption:
        "this is ten video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/cx3Vj10rEJo?si=3oCWYa5VXQUBtWGR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 11- Front-end batch with Code with random",
      discreption:
        "this is eleven video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/TS5uDiHJasY?si=VBTaY8nuya_rT_1z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 12- Front-end batch with Code with random",
      discreption:
        "this is twelve video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/NSkuSr3b4Wo?si=KTFDp6mDrYL9rBuB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 13- Front-end batch with Code with random",
      discreption:
        "this is thirteen video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/c5Py3tNViIw?si=56Y3kWr6uzBN7CJX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 14- Front-end batch with Code with random",
      discreption:
        "this is fourteen video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/RdeDtAZuVtE?si=1Ikdnubo5CJImw_H"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 15- Front-end batch with Code with random",
      discreption:
        "this is fifteen video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/n12pQKiaF2c?si=igAUPUjfwDUPYRmx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      heading: "Live Class 16- Front-end batch with Code with random",
      discreption:
        "this is sixteen video make by Dhruv Rekhatwat , And when you want to play just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/PKk_hVtBvAI?si=D_TUg6uy4CQrViia"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 17- Front-end batch with Code with random",
      discreption:
        "this is seventeen video make by Dhruv Rekhatwat , And when you want to play  just click Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/6TCPn6cHn_U?si=cbUxd0IIB2jH1qYO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 18- Front-end batch with Code with random",
      discreption:
        "this is eighteen video make by Dhruv Rekhatwat , And when you want to play just Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/UqHBDZlZrpw?si=JwOFRt_Ct2p1XCRz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
    {
      heading: "Live Class 19- Front-end batch with Code with random",
      discreption:
        "this is nineteen video make by Dhruv Rekhatwat , And when you want to play just Youtube Logo and when you want to full screen you can use full screen symble on this video",
      content: (
        <iframe
          width="auto"
          height="325"
          src="https://www.youtube.com/embed/clWZRFeSJ6A?si=-ttE7kxEqoKBjM4w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      ),
    },
  ];
  return (
    <>
      <Header></Header>
      <Container VideoContainer={VideoContainer}></Container>
      <Footer></Footer>
    </>
  );
}

export default App;
