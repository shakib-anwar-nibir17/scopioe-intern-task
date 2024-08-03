// DOCS:
// Description:
// The Input component is a reusable React component for rendering input fields with various styles and types. It includes features for focusing, toggling password visibility, and displaying a label.

// Props:
// - className (string, optional): Additional custom classes for the component.
// - id (string): The unique identifier for the input field.
// - name (string): The name attribute for the input field, used for form submission.
// - placeholder (string): The placeholder text displayed inside the input field.
// - type (string): The type of input, such as 'text', 'password', etc. Default is 'text'.
// - label (string): The label text displayed above the input field. Default is 'Please provide a label'.

// Usage Example:
// <Input
//   id="password"
//   name="password"
//   type="password"
//   placeholder="Enter your password"
//   label="Password"
//   className="custom-class"
// />

import { Eye, EyeOff } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { Text } from '../text/Text';

export const Input = React.forwardRef(
  ({ className, id, name, placeholder, type = 'text', label = 'Please provide a label' }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    useEffect(() => {
      if (isFocused) {
        inputRef.current.focus();
      }
    }, [isFocused]);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="mt-4">
        <Text type="medium" className={`mb-2`}>
          {label}
        </Text>
        <div className="relative my-2">
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(
              `h-[4.8rem] w-full rounded-lg border ${isFocused ? 'border-primary' : 'border-inputBorder'} pl-4 focus:outline-none`,
              className
            )}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform"
            >
              {showPassword ? <Eye color="#5C635A" /> : <EyeOff color="#5C635A" />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

Input.displayName = 'Input';
