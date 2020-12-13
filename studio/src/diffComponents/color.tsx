import * as React from "react";
import { DiffFromTo } from "@sanity/field/diff";

type DiffFromToProps = React.ComponentProps<typeof DiffFromTo>;

type ColorFieldDiffProps = Pick<DiffFromToProps, "diff" | "schemaType">;

export function ColorFieldDiff({ diff, schemaType }: ColorFieldDiffProps) {
  return <DiffFromTo diff={diff} schemaType={schemaType} previewComponent={ColorPreviewComponent} />;
}

const ColorPreviewComponent: DiffFromToProps['previewComponent'] = ({ value }) => {
  const { hex } = value;
  return (
    <div
      style={{
        background: hex,
        height: "180px",
        minWidth: "180px",
        maxWidth: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: getContrast50(hex),
      }}
    >
      <div>{hex}</div>
    </div>
  );
}
function getContrast50(hexcolor: string) {
  return parseInt(hexcolor.replace("#", "0x"), 16) > 0xffffff / 2 ? "#000" : "#FFF";
}
