import { useSurfaceStyle } from "@components/surface"
import { Theme } from "@theme"

export default function editor(theme: Theme) {
  const static_properties = {
    text_color: "#FF0000",
    active_line_background: "#2f343ebf",
    highlighted_line_background: "#2f343e",
    suggestion: {
      color: "#5b6b88",
      italic: true,
    },
    code_actions: {
      indicator: {
        color: "#838994",
        clicked: {
          color: "#c8ccd4",
        },
        hover: {
          color: "#c8ccd4",
        },
        active: {
          color: "#c8ccd4",
        },
      },
      vertical_scale: 0.55,
    },
    folds: {
      icon_margin_scale: 2.5,
      folded_icon: "icons/chevron_right_8.svg",
      foldable_icon: "icons/chevron_down_8.svg",
      indicator: {
        color: "#838994",
        clicked: {
          color: "#c8ccd4",
        },
        hover: {
          color: "#c8ccd4",
        },
        active: {
          color: "#c8ccd4",
        },
      },
      ellipses: {
        text_color: "#878e98",
        corner_radius_factor: 0.15,
        background: {
          color: "#555a6300",
          hover: {
            color: "#555a6380",
          },
          clicked: {
            color: "#555a63b3",
          },
        },
      },
      fold_background: "#838994",
    },
    diff: {
      deleted: "#d07277",
      modified: "#dec184",
      inserted: "#a1c181",
      removed_width_em: 0.275,
      width_em: 0.22,
      corner_radius: 0.2,
    },
    document_highlight_read_background: "#74ade81a",
    document_highlight_write_background: "#555a6366",
    error_color: "#301b1c",
    gutter_padding_factor: 3.5,
    line_number: "#c8ccd459",
    line_number_active: "#c8ccd4",
    rename_fade: 0.6,
    unnecessary_code_fade: 0.5,
    selection: {
      selection: "#74ade83d",
      cursor: "#74ade8",
    },
    whitespace: "#555a63",
    guest_selections: [
      {
        selection: "#a1c1813d",
        cursor: "#a1c181",
      },
      {
        selection: "#be50463d",
        cursor: "#be5046",
      },
      {
        selection: "#c0966b3d",
        cursor: "#c0966b",
      },
      {
        selection: "#b478cf3d",
        cursor: "#b478cf",
      },
      {
        selection: "#6fb4c03d",
        cursor: "#6fb4c0",
      },
      {
        selection: "#d072773d",
        cursor: "#d07277",
      },
      {
        selection: "#dec1843d",
        cursor: "#dec184",
      },
    ],
    autocomplete: {
      background: "#2f343e",
      corner_radius: 8,
      padding: 4,
      margin: {
        left: -14,
      },
      border: {
        color: "#363c46",
        width: 1,
      },
      shadow: {
        blur: 4,
        color: "#00000d33",
        offset: [1, 2],
      },
      match_highlight: "#74ade8",
      item: {
        corner_radius: 6,
        padding: {
          bottom: 2,
          left: 6,
          right: 6,
          top: 2,
        },
      },
      hovered_item: {
        corner_radius: 6,
        padding: {
          bottom: 2,
          left: 6,
          right: 6,
          top: 2,
        },
        match_highlight: "#74ade8",
        background: "#363c46",
      },
      selected_item: {
        corner_radius: 6,
        padding: {
          bottom: 2,
          left: 6,
          right: 6,
          top: 2,
        },
        match_highlight: "#fafcfe",
        background: "#454a56",
      },
    },
    diagnostic_header: {
      background: "#2f343e",
      icon_width_factor: 1.5,
      text_scale_factor: 0.857,
      border: {
        color: "#363c46",
        width: 1,
        bottom: true,
        top: true,
      },
      code: {
        family: "Zed Mono",
        size: 14,
        color: "#c8ccd4",
        margin: {
          left: 10,
        },
      },
      source: {
        text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
      },
      message: {
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#c8ccd4",
        },
      },
    },
    diagnostic_path_header: {
      background: "#2f343e",
      text_scale_factor: 0.857,
      filename: {
        family: "Zed Mono",
        size: 14,
        color: "#c8ccd4",
      },
      path: {
        family: "Zed Mono",
        size: 14,
        color: "#c8ccd4",
        margin: {
          left: 12,
        },
      },
    },
    error_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#d07277",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#d07277",
        },
      },
    },
    warning_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#dec184",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#dec184",
        },
      },
    },
    information_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#74ade8",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#74ade8",
        },
      },
    },
    hint_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#dec184",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#dec184",
        },
      },
    },
    invalid_error_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#c8ccd4",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
      },
    },
    invalid_hint_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#c8ccd4",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
      },
    },
    invalid_information_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#c8ccd4",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
      },
    },
    invalid_warning_diagnostic: {
      text_scale_factor: 0.857,
      header: {
        border: {
          color: "#363c46",
          width: 1,
          top: true,
        },
      },
      message: {
        text: {
          family: "Zed Sans",
          size: 14,
          color: "#c8ccd4",
        },
        highlight_text: {
          family: "Zed Sans",
          size: 14,
          weight: "bold",
          color: "#c8ccd4",
        },
      },
    },
    link_definition: {
      color: "#6FB4C0",
      underline: true,
    },
    jump_icon: {
      color: "#c8ccd4",
      icon_width: 20,
      button_width: 20,
      corner_radius: 6,
      padding: {
        top: 6,
        bottom: 6,
        left: 6,
        right: 6,
      },
      hover: {
        background: "#363c46",
      },
    },
    scrollbar: {
      width: 12,
      min_height_factor: 1,
      track: {
        border: {
          color: "#2e333c",
          width: 1,
          left: true,
        },
      },
      thumb: {
        background: "#c8ccd466",
        border: {
          width: 1,
          color: "#2e333c",
        },
      },
    },
    composition_mark: {
      underline: {
        thickness: 1,
        color: "#2e333c",
      },
    },
  }

  const syntax = {
    comment: {
      color: "#5D636F",
    },
    "comment.doc": {
      color: "#878e98",
    },
    primary: {
      color: "#ACB2BE",
    },
    predictive: {
      color: "#5b6b88",
      italic: true,
    },
    emphasis: {
      color: "#74ade8",
    },
    "emphasis.strong": {
      color: "#C0966B",
      weight: "bold",
    },
    title: {
      color: "#D07277",
      weight: "normal",
    },
    link_uri: {
      color: "#6FB4C0",
      underline: true,
    },
    link_text: {
      color: "#74ADE9",
      italic: false,
    },
    "text.literal": {
      color: "#A1C181",
    },
    punctuation: {
      color: "#ACB2BE",
    },
    "punctuation.bracket": {
      color: "#b2b9c6",
    },
    "punctuation.delimiter": {
      color: "#b2b9c6",
    },
    "punctuation.special": {
      color: "#B1574B",
    },
    "punctuation.list_marker": {
      color: "#D07277",
    },
    string: {
      color: "#A1C181",
    },
    "string.special": {
      color: "#c0966b",
    },
    "string.special.symbol": {
      color: "#c0966b",
    },
    "string.escape": {
      color: "#878e98",
    },
    "string.regex": {
      color: "#c0966b",
    },
    constructor: {
      color: "#74ADE9",
    },
    variant: {
      color: "#74ADE9",
    },
    type: {
      color: "#6FB4C0",
    },
    variable: {
      color: "#c8ccd4",
    },
    label: {
      color: "#74ade8",
    },
    tag: {
      color: "#74ade8",
    },
    attribute: {
      color: "#74ade8",
    },
    property: {
      color: "#D07277",
    },
    constant: {
      color: "#DFC184",
    },
    keyword: {
      color: "#B478CF",
    },
    enum: {
      color: "#D07277",
    },
    operator: {
      color: "#6FB4C0",
    },
    number: {
      color: "#C0966B",
    },
    boolean: {
      color: "#C0966B",
    },
    function: {
      color: "#74ADE9",
    },
    preproc: {
      color: "#c8ccd4",
    },
    embedded: {
      color: "#c8ccd4",
    },
    "variable.special": {
      color: "#C0966B",
    },
  }

  const container = useSurfaceStyle(theme, "editor")

  const legacy_properties = {
    background: container.background,
    gutter_background: container.background,
  }

  return {
    ...static_properties,
    ...legacy_properties,
    syntax,
  }
}
