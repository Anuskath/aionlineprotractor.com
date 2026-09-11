export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'how to use an online protractor',
    answer:
      'To use an online protractor, open the tool in your web browser on any device. Position the central vertex origin handle directly over the intersection point of the two lines you want to measure. Next, drag the green baseline ray (Ray 1) along the initial reference arm. Finally, drag the blue measuring ray (Ray 2) along the second line. The tool instantly calculates the enclosed angle in degrees (°), radians (rad), and gradient slope percentage in real time.',
  },
  {
    question: 'how to use a protractor online',
    answer:
      'Using a protractor online is faster and more accurate than using a traditional plastic instrument. Simply access the digital protractor on your screen, drag the center pivot point to the vertex of the angle, and rotate the interactive rays to align with the angle arms. You can also toggle 1° angle snapping for integer values or use smooth decimal dragging for 0.1° high precision. For homework photos or digital drawings, use the upload or camera buttons to measure angles directly over your files.',
  },
  {
    question: 'how to use an angle finder',
    answer:
      'An online angle finder works by tracking the coordinate positions of three geometric points: the central vertex and two ray endpoints. To use it, align the base arm with the horizontal plane or first edge of your object, then sweep the indicator arm to match the second edge. The angle finder tool automatically calculates the acute, right, obtuse, or reflex angle, displaying supplementary, complementary, and slope gradient measurements without requiring manual math.',
  },
  {
    question: 'how to read an angle finder',
    answer:
      'Reading an angle finder is simple: observe the prominent digital degree readout on the dashboard and inspect the graduated scale markings along the circular arc. Our online protractor features dual scale numbering: outer counter-clockwise numbers and inner clockwise numbers. The shaded circular sector clearly highlights the opening between Ray 1 and Ray 2, allowing you to instantly determine the exact angle and its geometric classification (e.g., Acute, Right, Obtuse, Straight, or Reflex).',
  },
  {
    question: 'how to use protractor angle finder',
    answer:
      'To use the protractor angle finder for drawings or physical objects: 1) Load your diagram using "Upload Image / PDF" or capture a live photo using the "Take Photo" camera button. 2) Adjust the opacity and scale sliders so you can clearly see the underlying lines. 3) Click "AI Auto-Detect Angle" to automatically snap the protractor onto the dominant lines, or manually drag the colored handles to trace the joint. 4) Read the real-time degree calculation and click "Copy Angle Result" to copy the data to your clipboard.',
  },
  {
    question: 'How do I use this online protractor to measure an angle on my screen?',
    answer:
      'Simply drag the black center vertex to align with the corner vertex of the angle you wish to measure on your screen. Then drag the green ray (Ray 1) along the baseline of the angle, and drag the blue ray (Ray 2) along the second arm. The exact angle readout in degrees, radians, and slope is displayed in real-time on your dashboard.',
  },
  {
    question: 'Can I upload an image or blueprint to measure angles directly on it?',
    answer:
      'Yes! Click the "Upload Image / PDF" button in the toolbar to upload any JPG, PNG, WebP photo, CAD architectural blueprint, or multi-page PDF document. Your file will appear directly beneath the interactive protractor with adjustable transparency and scale sliders, allowing sub-pixel measurement precision with zero server uploads.',
  },
  {
    question: 'What is the difference between a 180° and 360° protractor?',
    answer:
      'A standard 180-degree protractor is a semi-circle tool primarily designed for acute, right, and obtuse angles up to 180°. An online protractor 360 is a full circular instrument that allows seamless measurement of reflex angles (180° to 360°), circular rotations, navigation bearings, and compass headings without requiring supplementary angle subtraction.',
  },
  {
    question: 'Is this online protractor accurate on mobile phones and tablets?',
    answer:
      'Yes, our online protractor is engineered with responsive SVG vector geometry, large touch hit targets, and full multi-touch pointer event handling. It runs smoothly on iOS Safari, Android Chrome, iPads, and touch-screen Chromebooks with dedicated touch-action scroll prevention for zero page jumping.',
  },
  {
    question: 'How do complementary and supplementary angles work?',
    answer:
      'Two angles are complementary if their sum equals 90 degrees (e.g., 30° and 60°). Two angles are supplementary if their sum equals 180 degrees (e.g., 45° and 135°). Our angle finder calculator automatically computes both the complementary (90° - θ) and supplementary (180° - θ) values for any measured angle instantaneously.',
  },
  {
    question: 'what is angle measurement tool?',
    answer:
      'An angle measurement tool is a physical or digital device used to quantify the rotational separation between two intersecting lines or surfaces. Common angle measurement tools include traditional circular protractors, digital angle finders, goniometers for medical physical therapy, inclinometers for tilt measurement, and bevel gauges for carpentry. Our online protractor combines all these capabilities in a free, interactive web application accessible on any device.',
  },
];
