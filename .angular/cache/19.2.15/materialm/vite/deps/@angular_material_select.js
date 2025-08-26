import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-IQS4LBBT.js";
import "./chunk-3GD4TOIR.js";
import "./chunk-R4QB32YE.js";
import "./chunk-IKCXQSJ6.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-MRFT2GFE.js";
import "./chunk-6TZ5YFRD.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-WUHX5N3M.js";
import "./chunk-FWUAEBQZ.js";
import "./chunk-4BHLMSXY.js";
import "./chunk-PQDMB7CF.js";
import "./chunk-Q73NTYFG.js";
import "./chunk-HSLRNC5F.js";
import "./chunk-EBYQLDSJ.js";
import "./chunk-6D5S6QBL.js";
import "./chunk-YHBVR2CV.js";
import "./chunk-4KQJMIUU.js";
import "./chunk-Q7KWZ4NV.js";
import "./chunk-OZ7C5UV6.js";
import "./chunk-42FJBLFI.js";
import "./chunk-GV5LUSDY.js";
import "./chunk-G4YLOGNC.js";
import "./chunk-MRML24FN.js";
import "./chunk-TLKLTHLA.js";
import "./chunk-MMVZ32PN.js";
import "./chunk-4DDIENDC.js";
import "./chunk-EZME2MXQ.js";
import "./chunk-MADP5KZN.js";
import "./chunk-DG6N4IH3.js";
import "./chunk-VW6LVMSL.js";
import "./chunk-AZ7WIFI6.js";
import "./chunk-LEB5QCKT.js";
import "./chunk-DLQMUU2O.js";
import "./chunk-2O4WY5GE.js";
import "./chunk-GWV6PTLK.js";
import "./chunk-LHEN7HP5.js";
import "./chunk-5WJ6YQA5.js";
import "./chunk-2PUWVVCW.js";
import "./chunk-6CPDUBOC.js";
import "./chunk-YQC4FBSZ.js";
import "./chunk-243NFYEQ.js";
import "./chunk-ZGR3XN7N.js";
import "./chunk-6IPYV47H.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanelWrap', [
  //   transition('* => void', query('@transformPanel', [animateChild()], {optional: true})),
  // ])
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: {
    type: 7,
    name: "transformPanelWrap",
    definitions: [{
      type: 1,
      expr: "* => void",
      animation: {
        type: 11,
        selector: "@transformPanel",
        animation: [{
          type: 9,
          options: null
        }],
        options: {
          optional: true
        }
      },
      options: null
    }],
    options: {}
  },
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(1, 0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => showing",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1, 1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms linear"
      },
      options: null
    }],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
