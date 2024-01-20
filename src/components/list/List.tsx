import React from 'react';

interface ListProps<T> {
  data : T[]
  styles? :string
  renderItem : (item: T) => React.ReactNode
}
export const List = <T extends {}> ({data, renderItem, styles}: ListProps<T>) => {
  return (
    <div className={styles}>
      {data.map((item)=> (
          renderItem(item)
      ))}
    </div>
  );
};