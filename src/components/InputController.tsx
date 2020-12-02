import React, { ReactElement } from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';

import { Input, InputProps } from '@bizone/ui-bundle/esm/Input';
import { Tooltip } from '@bizone/ui-bundle/esm/Tooltip';
import { ControllerProps } from 'react-hook-form/dist/types/props';
import styled from 'styled-components';

import { withCls } from 'components/withCls';

const MaxWidthTooltip = styled(withCls(Tooltip))`
  max-width: 300px;
`;

type AsControllerProps = Omit<ControllerProps<'input'>, 'render'>;
type Props = Omit<ControllerProps<'input'>, 'as'> &
  InputProps & {
    control: Control;
    errors: {
      [key: string]: FieldError | undefined;
    };
  };
export function InputController(props: Props): ReactElement {
  const { errors, name } = props;
  const errorMessage = errors[name]?.message;

  return (
    <MaxWidthTooltip inverted show={!!errorMessage} content={errorMessage}>
      <Controller
        {...(props as AsControllerProps)}
        as={<Input error={!!errorMessage} />}
      />
    </MaxWidthTooltip>
  );
}
