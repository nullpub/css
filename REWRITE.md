# Rewrite

This is the outline of the next major rewrite @nll/css@10. The rough goals are:

- Define an exact naming scheme.
- Use scss functions to ease feature maintenance and documentation.
- Migrate colors to HSLA variables, implement darken/lighten using css calc.
- Build css parser in rust that can build custom documentation.
- Create sizings for vertical rhythm based on line-height.
- Revisit the default sizing and split into multiple unit scales
  - vrX: Vertical Rhythm units
  - vwX: View Width units
  - vhX: View Height units
  - chX: Character units
  - emX: Relative Point units
  - pX: Percentage units
  - X: Raw Pixels
  - cX: Custom units
- Add classes for view/height ratios
- Expand font classes to handle fonts like color themes
  - This will require font specific font-size scale
- Create small modules for
  - Typography: header, paragraph, strong, small, blockquote
  - Input: input, checkbox, radio, select, textarea, slider
  - Buttons
  - Containers
