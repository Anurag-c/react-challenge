- Color component takes in 3 props and uses them to generate the rgb of the background color
  a. r prop which is an integer 0-255
  b. g prop which is an integer 0-255
  c. b prop which is an integer 0-255
- BlendedColor component which has an undetermined amount of Color and/or BlendedColor components as children. The background color of this component will be the average rgb values of all of its immediate children.
