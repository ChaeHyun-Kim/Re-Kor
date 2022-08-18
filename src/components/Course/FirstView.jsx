import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SecondView from "./SecondView";
import SimplePopupMenu from "react-native-simple-popup-menu";

const CourseListView = ({ folder, course }) => {
  const [click, setClick] = useState(false);
  const [rename, setRename] = useState(false);
  // const ref_input2 = useRef();
  const items = [
    { id: "move", label: "Move to a folder sequence" },
    { id: "rename", label: "Rename a folder" },
  ];
  const onMenuPress = (id) => {
    if (id === "move") {
      console.log(id);
    } else if (id === "rename") {
      setRename(true);
    }
  };

  return (
    <View style={{ padding: toSize(2), marginBottom: toSize(16) }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setClick(click === false ? true : false)}
        style={styles.ListView}
      >
        {(click && (
          <AntDesign name="down" size={toSize(12)} color="#8F9098" />
        )) || <AntDesign name="right" size={toSize(12)} color="#8F9098" />}

        <View style={styles.textView}>
          <TextInput
            value={folder}
            editable={rename}
            style={styles.mainText}
            placeholder={"Text"}
            // onSubmitEditing={() => ref_input2.current.focus()}
          />

          <Text style={styles.numText}>{course.length}</Text>
        </View>
        <SimplePopupMenu
          items={items}
          style={styles.button}
          onSelect={(items) => {
            onMenuPress(items.id);
          }}
          onCancel={() => console.log("onCancel")}
        >
          <AntDesign name="ellipsis1" size={toSize(24)} color="#8F9098" />
        </SimplePopupMenu>
      </TouchableOpacity>
      {click === true &&
        course.map((item, key) => (
          <SecondView
            course_name={item.course_name}
            course_info={item.course_info}
            key={key}
          />
        ))}
    </View>
  );
};
export default CourseListView;
const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    fontSize: toSize(14),
    color: "#1F2024",
    fontWeight: "400",
    marginLeft: toSize(18),
    marginRight: toSize(8),
  },
  numText: {
    fontSize: toSize(14),
    color: "#000",
    fontWeight: "700",
  },
});
