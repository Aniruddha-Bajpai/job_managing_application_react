// import React from "react";
// import Picture from "./Picture";
// import { useDrop } from "react-dnd";
// import { useState } from "react";
// const PictureList = [
//   {
//     id: 1,
//     url: "https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg",
//   },
//   {
//     id: 2,
//     url: "https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/02f749cd-e236-4b94-9339-91b17aa80646",
//   },
//   {
//     id: 3,
//     url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/superman-logo-social-featured.jpg",
//   },
//   {
//     id: 4,
//     url: "https://c4.wallpaperflare.com/wallpaper/182/512/853/dark-dr-stephen-strange-artwork-black-wallpaper-preview.jpg",
//   },
// ];
// function DragDrop() {
//   const [drop, setDrop] = useState([]);
//   const [{ isOver }, dropEle] = useDrop(() => ({
//     accept: "image",
//     drop: (item) => {
//       AddImageToDrop(item.id);
//     },
//     collect: (monitor) => ({ isOver: !!monitor.isOver() }),
//   }));
//   const AddImageToDrop = (id) => {
//     const pictureList = PictureList.filter((picture) => id === picture.id);
//     setDrop((drop) => [...drop, pictureList[0]]);
//   };
//   return (
//     <>
//       <div className="pictures">
//         {PictureList.map((picture) => (
//           <Picture {...picture} />
//         ))}
//       </div>
//       <div className="drop" ref={dropEle}>
//         <span>Drop here ...</span>
//         {drop.map((picture) => (
//           <Picture {...picture} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default DragDrop;
