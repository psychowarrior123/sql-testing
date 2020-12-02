import React from 'react';

interface StyledBemComponentProps {
  className: string;
}

export const withCls = (Child: any): any =>
  React.forwardRef(({ className, ...rest }: StyledBemComponentProps, ref) => (
    <Child ref={ref} cls={className} {...rest} />
  ));
