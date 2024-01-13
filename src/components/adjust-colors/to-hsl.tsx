import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { AdjustColorActions } from '../../color-reducer';

type HexToHSLProps = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const updateHSL = ({ hue = h, shade = s, light = l }) => {
    dispatch({
      type: 'update-hsl-color',
      payload: { hsl: [hue, shade, light] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) =>
          updateHSL({ hue: e.target.valueAsNumber, shade: s, light: l })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          updateHSL({ hue: h, shade: e.target.valueAsNumber, light: l })
        }
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) =>
          updateHSL({ hue: h, shade: s, light: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToHSL;
