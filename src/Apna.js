import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

// importing DragDropContext, Droppable, Draggable
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import { UpdateSection } from "./Redux/JobSectionSlice";
import store from "./store";

// stylings
const Outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  height: "94%",
  background: "#B0DAFF",
};
const Middle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  border: "2px solid #D8D8D8",
  borderRadius: "100px",
  background: "#DDFFBB  ",
  width: "500px",
  height: "90%",
};
const DroppableInner = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: "2px solid #FEFF86",
  height: "250px",
  width: "250px",
};
const DraggableInner = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  margin: "10px",
  border: "2px solid #609EA2",
  padding: "5px",
};

const AllItems = [
  { id: v4(), content: "Juspay" },
  { id: v4(), content: "Google" },
  { id: v4(), content: "Microsoft" },
  { id: v4(), content: "Amazon" },
  { id: v4(), content: "Netflix" },
];

const AllSections = {
  [v4()]: { name: "Upcomming Drives", items: AllItems },
  [v4()]: { name: "OnGoing Drives", items: [] },
  [v4()]: { name: "Completed Drives", items: [] },
  [v4()]: { name: "Chances of Placement", items: [] },
};

const onDragEnd = (result, columns, setColumns) => {
  // source & destination
  const { source, destination } = result;
  if (!destination) return;
  else if (source.droppableId !== destination.droppableId) {
    const sourceCol = columns[source.droppableId];
    const destinationCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destinationItems = [...destinationCol.items];
    // removing item from source and adding at the correct location in destination
    const [removed] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destinationItems.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceCol, items: sourceItems },
      [destination.droppableId]: { ...destinationCol, items: destinationItems },
    });
  } else {
    const sourceCol = columns[source.droppableId];
    const sourceItem = [...sourceCol.items];
    const [removed] = sourceItem.splice(source.index, 1);
    sourceItem.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceCol,
        items: sourceItem,
      },
    });
  }
};

function Apna() {
  const section = useSelector((store) => store.Section.sections);
  console.log(section);
  const [columns, setColumns] = useState(AllSections);
  const dispatch = useDispatch();
  useEffect(() => {
    updateSectionHandler();
  }, [columns]);
  const updateSectionHandler = () => {
    dispatch(UpdateSection(columns));
  };
  if (!section) return;
  return (
    <>
      <div style={Outer}>
        <h1>Jobs Manager</h1>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(section).map(([id, column], index) => {
            return (
              <div style={Middle} key={id + "-" + index}>
                <h1>{column.name}</h1>
                <div style={{ margin: "10px" }}>
                  <Droppable key={id} droppableId={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          style={{
                            ...DroppableInner,
                            background: snapshot.isDraggingOver
                              ? "#A4BC92 "
                              : "#C7E9B0",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                index={index}
                                draggableId={item.id}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      key={index + "-" + item.id}
                                      {...provided.dragHandleProps}
                                      {...provided.draggableProps}
                                      ref={provided.innerRef}
                                      style={{
                                        ...DraggableInner,
                                        backgroundColor: snapshot.isDragging
                                          ? "#DDFFBB"
                                          : "#DFFFD8",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

/**
 *  DragDropContext
 *  --> Droppable
 *    ---> Draggable
 *  --> Droppable
 *    ---> Draggable
 *
 *
 *
 *
 *
 */

export default Apna;
