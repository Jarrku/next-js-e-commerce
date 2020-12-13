import { ColorFieldDiff } from "./color";

export default function geopointDiffResolver({ schemaType }: { schemaType: { name: string }}) {
  if (schemaType.name === "color") {
    return ColorFieldDiff;
  }

  return undefined;
}
