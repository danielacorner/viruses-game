import React from "react";
import { useStore } from "./store";
import { Slider, Typography } from "@material-ui/core";
import styled from "styled-components/macro";
import { ZoomOut, ZoomIn } from "@material-ui/icons";

export function ScaleControls() {
  const scale = useStore((s) => s.scale);
  const set = useStore((s) => s.set);
  return (
    <ScaleControlsStyles>
      <Typography align="center" id="volume-slider" gutterBottom>
        Scale
      </Typography>
      <div className="grid">
        <div className="grid-item">
          <ZoomIn />
        </div>
        <div className="grid-item">
          <Slider
            orientation="vertical"
            aria-labelledby="volume-slider"
            onChange={(event, newValue) => {
              set({ scale: newValue });
            }}
            min={0}
            step={0.00000001}
            max={0.018}
            value={scale}
          />
        </div>
        <div className="grid-item">
          <ZoomOut />
        </div>
      </div>
    </ScaleControlsStyles>
  );
}
const ScaleControlsStyles = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  bottom: 164px;
  right: 24px;
  height: 60vh;
  .grid {
    display: grid;
    justify-items: center;
    height: 100%;
    .grid-item {
      height: 100%;
    }
    grid-template-rows: auto 1fr auto;
    align-items: center;
    grid-gap: 1em;
  }
`;