import React, { FC } from 'react';
import cls from 'classnames';
import './style.less';
import Icon from '../Icon';
import { noop } from '@/constants';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: string;
  hover?: boolean;
  disabled?: boolean;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  className?: string;
  style?: React.CSSProperties;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { type, disabled, hover, className, onClick = noop, children, ...rest } = props;
  return (
    <button
      className={cls('icon-button', { 'hover:bg-gray-700': !disabled && hover }, className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      <Icon type={type} size="inherit" />
      {children}
    </button>
  );
};

export default {
  Icon: IconButton,
};
