/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { selectColor } from "./../../store/reducers/colorSlice";
import {
  ColorIcon,
  ColorCheckedIcon,
  ColorContainer,
  ColorGroup,
} from "./ColorPicker.style";
import colorData from "./../../../data/colorData.json";

const ColorItem = ({ colorId }) => {
  const { colorList } = useSelector(selectColor);
  const color = colorData[colorList.find((color) => color.id === colorId).id];

  return (
    <Tooltip title={colorList.find((color) => color.id === colorId).title}>
      <FormControlLabel
        sx={{ m: 0 }}
        value={colorId}
        control={
          <Radio
            icon={<ColorIcon color={color} />}
            checkedIcon={<ColorCheckedIcon color={color} />}
          />
        }
      />
    </Tooltip>
  );
};

export const ColorPicker = ({ colorIds, activeColor, setActiveColor }) => {
  return (
    <ColorContainer>
      <ColorGroup
        row
        name="color"
        value={activeColor}
        onChange={(e) => {
          setActiveColor(Number(e.target.value));
        }}
      >
        {colorIds.map((colorId) => (
          <ColorItem colorId={colorId} key={colorId} />
        ))}
      </ColorGroup>
    </ColorContainer>
  );
};

export default ColorPicker;
