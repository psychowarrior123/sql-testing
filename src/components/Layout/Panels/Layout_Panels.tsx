import React, { FC } from 'react';
import Overlay from 'uikit/Overlay';
import { useLayoutPanels } from 'stores/layoutPanelsStore';
import { observer } from 'mobx-react-lite';

const LayoutPanels: FC<{}> = () => {
  const { panel } = useLayoutPanels();
  if (!panel) {
    return null;
  }
  return (
    <div className="LayoutPanels">
      <Overlay backdrop="dark" />
      {panel}
    </div>
  );
};

export default observer(LayoutPanels);
