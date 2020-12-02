import React, { ReactElement, ReactNode } from 'react';

import { Text } from '@bizone/ui-bundle/esm/Text';
import styled from 'styled-components';

import { withCls } from 'components/withCls';

const defaultLabelMargin = 32;

const Container = styled.div`
  margin-bottom: 24px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;
const GrayText = styled(withCls(Text))`
  display: block;
  color: #999999;
  margin-top: 8px;
`;
interface LabelTextProps {
  marginTop: number;
}
const LabelText = styled(withCls(Text))`
  display: block;
  margin-top: ${(props: LabelTextProps) => props.marginTop}px;
`;

interface Props {
  label?: ReactNode;
  hint?: ReactNode;
  marginTop?: number;
  children: ReactNode;
  className?: string;
}
export function FormItem({
  children,
  className,
  hint,
  label,
  marginTop = 0,
}: Props): ReactElement {
  return (
    <Container className={className}>
      {label && (
        <LabelText marginTop={marginTop ?? defaultLabelMargin}>
          {label}
        </LabelText>
      )}
      <ItemContainer>{children}</ItemContainer>
      {hint && <GrayText>{hint}</GrayText>}
    </Container>
  );
}
