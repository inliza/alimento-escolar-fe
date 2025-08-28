import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltip,
  MatTooltipModule,
  SCROLL_THROTTLE_MS,
  TOOLTIP_PANEL_CLASS,
  TooltipComponent,
  getMatTooltipInvalidPositionError
} from "./chunk-ZHRXTRHG.js";
import "./chunk-H23ZAWOH.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-PQDMB7CF.js";
import "./chunk-Q7KWZ4NV.js";
import "./chunk-OZ7C5UV6.js";
import "./chunk-42FJBLFI.js";
import "./chunk-GV5LUSDY.js";
import "./chunk-VAMHMH56.js";
import "./chunk-7VVSJ33K.js";
import "./chunk-TLKLTHLA.js";
import "./chunk-EZME2MXQ.js";
import "./chunk-MADP5KZN.js";
import "./chunk-VW6LVMSL.js";
import "./chunk-AZ7WIFI6.js";
import "./chunk-4DDIENDC.js";
import "./chunk-DG6N4IH3.js";
import "./chunk-MMVZ32PN.js";
import "./chunk-AKQZ6VNJ.js";
import "./chunk-2O4WY5GE.js";
import "./chunk-DLQMUU2O.js";
import "./chunk-GWV6PTLK.js";
import "./chunk-LHEN7HP5.js";
import "./chunk-5WJ6YQA5.js";
import "./chunk-2PUWVVCW.js";
import "./chunk-6CPDUBOC.js";
import "./chunk-YQC4FBSZ.js";
import "./chunk-ZGR3XN7N.js";
import "./chunk-243NFYEQ.js";
import "./chunk-6IPYV47H.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@angular/material/fesm2022/tooltip.mjs
var matTooltipAnimations = {
  // Represents:
  // trigger('state', [
  //   state('initial, void, hidden', style({opacity: 0, transform: 'scale(0.8)'})),
  //   state('visible', style({transform: 'scale(1)'})),
  //   transition('* => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  //   transition('* => hidden', animate('75ms cubic-bezier(0.4, 0, 1, 1)')),
  // ])
  /** Animation that transitions a tooltip in and out. */
  tooltipState: {
    type: 7,
    name: "state",
    definitions: [{
      type: 0,
      name: "initial, void, hidden",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(0.8)"
        },
        offset: null
      }
    }, {
      type: 0,
      name: "visible",
      styles: {
        type: 6,
        styles: {
          transform: "scale(1)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "* => visible",
      animation: {
        type: 4,
        styles: null,
        timings: "150ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => hidden",
      animation: {
        type: 4,
        styles: null,
        timings: "75ms cubic-bezier(0.4, 0, 1, 1)"
      },
      options: null
    }],
    options: {}
  }
};
export {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltip,
  MatTooltipModule,
  SCROLL_THROTTLE_MS,
  TOOLTIP_PANEL_CLASS,
  TooltipComponent,
  getMatTooltipInvalidPositionError,
  matTooltipAnimations
};
//# sourceMappingURL=@angular_material_tooltip.js.map
