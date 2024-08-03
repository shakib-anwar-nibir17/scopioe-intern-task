// DOCS:
// Description:
// The Text component is a reusable React component for rendering text with various styles and variants.
// It supports different heading levels and body text with customizable sizes and font weights.

// Props:
// - variant (string): Defines the HTML element to be used and the text size.
//   Options are: 'display', 'headerLarge', 'headerMedium', 'headerSmall', 'titleLarge', 'titleMedium', 'titleSmall', 'bodyLarge', 'bodyRegular', 'sub'.
//   Default is 'bodyRegular'.
// - type (string): Defines the font weight. Options are: 'bold', 'semiBold', 'medium', 'normal'. Default is 'normal'.
// - children (node): The text content to be displayed inside the component.
// - className (string, optional): Additional custom classes for the component.

// Usage Example:
// <Text variant="headerLarge" type="bold" className="custom-class">
//   This is a large header
// </Text>

import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

export const Text = ({ variant = 'bodyRegular', type = 'normal', children, className }) => {
  const Component =
    (variant === 'display' && 'h1') ||
    (variant === 'headerLarge' && 'h1') ||
    (variant === 'headerMedium' && 'h2') ||
    (variant === 'headerSmall' && 'h3') ||
    (variant === 'titleLarge' && 'h4') ||
    (variant === 'titleMedium' && 'h5') ||
    (variant === 'titleSmall' && 'h6') ||
    (variant === 'bodyLarge' && 'p') ||
    (variant === 'bodyRegular' && 'p') ||
    (variant === 'sub' && 'p');

  return (
    <Component
      className={cn(
        {
          'text-6xl lg:text-7xl': variant === 'display',
          'text-5xl': variant === 'headerLarge',
          'text-4xl': variant === 'headerMedium',
          'text-3xl': variant === 'headerSmall',
          'text-2xl': variant === 'titleLarge',
          'text-xl': variant === 'titleMedium',
          'text-md': variant === 'titleSmall',
          'text-lg': variant === 'bodyLarge',
          'text-sm sm:text-base': variant === 'bodyRegular',
          'text-sm': variant === 'sub',
        },
        {
          'font-bold': type === 'bold',
          'font-semibold': type === 'semiBold',
          'font-medium': type === 'medium',
          'font-normal': type === 'normal',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'display',
    'headerLarge',
    'headerMedium',
    'headerSmall',
    'titleLarge',
    'titleMedium',
    'titleSmall',
    'bodyLarge',
    'bodyRegular',
    'sub',
  ]),
  type: PropTypes.oneOf(['bold', 'semiBold', 'medium', 'normal']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
