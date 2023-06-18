// import React from "react";
// import { useDrag } from "react-dnd";
// function Picture({ id, url }) {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "image",
//     item: { id: id },
//     collect: (monitor) => ({ isDragging: !!monitor.isDragging() }), // optional, used to collect information whether its being dragging or not
//   }));
//   return (
//     <img
//       ref={drag}
//       src={url}
//       width="200"
//       height="200"
//       style={{ border: isDragging ? "5px solid pink" : "0px" }}
//     />
//   );
// }

// export default Picture;
