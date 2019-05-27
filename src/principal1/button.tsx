import React, { useMemo } from 'react';

function slowlyCalculateTextColor(color: string) {
  return color;
}

function Button({ color, children }: { color: string; children: any }) {
  const textColor = useMemo(() => slowlyCalculateTextColor(color), [color]);
  return (
    <button className={'Button-' + color + ' Button-text-' + textColor}>
      {children}
    </button>
  );
}

export default React.memo(Button);
