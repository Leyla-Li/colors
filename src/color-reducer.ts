import { rgb, hsl } from 'color-convert';

// export type HexColor = `#${string}`;
// export type RGBColor = `rgb(${number}, ${number}, ${number})`;

// export type ColorFormat = 'rgb' | 'hex' | 'hsl' | 'hsv';
// export type ColorActionType = `update-${ColorFormat}-action`;

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

export type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [number, number, number];
  };
};

//if we put a type in global.d.ts, we don't need to import it anywhere, we can just use it
export type AdjustColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction;

export type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }
  if (action.type === 'update-hsl-color') {
    const hexColor = '#' + hsl.hex(action.payload.hsl);
    return { ...state, hexColor };
  }

  return state;
};
