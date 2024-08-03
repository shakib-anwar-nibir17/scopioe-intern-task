//DOC: Button
// This is a reusable Button component built using React and Tailwind CSS.
// It supports various props to customize its appearance and behavior.
// - `className`: Custom additional CSS classes.
// - `variant`: Style variants for different button types (default: 'primary').
// - `disabled`: Disables the button if set to true (default: false).
// - `loading`: Shows a loading spinner if set to true (default: false).
// - `size`: Size variants for the button (default: 'default').
// - `children`: The content inside the button.
// - `...props`: Other props are passed to the button element.

import { LucideLoader2 } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(
  (
    {
      className,
      variant = 'primary',
      disabled = false,
      loading = false,
      size = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const Comp = 'button';

    return (
      <Comp
        className={cn(
          'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-white hover:scale-90': variant === 'primary',
            'bg-secondary text-white hover:scale-90': variant === 'secondary',
            'text-primary underline underline-offset-2': variant === 'link',
            'hover:scale-90': variant === 'ghost',
          },
          {
            'w-[27rem] rounded-lg px-10 py-4': size === 'default',
            '': size === 'null',
          },
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <div className="rounded-full flex h-4 w-4 animate-spin items-center justify-center">
              <LucideLoader2 />
            </div>
            {children && <span>{children}</span>}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};
