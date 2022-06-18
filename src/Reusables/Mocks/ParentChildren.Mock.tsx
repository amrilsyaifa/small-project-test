import React from 'react';

/**
 * Separate children from Component so it's not circular referencing when stringified
 */
interface IParentChildrenSeparator {
  mockLabel: string;
  children: React.ReactNode;
  MockElement?: React.FC;
}
export const ParentChildrenSeparator: React.FC<IParentChildrenSeparator> = ({
  mockLabel,
  children,
  MockElement,
  ...props
}) => {
  const RenderElement = MockElement ? MockElement : MockDivElement;

  return (
    <RenderElement data-testid={mockLabel} data-props={JSON.stringify(props)}>
      {children}
    </RenderElement>
  );
};

export const MockDivElement = ({ ...props }) => <div {...props} />;

export default ParentChildrenSeparator;
